<template>
  <BButton @click="onClick">{{ label }}</BButton>
</template>

<script>
import {BButton} from 'bootstrap-vue'
export default {
  components: {
    BButton,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
}
</script>
