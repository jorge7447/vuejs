import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    appName: 'Contador'
  },
  mutations: {
    increment(state, quantity){
      state.counter += quantity;
    },
    decrement(state, quantity){
      state.counter -= quantity;
    }
  },
  actions: {

  }
})
