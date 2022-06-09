<template>
  <ValidationProvider rules="required" :name="name" v-slot="{errors}">
    <BFormInput :value="value" :placeholder="placeholder" @input="onInput($event)"></BFormInput>
    <span v-if="errors.length > 0" style="color: coral">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>
import {ValidationProvider} from 'vee-validate'
import {BFormInput} from 'bootstrap-vue'
export default {
  components: {
    ValidationProvider,
    BFormInput,
  },
  props: {
    value: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
  },
  methods: {
    onInput(value) {
      this.$emit('updateValue', value)
    },
  },
}
</script>
