<template>
  <div>
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
    <h1 class="title">{{ $t('member') }}</h1>
    <MemberForm />
    <hr />
    <MemberItem v-if="member" :member="member" />
    <!-- <ul>
      <li v-for="(member, i) in members" :key="i">
        <MemberItem :member="member" :index="i" />
      </li>
    </ul> -->
    <router-link to="/another-page">Another page</router-link>
  </div>
</template>

<script>
import MemberItem from '@/components/MemberItem.vue'
import MemberForm from '@/components/MemberForm.vue'
export default {
  components: {
    MemberItem,
    MemberForm,
  },
  data() {
    return {
      memberInput: '',
      langs: ['ja', 'en'],
    }
  },
  computed: {
    member() {
      return this.$store.state.member
    },
    // members() {
    //   return this.$store.state.members
    // },
  },
  mounted() {},
  methods: {},
}
</script>

<i18n>
  {
    "en": {
      "member": "Members"
    },
    "ja": {
      "member": "メンバー"
    }
  }
</i18n>
