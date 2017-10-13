import * as types from './mutation-types'
// console.log(types.SET_FLAG)
const mutations = {
  [types.SET_NUM] (state, num) {
    state.num = num
  },
  [types.SET_PAGE] (state, page) {
    state.page = page
  }
}
export default mutations
