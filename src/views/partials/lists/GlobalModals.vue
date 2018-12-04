<template>
  <aside>
    <welcome-twitter-modal></welcome-twitter-modal>
    <connect-twitter-modal></connect-twitter-modal>
  </aside>
</template>

<script>
import WelcomeTwitterModal from '@/views/partials/modals/WelcomeTwitterModal'
import ConnectTwitterModal from '@/views/partials/modals/ConnectTwitterModal'

export default {
  components: { ConnectTwitterModal, WelcomeTwitterModal }
}
</script>
