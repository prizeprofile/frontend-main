<template>
  <div class="default-layout">
    <section class="section">
      <div class="container">
        <div class="columns is-mobile is-multiline">
          <div class="column is-4-desktop is-12-touch">
            <slot name="side"></slot>

            <default-footer class="is-hidden-touch"></default-footer>
          </div>

          <div class="column is-8-desktop is-12-touch">
            <slot name="main"></slot>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DefaultFooter from '@/views/layouts/footers/DefaultFooter'

export default {
  components: { DefaultFooter },

  mounted () {
    this.$emit('slotted', ['main', 'side'])
  }
}
</script>
