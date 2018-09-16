<template>
  <div class="badge" :class="badgeClasses" v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    flex: Boolean,
    static: Boolean
  },

  computed: {
    badgeClasses () {
      return {
        'is-active': this.active,
        'is-flex-width': this.flex,
        'is-static': this.static
      }
    }
  }
}
</script>
