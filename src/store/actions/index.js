/**
 * 不可以直接修改状态 多用于异步操作
 * 2020/03/04
 */

export default {
  setUserName ({commit}) {
    commit('SetUserName', '李四')
  }
}
