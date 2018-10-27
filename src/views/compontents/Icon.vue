<template>
  <span class="icon" :class="sizeClass">
    <i :class="[type].concat(name.split(' '))"></i>
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'fas'
    },
    small: Boolean,
    medium: Boolean,
    large: Boolean
  },

  computed: {
    sizeClass () {
      return {
        'is-small': this.small,
        'is-medium': this.medium,
        'is-large': this.large
      }
    }
  }
}
</script>
