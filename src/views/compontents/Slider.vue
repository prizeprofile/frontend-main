<template>
  <div class="slider">
    <input
      type="range"
      :min="min"
      :max="max"
      @input="$emit('input', parseInt($event.target.value))"
      :value="value"
    >
    <span :style="{ width: `calc(${coverWidth}% + ${coverOffset}rem)`}"></span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 5
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 100
    }
  },

  computed: {
    diff () {
      return this.max - this.min
    },

    coverWidth () {
      return (this.diff - this.value + this.min) / this.diff * 100
    },

    coverOffset () {
      return 1.5 * (100 - this.coverWidth) / 100
    }
  }
}
</script>
