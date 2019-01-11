<template>
  <panel elevated>
    <div class="info-brick has-padding-1">
      <div class="info-brick-title">
        <h3
          class="title is-4"
          v-html="data.title"
        ></h3>

        <p
          class="subtitle is-6 has-text-grey"
          v-html="data.description"
        ></p>
      </div>
    </div>
  </panel>
</template>

<script>

export default {
  props: ['data']
}
</script>
