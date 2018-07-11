<template>
  <div class="is-fullwidth has-background-white">
    <div class="container">
      <div class="default-header">
        <div class="default-header-title">
          <router-link to="/">
            <img src="/static/images/branding/logo.png" alt="PrizeProfile.">
          </router-link>
        </div>

        <div class="default-header-login">
          <div class="default-login">
            <span
              v-on:click="openModal"
              class="default-login-icon is-hidden-tablet is-pointer"
            >
              <i class="fas fa-user"></i>
            </span>

            <div class="is-hidden-mobile is-flex-tablet">
              <span
                v-on:click="openModal"
                class="button is-info is-flex-right is-focused is-semibold"
              >CONNECT TWITTER</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MODAL_SHOW } from '@/store/types'

export default {
  methods: {
    openModal () {
      this.$store.dispatch(MODAL_SHOW, 'connect-twitter')
    }
  }
}
</script>
