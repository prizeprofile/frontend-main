<template>
  <div class="panel" :class="panelClasses" v-if="!dismissed">
    <span v-if="accordionMobile" class="accordion is-hidden-tablet">
      <i class="fas fa-angle-up" v-show="expanded"></i>
      <i class="fas fa-angle-down" v-show="!expanded"></i>
    </span>

    <div
      class="panel-head"
      v-if="title"
      v-text="title"
      @click="expanded = !expanded"
    ></div>
    <div
      class="panel-body"
      :class="{ 'is-hidden-mobile': accordionMobile && !expanded }"
    >
      <slot :dismissPanel="dismissPanel"></slot>
    </div>

    <button class="delete" v-show="dismissible" @click="dismissPanel()"></button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    medium: Boolean,
    elevated: Boolean,
    dismissible: String,
    accordionMobile: Boolean,
    default: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      dismissed: false,
      expanded: this.default
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
    dismissPanel () {
      this.dismissed = true
      localStorage.setItem(this.panelKey, true)
    }
  }
}
</script>
