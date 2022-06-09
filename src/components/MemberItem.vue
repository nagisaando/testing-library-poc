<template>
  <div class="wrapper">
    <BaseInput
      v-if="editMember"
      :value="inputValue"
      name="member field"
      placeholder="Edit the name"
      @updateValue="updateInputValue"
      class="member"
      id="new-member-input"
    />
    <p v-else class="member">{{ member }}</p>
    <BaseButton :label="editLabel" @onClick="editItem" />
    <BaseButton label="Delete" @onClick="deleteItem" />
  </div>
</template>
<script>
import BaseButton from './base/BaseButton.vue'
import BaseInput from './base/BaseInput.vue'

export default {
  components: {
    BaseButton,
    BaseInput,
  },
  props: {
    member: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      editMember: false,
      inputValue: '',
    }
  },
  computed: {
    editLabel() {
      return this.editMember ? 'Save' : 'Edit'
    },
  },
  mounted() {
    this.inputValue = this.member
  },
  methods: {
    updateInputValue(e) {
      this.inputValue = e
    },
    editItem() {
      if (this.editMember && this.inputValue) {
        // this.$store.dispatch('editMember', {value: this.inputValue, index: this.index})
        this.$store.dispatch('editMember', {value: this.inputValue})
        this.editMember = false
      } else {
        this.editMember = true
      }
    },
    deleteItem() {
      this.$store.dispatch('deleteMember')
      // this.$store.dispatch('deleteMember', this.index)
    },
  },
}
</script>
<style scoped>
.wrapper {
  display: flex;
  gap: 20px;
}
.member {
  width: 50%;
}
p {
  padding: 0.375rem 0.75rem;
  text-align: left;
  margin: 0;
}
</style>
