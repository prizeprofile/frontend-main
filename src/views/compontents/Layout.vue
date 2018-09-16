<template>
  <div>
    <component :is="`${header}Header`"></component>
    <component :is="`${type}Layout`" @slotted="slots = $event">
      <slot
        v-for="slot in slots"
        :name="slot"
        :slot="slot"
      ></slot>
    </component>
  </div>
</template>

<script>
const DefaultLayout = () => import ('@/views/layouts/DefaultLayout')
const DefaultHeader = () => import ('@/views/layouts/headers/DefaultHeader')

export default {
  components: { DefaultHeader, DefaultLayout },

  props: {
    type: {
      type: String,
      required: true
    },
    header: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      slots: []
    }
  }
}
</script>
