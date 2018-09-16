<template>
  <figure class="image" :class="imageClasses">
    <img
      src=""
      :alt="alt"
      ref="container"
    >
  </figure>
</template>

<script>
export default {
  props: {
    size: String,
    rounded: Boolean,
    alt: {
      type: String,
      required: true
    },
    src: {
      required: true
    }
  },

  data () {
    return {
      loading: true
    }
  },

  computed: {
    imageClasses () {
      return [
        `is-${this.size.replace(':', 'by')}`,
        !this.rounded || 'is-rounded',
        !this.loading || 'is-loading'
      ]
    }
  },

  mounted () {
    this.lazyLoadImage()
  },

  methods: {
    lazyLoadImage () {
      // If we find a CDN shorthand, replace it with the full URL.
      const src = this.src && this.src.match(/^\$\//)
        ? this.src.replace(/^\$\//, this.$config.assets.cdnUrl)
        : this.src

      // Mock another image element and load the image into it.
      const el = document.createElement('img')
      el.onload = () => {
        this.$refs.container.src = src
        this.loading = false
        this.failed = false
      }
      el.src = src
    }
  }
}
</script>
