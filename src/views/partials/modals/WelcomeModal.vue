<template>
  <modal name="welcome">
    <div class="welcome-modal">
      <div class="welcome-modal-image">
        <pic size="2:1" :src="currentSlide.image" :alt="currentSlide.heading"></pic>
      </div>

      <div class="welcome-modal-content">
        <h3 class="title is-4 has-text-primary">{{ currentSlide.heading }}</h3>
        <p v-html="currentSlide.text"></p>
      </div>

      <div class="welcome-modal-controls">
        <action fullwidth type="default" @click="currentPage === 0 || --currentPage">Previous</action>

        <!-- Extract if needed. -->
        <div class="pagination">
          <span
            v-for="(_, page) in slides.length"
            :key="page"
            :class="{ 'is-active': page === currentPage }"
            @click="currentPage = page"
          ></span>
        </div>

        <action fullwidth @click="++currentPage" v-if="!lastPage">Next</action>
        <action fullwidth @click="hideModals" v-else>Done</action>
      </div>
    </div>
  </modal>
</template>

<script>
import HasActiveFeed from '@/core/mixins/HasActiveFeed'
import ControlsModals from '@/core/mixins/ControlsModals'

export default {
  mixins: [ControlsModals, HasActiveFeed],

  data () {
    return {
      currentPage: 0
    }
  },

  computed: {
    slides () {
      return this.activeFeed.welcome.modal.slides
    },

    currentSlide () {
      return this.slides[this.currentPage]
    },

    lastPage () {
      return this.currentPage === this.slides.length - 1
    }
  },

  watch: {
    activeFeed () {
      this.currentPage = 0
    }
  }
}
</script>
