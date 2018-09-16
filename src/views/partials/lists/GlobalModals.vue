<template>
  <aside>
    <welcome-modal></welcome-modal>
    <connect-twitter-modal></connect-twitter-modal>
  </aside>
</template>

<script>
import WelcomeModal from '@/views/partials/modals/WelcomeModal'
import ConnectTwitterModal from '@/views/partials/modals/ConnectTwitterModal'

export default {
  components: { ConnectTwitterModal, WelcomeModal }
}
</script>
