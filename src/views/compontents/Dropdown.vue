<template>
  <div class="dropdown">
    <div class="dropdown-active-item">
      {{ activeItem.text }}
      &nbsp;&nbsp;
      <icon name="fa-angle-down fa-lg" small></icon>
    </div>

    <ul class="dropdown-items" aria-haspopup="true">
      <li v-for="(item, key) in inactiveItems" :key="key" @click="$emit('input', item.name)">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },

  computed: {
    inactiveItems () {
      return this.items.filter(i => i.name !== this.value)
    },

    activeItem () {
      return this.items.find(i => i.name === this.value)
    }
  }
}
</script>
