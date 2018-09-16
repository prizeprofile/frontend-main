<template>
  <div class="panel" :class="panelClasses">
    <div class="panel-head" v-if="title">{{ title }}</div>
    <div class="panel-body"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    medium: Boolean,
    elevated: Boolean
  },

  computed: {
    panelClasses () {
      return {
        'is-medium': this.medium,
        'is-elevated': this.elevated
      }
    }
  }
}
</script>
