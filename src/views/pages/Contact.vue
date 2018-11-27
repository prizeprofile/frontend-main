<template>
  <layout type="SinglePage" header="Default">
    <div slot="heading">
      <h1 class="title is-3 has-text-white">
        Get In Touch
      </h1>

      <p class="subtitle is-5 has-text-white">
        Hey! Let’s talk, we’d love to hear from you.
      </p>
    </div>

    <main slot="main">
      <section class="section">
        <div class="container">
          <form class="has-max-width-medium" style="margin: auto" @submit="send">
            <div class="field">
              <div class="control has-icons-left">
                <input
                  v-model="fields.name.value"
                  :class="[fields.name.status && `is-${fields.name.status}`]"
                  type="text"
                  class="input is-medium"
                  placeholder="Name"
                />

                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <div class="control has-icons-left">
                <input
                  v-model="fields.email.value"
                  :class="[fields.email.status && `is-${fields.email.status}`]"
                  type="text"
                  class="input is-medium"
                  placeholder="Email"
                />

                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <textarea
                  v-model="fields.message.value"
                  :class="[fields.message.status && `is-${fields.message.status}`]"
                  class="textarea is-medium"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div class="has-text-right">
              <div>
                <button
                  class="button is-primary"
                  :class="{ 'is-loading': isLoading }"
                >SUBMIT</button>
              </div>
              <div v-if="status">
                <small class="is-size-7" :class="[`has-text-${status}`]">
                  <span v-if="status === 'danger'">
                    A server error has occurred. Please contact us on
                    bausanomichal@gmail.com instead.
                  </span>
                  <span v-else>
                    Thank you for your message! We will be in touch soon.
                  </span>
                </small>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  </layout>
</template>

<script>
import axios from 'axios'
import config from '@/config'

export default {
  data () {
    return {
      isLoading: false,
      status: null,
      fields: {
        name: {
          value: '',
          status: null,
          validate: value => value.length > 2 && value.length < 32
        },
        email: {
          value: '',
          status: null,
          validate: value => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value) && value.length < 64
        },
        message: {
          value: '',
          status: null,
          validate: value => value.length > 8 && value.length < 1024
        }
      }
    }
  },

  methods: {
    async send (e) {
      e.preventDefault()

      const { name, email, message } = this.fields

      // If any of the fields is not valid, abort.
      if (
        name.status !== 'success' ||
        email.status !== 'success' ||
        message.status !== 'success'
      ) {
          return
      }

      this.isLoading = true

      try {
        // Sends the request to APIs.
        await axios.post(config.api.contact, {
          name: name.value,
          email: email.value,
          message: message.value
        })

        this.status = 'success'
      } catch (_) {
        this.status = 'danger'
      } finally {
        this.isLoading = false
      }
    }
  },

  /**
   * Sets watchers for fields that validate user input;
   */
  watch: {
    'fields.name.value': function (val) {
      this.fields.name.status = this.fields.name.validate(val) ? 'success' : 'danger'
    },
    'fields.email.value': function (val) {
      this.fields.email.status = this.fields.email.validate(val) ? 'success' : 'danger'
    },
    'fields.message.value': function (val) {
      this.fields.message.status = this.fields.message.validate(val) ? 'success' : 'danger'
    }
  }
}
</script>
