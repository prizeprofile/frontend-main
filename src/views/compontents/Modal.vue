<template>
  <div class="modal is-active" v-if="isActive">
    <div class="modal-background" @click="hide"></div>
    <button aria-label="close" class="modal-close is-large" @click="hide"></button>

    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { HIDE_MODALS } from '@/store/types'

export default {
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
  },

  methods: {
    hide () {
      this.$store.dispatch(HIDE_MODALS)
    }
  }
}
</script>
