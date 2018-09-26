<template>
  <div class="form-control" :class="formControlClass">
    <p class="form-icon is-left">
      <slot name="icon-left"></slot>
    </p>
    <p class="form-icon is-right">
      <slot name="icon-right" ></slot>
    </p>
    <input
      class="form-input"
      :class="formInputClass"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      required: true
    },
    white: Boolean,
    medium: Boolean,
    large: Boolean,
  },

  computed: {
    formInputClass () {
      return {
        'is-white': this.white,
        'is-medium': this.medium,
        'is-large': this.large
      }
    },

    formControlClass () {
      return {
        'has-icon-left': this.hasIconLeft,
        'has-icon-right': this.hasIconRight,
      }
    },

    hasIconLeft () {
      return this.$slots['icon-left']
    },

    hasIconRight () {
      return this.$slots['icon-right']
    }
  }
}
</script>
