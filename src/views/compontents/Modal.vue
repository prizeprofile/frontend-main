<template>
  <div class="modal is-active" v-if="isActive">
    <div class="modal-background" @click="hideModals"></div>
    <button aria-label="close" class="modal-close is-large" @click="hideModals"></button>

    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ControlsModals from '@/core/mixins/ControlsModals'

export default {
  mixins: [ControlsModals],

  props: {
    name: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters(['activeModal']),

    isActive () {
      return this.activeModal === this.name
    }
  }
}
</script>
