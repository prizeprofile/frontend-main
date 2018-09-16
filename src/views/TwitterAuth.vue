<template>
  <default-layout>
    <div class="home-content">
      <div class="block"></div>
      <div class="container">
        <div class="is-loading hero-body is-centered block">
          <h2>
            Almost done! (^o^)丿
          </h2>

          <p>
            Please don't close this page yet. PrizeProfile is validating
            your account.
          </p>
        </div>

        <social />
      </div>
    </div>
  </default-layout>
</template>

<script>
import Social from '@/views/partials/common/Social'
import { USER_AUTHORISE_TWITTER } from '@/store/types'

export default {
  components: { Social },

  data () {
    return {
      validated: false
    }
  },

  mounted () {
    const params = new window.URL(window.location.href).searchParams
    let token = params.get('oauth_token')
    let verifier = params.get('oauth_verifier')
    let tokenSecret = this.$store.getters.userToken('token_secret')
    // TODO: Add validation for empty tokens.

    this.$store.dispatch(USER_AUTHORISE_TWITTER, {
      token,
      verifier,
      token_secret: tokenSecret
    })
      .then(() => setTimeout(() => window.location = '/', 1000))
  }
}
</script>
