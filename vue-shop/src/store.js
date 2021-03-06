import Vue from 'vue'
import Vuex from 'vuex'
import localForage from "localforage"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  //storage: window.localStorage,
  storage: localForage,
  modules: ['cart']
})

import products from './modules/products'
import cart from './modules/cart'

export default new Vuex.Store({
  state: {

  },
  modules: {
    products,
    cart
  },
  plugins: [vuexLocal.plugin]
})
