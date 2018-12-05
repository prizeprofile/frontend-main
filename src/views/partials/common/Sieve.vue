<template>
  <div class="sieve">
    <div class="sieve-pattern">
      <form-input white placeholder="Search by promoter or prize" v-model="pattern">
        <icon slot="icon-left" name="fa-search" class="has-text-primary"></icon>
      </form-input>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      raw: {
        pattern: ''
      }
    }
  }
}
</script>
