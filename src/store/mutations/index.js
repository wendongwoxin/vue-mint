import store from '../'

export default {
  /**
   * @param 用户名 name
   */
  SetUserName (name) {
    store.state.userName = name
  },
  /**
   * 切换tag
   */
  changeTag (state, tag) {
    state.chosenTag = tag
  }
}
