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
import ControlsModals from '@/core/mixins/ControlsModals'

export default {
  mixins: [ControlsModals],

  data () {
    return {
      currentPage: 0,

      slides: [
        {
          image: '$/images/welcome/twitter/intro.png',
          heading: 'Get Free Stuff on Twitter',
          text: 'Brands are always giving away free stuff on Twitter. We scout out the best competitions so you can enter them all at once.'
        },
        {
          image: '$/images/welcome/twitter/entry-methods.gif',
          heading: 'One Click Enter - It’s Magic!',
          text: 'We’ve made things easy. Click the “Enter” button and we\'ll get to work completing the actions needed to enter the competition.'
        },
        {
          image: '$/images/welcome/twitter/account-connect.png',
          heading: 'Connect Your Account',
          text: 'For us to enter competitions on your behalf you will need to connect your Twitter account. If you\'re new to Twitter you can also sign up <a href="https://twitter.com/i/flow/signup" target="_blank">here</a>.'
        },
        {
          image: '$/images/welcome/twitter/any-suggestions.png',
          heading: 'Any Suggestions?',
          text: 'Have an idea on how we can make things easier? Drop us a message on our contact form and we will try our best to make it happen!'
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
