<template>
  <div class="welcome-modal modal" v-bind:class="{ 'is-active': isActive }">
    <div class="modal-background"></div>

    <div class="modal-content">
      <div class="hero is-white is-medium">
        <div class="hero-head is-centered">
          <img v-bind:src="slides[slide].image">

          <div class="logo">
            <img src="/static/images/branding/logo_green.png" alt="PrizeProfile">
            <div class="is-bold has-text-grey">OVERVIEW</div>
          </div>
        </div>

        <div class="modal-body">
          <div class="title has-text-primary is-size-4 is-centered">
            {{ slides[slide].heading }}
          </div>

          <p class="has-text-grey-dark" v-text="slides[slide].text"></p>
        </div>

        <div class="hero-footer">
          <div class="is-pointer" v-on:click="hide">
            CLOSE
          </div>

          <div class="control">
            <span v-for="n in 4">
              <input
                type="radio"
                name="slider"
                v-model="slide"
                v-bind:value="n - 1"
                :checked="n === 1"
                v-bind:id="'slider-' + (n - 1)"
              >

              <label v-bind:for="'slider-' + (n - 1)">
                <span>
                  <div class="bg"></div>
                </span>
              </label>
            </span>
          </div>

          <div class="has-text-primary is-pointer" v-visible="slide < 3">
            <span
              class="is-unselectable"
              v-on:click="slide = slide + 1"
            >NEXT</span>
          </div>
        </div>
      </div>
    </div>

    <button
      v-on:click="hide"
      aria-label="close"
      class="modal-close is-large"
    ></button>
  </div>
</template>

<script>
import { MODAL_HIDE } from '@/store/types'

export default {
  data () {
    return {
      slide: 0,

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
    isActive () {
      return this.$store.getters.modal('welcome').isActive
    }
  },

  methods: {
    hide () {
      this.$store.dispatch(MODAL_HIDE, 'welcome')
    }
  }
}
</script>
