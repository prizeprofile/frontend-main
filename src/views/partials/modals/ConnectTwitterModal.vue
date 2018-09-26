<template>
  <modal name="connect-twitter">
    <div class="connect-twitter-modal">
      <div class="connect-twitter-modal-image">
        <pic :src="`$/images/branding/logo.png`" alt="Prize Profile"></pic>
      </div>

      <div class="connect-twitter-modal-body">
        <h3 class="title is-3">Connect Twitter</h3>
        <p class="subtitle is-5 has-text-grey">
          To enter competitions in one click we need you to connect with your Twitter.
        </p>
      </div>

      <div class="connect-twitter-modal-action">
        <action medium @click="auth">
          <icon type="fab" name="fa-twitter"></icon>
          &nbsp;&nbsp;
          Connect Twitter
        </action>
      </div>
    </div>
  </modal>
</template>

<script>
import { USER_CONNECT_TWITTER } from '@/store/types'

export default {
  methods: {
    auth () {
      this.$store.dispatch(USER_CONNECT_TWITTER)
    }
  }
}
</script>
