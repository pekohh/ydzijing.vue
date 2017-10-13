import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'
import state from './state'
import * as getters from './getters'
import * as actions from './actions'

export default new Vuex.Store({
  getters,
  actions,
  mutations,
  state
})
