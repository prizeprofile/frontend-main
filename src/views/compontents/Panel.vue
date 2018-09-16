<template>
  <div class="panel" :class="panelClasses" v-if="!dismissed">
    <button class="delete" v-show="dismissible" @click="dismiss()"></button>
    <div class="panel-head" v-if="title">{{ title }}</div>
    <div class="panel-body"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    medium: Boolean,
    elevated: Boolean,
    dismissible: String
  },

  data () {
    return {
      dismissed: false
    }
  },

  mounted () {
    this.dismissed = !!localStorage.getItem(this.panelKey)
  },

  computed: {
    panelClasses () {
      return {
        'is-medium': this.medium,
        'is-elevated': this.elevated
      }
    },

    panelKey () {
      return `panel-${this.dismissible}-dismissed`
    }
  },

  methods: {
    dismiss () {
      this.dismissed = true
      localStorage.setItem(this.panelKey, true)
    }
  }
}
</script>
