<template>
  <ValidationObserver ref="form">
    <BForm @submit.prevent="createNewMember" class="form">
      <BaseInput
        v-model="memberInput"
        name="member"
        placeholder="Enter name"
        @updateValue="updateInputValue"
      />
      <BaseButton class="create-new-member" label="Create new member" @onClick="createNewMember" />
    </BForm>
  </ValidationObserver>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import {BForm} from 'bootstrap-vue'
import {ValidationObserver} from 'vee-validate'
export default {
  components: {
    BaseInput,
    BaseButton,
    ValidationObserver,
    BForm,
  },
  data() {
    return {
      memberInput: '',
    }
  },
  methods: {
    createNewMember() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        }
        if (this.memberInput) {
          this.$store.dispatch('createMember', {value: this.memberInput})
        }

        // Resetting Values
        this.memberInput = ''

        // Wait until the models are updated in the UI
        this.$nextTick(() => {
          this.$refs.form.reset()
        })
      })
    },
    updateInputValue(e) {
      this.memberInput = e
    },
  },
}
</script>
<style scoped>
.form {
  display: flex;
}
.form-control {
  flex-grow: 1;
}
button {
  flex-shrink: 0;
}
</style>
