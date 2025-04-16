import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null
    }
  },

  actions: {
    async login({ commit }, details) {
      // tenho que criar alguma coisa
    },

    async register({ commit }, details) {
      // tenho que criar alguma coisa
    },

    async logout({ commit }) {
      // tenho que criar alguma coisa
    }
  },

  modules: {}
})
