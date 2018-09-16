<template>
  <panel dismissible="welcome-brick" elevated>
    <div class="welcome-brick" slot-scope="{ dismissPanel }">
      <div class="welcome-brick-title">
        <h3 class="title is-4">👋&nbsp;&nbsp;New to PrizeProfile?</h3>
        <p class="subtitle is-6 has-text-grey">Find out how PrizeProfile works in our handy 3 step guide!</p>
      </div>

      <div class="welcome-brick-action">
        <action medium @click="showModal('welcome'); dismissPanel()">Start Here</action>
      </div>
    </div>
  </panel>
</template>

<script>
import ControlsModals from '@/core/mixins/ControlsModals'

export default {
  mixins: [ControlsModals]
}
</script>
