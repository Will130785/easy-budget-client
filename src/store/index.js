import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarOpen: false
  },
  getters: {
    getSidebarStatus (state) {
      return state.sidebarOpen
    }
  },
  actions: {
    sidebarStatusAction ({ commit }) {
      commit('sidebarStatusMutation')
    }
  },
  mutations: {
    sidebarStatusMutation (state) {
      state.sidebarOpen = !state.sidebarOpen
    }
  },
  modules: {

  }
})
