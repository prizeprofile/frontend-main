<template>
  <div class="single-page-layout">
    <div class="has-background-primary">
      <section class="section has-text-centered">
        <slot name="heading"></slot>
      </section>
    </div>
    <section class="section">
      <div class="container">
        <slot name="main"></slot>
      </div>

      <default-footer></default-footer>
    </section>
  </div>
</template>

<script>
import DefaultFooter from '@/views/layouts/footers/DefaultFooter'

export default {
  components: { DefaultFooter },

  mounted () {
    this.$emit('slotted', ['main', 'heading'])
  }
}
</script>
