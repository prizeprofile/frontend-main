<template>
  <div class="lever" :class="{ 'is-active': value }" @click="$emit('input', !value)">
    <span class="lever-button">
      <slot name="on" v-if="value"></slot>
      <slot name="off" v-else></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  }
}
</script>
