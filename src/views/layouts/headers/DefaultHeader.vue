<template>
  <header class="default-header">
    <div class="container">
      <div class="block">
        <router-link class="nav-item is-static" :to="{ name: 'home' }">
          <img
            v-lazy="`$/images/branding/logo-white.png`"
            alt="Prize Profile"
            class="default-header-logo"
          />
        </router-link>
      </div>

      <nav class="nav is-primary">
        <div class="nav-menu">
          <div class="menu-feed">
            <div
              class="menu-feed-item"
              v-for="(feed, key) in feeds"
              :key="key"
              :class="{ 'is-active': feed.isActive }"
            >
              <router-link :to="{ name: feed.slug }">
                <span class="icon is-medium">
                  <i :class="feed.class"></i>
                </span>
                {{ feed.slug }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="nav-spacer"></div>
        <div
          class="nav-menu"
          style="position: relative"
          @click="isHiddenMenu = !isHiddenMenu"
        >
          <div
            v-if="isLogged"
            class="level is-mobile is-unselectable"
          >
            <div class="level-item has-padding-2">
              <div>
                <span class="has-icon-tick">
                  <pic
                    class="competition-promoter-logo"
                    size="profile-pic"
                    rounded filled
                    :src="user.info.image" alt="Profile"
                  ></pic>
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

            <div class="menu-user" :class="{ 'is-hidden-mobile': isHiddenMenu }">
              <div>
                <ul>
                  <router-link :to="{ name: 'contact' }">
                    <li class="has-padding-2">
                      <i class="fas fa-envelope"></i>
                      &nbsp;&nbsp;Contact
                    </li>
                  </router-link>

                  <a @click="logout">
                    <li class="has-padding-2">
                      <i class="fas fa-sign-out-alt"></i>
                      &nbsp;&nbsp;Logout
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <a v-else class="nav-item is-static">
            <action responsive inverted @click="showModal('connect-twitter')" :loading="loading">
              <icon name="fab fa-twitter"></icon>
              &nbsp;
              Connect
            </action>
          </a>
        </div>
      </nav>
    </div>

    <sort-filters></sort-filters>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { feeds } from '@/core/feeds'
import SortFilters from '@/views/partials/common/SortFilters'
import ControlsModals from '@/core/mixins/ControlsModals'
import { USER_LOGOUT, USER_AUTHORISE_TWITTER } from '@/store/types'

export default {
  components: { SortFilters },

  mixins: [ ControlsModals ],

  data () {
    return {
      loading: false,
      isHiddenMenu: true,
      feeds
    }
  },

  mounted () {
    const params = new window.URL(window.location.href).searchParams
    let token = params.get('oauth_token')
    let verifier = params.get('oauth_verifier')

    if (token && verifier && !this.isLogged) {
      this.hideModals()

      this.attemptLogin(token, verifier)

      this.$router.replace('/')
    }
  },

  methods: {
    /**
     * @param {String} token
     * @param {String} verifier
     *
     * @return {Promise<void>}
     */
    async attemptLogin (token, verifier) {
      this.loading = true

      this.$store.dispatch(USER_AUTHORISE_TWITTER, {
        token,
        verifier,
        token_secret: this.userToken('token_secret')
      })
        .then(() => this.loading = false)
        .catch(() => setTimeout(() => this.attemptLogin(token, verifier), 2000))
    },

    /**
     * Logs user out.
     */
    logout () {
      return this.$store.dispatch(USER_LOGOUT)
    }
  },

  computed: {
    ...mapGetters(['user', 'isLogged', 'userToken'])
  }
}
</script>
