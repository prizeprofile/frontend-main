<template>
  <panel dismissible="welcome-brick" elevated>
    <div class="welcome-brick has-padding-1" slot-scope="{ dismissPanel }">
      <div class="welcome-brick-title">
        <h3
          class="title is-4"
          v-html="data.title"
        ></h3>

        <p
          class="subtitle is-6 has-text-grey"
          v-html="data.description"
        ></p>
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
  mixins: [ControlsModals],

  props: ['data']
}
</script>
