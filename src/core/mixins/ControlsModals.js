import { HIDE_MODALS, SHOW_MODAL } from '@/store/types'

export default {
  methods: {
    hideModals () {
      return this.$store.dispatch(HIDE_MODALS)
    },

    showModal (name) {
      return this.$store.dispatch(SHOW_MODAL, name)
    }
  }
}
