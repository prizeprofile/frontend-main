<template>
  <div class="default-layout">
    <default-header />

    <slot></slot>
  </div>
</template>

<script>
import DefaultHeader from '@/layouts/headers/DefaultHeader'

export default {
  components: { DefaultHeader }
}
</script>
