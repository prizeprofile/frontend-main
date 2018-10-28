<template>
  <header class="default-header is-fixed">
    <div class="container">
      <nav class="nav is-primary">
        <div class="nav-menu">
          <router-link class="nav-item is-static" :to="{ name: 'home' }">
            <img v-lazy="`$/images/branding/logo-white.png`" alt="Prize Profile">
          </router-link>
        </div>
        <div class="nav-spacer"></div>
        <div class="nav-menu">
          <div
            v-if="isLogged"
            class="level is-mobile has-padding-3 is-unselectable"
          >
            <div class="level-item has-padding-2">
              <div>
                <span class="has-icon-tick">
                  <img
                    class="image is-48x48 is-rounded"
                    :src="user.info.image"
                    alt="Profile picture"
                  >
                </span>
              </div>
            </div>

            <div class="level-item is-hidden-mobile has-text-white">
              <div>
                <p
                  class="has-text-white has-text-weight-bold"
                  v-text="user.info.name || user.info.screen_name"
                ></p>

                <p class="clear is-size-7 has-text-weight-light">
                  Account connected
                </p>
              </div>
            </div>
          </div>
          <a v-else class="nav-item is-static">
            <action responsive inverted @click="showModal('connect-twitter')" :loading="loading">
              <icon name="fab fa-twitter"></icon>
              &nbsp;
              Connect Twitter
            </action>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { USER_AUTHORISE_TWITTER } from '@/store/types'
import ControlsModals from '@/core/mixins/ControlsModals'

export default {
  mixins: [ ControlsModals ],

  data () {
    return {
      loading: false
    }
  },

  mounted () {
    const params = new window.URL(window.location.href).searchParams
    let token = params.get('oauth_token')
    let verifier = params.get('oauth_verifier')

    if (token && verifier && !this.isLogged) this.attemptLogin(token, verifier)
  },

  methods: {
    /**
     * @param {String} token
     * @param {String} verifier
     *
     * @return {Promise<void>}
     */
    async attemptLogin (token, verifier) {
      this.hideModals()
      this.loading = true

      this.$store.dispatch(USER_AUTHORISE_TWITTER, {
        token,
        verifier,
        token_secret: this.userToken('token_secret')
      })

      this.$router.replace('/')
    }
  },

  computed: {
    ...mapGetters(['user', 'isLogged', 'userToken'])
  }
}
</script>
