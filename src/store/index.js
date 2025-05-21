import { createStore } from 'vuex'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export default createStore({
  state: {
    user: null,
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    }
  },

  actions: {
    async login({ commit }, details) {
      const { email, password } = details;
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        commit('SET_USER', userCredential.user);
      } catch (error) {
        alert('Erro ao logar: ' + error.message);
        throw error;
      }
    },

    async register({ commit }, details) {
      const { email, password } = details;
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        commit('SET_USER', userCredential.user);
      } catch (error) {
        alert('Erro ao cadastrar: ' + error.message);
        throw error;
      }
    },

    async logout({ commit }) {
      try {
        await signOut(auth);
        commit('CLEAR_USER');
      } catch (error) {
        alert('Erro ao sair: ' + error.message);
        throw error;
      }
    }
  },

  modules: {}
});
