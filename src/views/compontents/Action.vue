<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    class="action"
    :class="hasClasses"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      default: () => null
    },
    type: {
      type: String,
      default: 'primary'
    },
    classes: {
      type: Array,
      default: () => []
    },
    loading: Boolean,
    inverted: Boolean,
    small: Boolean,
    medium: Boolean,
    large: Boolean,
    fullwidth: Boolean,
    disabled: Boolean,
    responsive: Boolean
  },

  computed: {
    hasClasses () {
      return [
        `is-${this.type}`,
        !this.loading || 'is-loading',
        !this.inverted || 'is-inverted',
        !this.small || 'is-small',
        !this.medium || 'is-medium',
        !this.large || 'is-large',
        !this.fullwidth || 'is-fullwidth',
        !this.responsive || 'is-responsive',
        ...this.classes
      ]
    }
  }
}
</script>
