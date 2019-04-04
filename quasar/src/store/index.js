import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'

import VueMask from 'v-mask'
Vue.use(VueMask)

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth
  }
})

export default store
