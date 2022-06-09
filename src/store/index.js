import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  member: '',
  // members: [],
}
const getters = {}
const mutations = {
  EDIT_MEMBER(state, member) {
    state.member = member.value
  },
  CREATE_MEMBER(state, member) {
    state.member = member.value
  },
  DELETE_MEMBER(state) {
    state.member = ''
  },
  // EDIT_MEMBER(state, member) {
  //   Vue.set(state.members, member.index, member.value)
  // },
  // CREATE_MEMBER(state, member) {
  //   state.members.push(member.value)
  // },
  // DELETE_MEMBER(state, memberIndex) {
  //   state.members.splice(memberIndex, 1)
  // },
}
const actions = {
  createMember({commit}, member) {
    commit('CREATE_MEMBER', member)
  },
  editMember({commit}, member) {
    commit('EDIT_MEMBER', member)
  },
  deleteMember({commit}, member) {
    commit('DELETE_MEMBER', member)
  },
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
