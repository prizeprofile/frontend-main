<template>
  <modal name="welcome">
    <div class="welcome-modal">
      <div class="welcome-modal-image">
        <pic size="2:1" :src="currentSlide.image" :alt="currentSlide.heading"></pic>
      </div>

      <div class="welcome-modal-content">
        <h3 class="title is-3 has-text-primary">{{ currentSlide.heading }}</h3>
        <p>{{ currentSlide.text }}</p>
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
import ControlsModals from '@/core/mixins/ControlsModals'

export default {
  mixins: [ControlsModals],

  data () {
    return {
      currentPage: 0,

      slides: [
        {
          image: 'http://via.placeholder.com/640x320',
          heading: 'How PrizeProfile Works',
          text: 'We wanted to make a website that made entering Twitter competitions as easy as possible. PrizeProfile looks for new competitions every minute to adds them to our feed!'
        },
        {
          image: 'http://via.placeholder.com/640x320',
          heading: 'Filter Competitions',
          text: 'Use the filter on the right-hand side of the page so you only see competitions you are interested in.'
        },
        {
          image: 'http://via.placeholder.com/640x320',
          heading: 'One Click Enter - It’s Magic!',
          text: 'Click on the magic “Enter” button and PrizeProfile will get to work completing the actions needed to enter the competition.'
        },
        {
          image: 'http://via.placeholder.com/640x320',
          heading: 'Connect Your Account',
          text: 'In order for PrizeProfile to enter the competition we need to connect your Twitter Account. If you are new to twitter you can also sign up below.'
        }
      ]
    }
  },

  computed: {
    currentSlide () {
      return this.slides[this.currentPage]
    },

    lastPage () {
      return this.currentPage === this.slides.length - 1
    }
  }
}
</script>
