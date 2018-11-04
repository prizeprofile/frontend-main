<template>
  <panel dismissible="welcome-brick" elevated>
    <div class="welcome-brick has-padding-3" slot-scope="{ dismissPanel }">
      <div class="welcome-brick-title">
        <h3 class="title is-4">👋&nbsp;&nbsp;New to Twitter Competitions?</h3>
        <p class="subtitle is-6 has-text-grey">Find out how they work in our handy 4 step guide.</p>
      </div>

      <div class="welcome-brick-action">
        <action @click="showModal('welcome')">Start Here</action>
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
