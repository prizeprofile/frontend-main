<template>
  <div class="welcome-brick brick">
    <div class="close">
      <span>
        <i class="fas fa-times"></i>
      </span>
    </div>

    <div class="columns">
      <div class="column is-three-quarter">
        <h3>
          👋 New to PrizeProfile?
        </h3>

        <p>
          Find out how PrizeProfile works in our handy 3 step guide!
        </p>
      </div>

      <div class="column is-one-quarter">
        <div>
          <span
            class="button is-primary"
            v-on:click="openModal"
          >START HERE</span>
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
      this.$store.dispatch(MODAL_SHOW, 'welcome')
    }
  }
}
</script>
