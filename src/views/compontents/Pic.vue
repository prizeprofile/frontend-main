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
    size: {
      type: String,
      default: ''
    },
    fallback: String,
    rounded: Boolean,
    radius: Boolean,
    filled: Boolean,
    timeout: {
      type: Number,
      default: 2000
    },
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
        `is-${this.size.replace(':', 'x')}`,
        !this.rounded || 'is-rounded',
        !this.loading || 'is-loading',
        !this.filled || 'is-filled',
        !this.radius || 'has-radius'
      ]
    }
  },

  async mounted () {
    this.lazyLoadImage()
  },

  methods: {
    lazyLoadImage () {
      // Mock another image element and load the image into it.
      const el = document.createElement('img')

      el.src = this.getFullSrc(this.src)

      return new Promise((resolve, reject) => {
        el.onload = () => resolve(this.loading = false)
        setTimeout(() => {
          if (this.fallback) reject()
        }, this.timeout)
      })
        .then(() => this.src)
        .catch(() => this.fallback)
        .then((src) => {
          this.loading = false
          this.$refs.container.src = this.getFullSrc(src)
        })
        .catch(_ => _)
    },

    getFullSrc (src) {
      // If we find a CDN shorthand, replace it with the full URL.
      return src && src.match(/^\$\//)
        ? src.replace(/^\$\//, this.$config.assets.cdnUrl)
        : src
    }
  },

  watch: {
    src () {
      this.lazyLoadImage()
    }
  }
}
</script>
