<template>
  <div class="default-header">
    <div class="default-header-title">
      <router-link to="/">
        <h1 class="has-text-primary">
          PrizeProfile<span class="has-text-grey-darker">.</span>
        </h1>
      </router-link>
    </div>

    <div class="default-header-login" v-on:click="openModal">
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
            class="button is-info is-flex-right is-focused"
          >CONNECT TWITTER</span>
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
