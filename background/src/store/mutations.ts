import * as types from './mutation-types'
const mutations = {
  /**
   * @description 更新侧边栏状态
   * @param { State.stateProps } state 操作对象
   * @param { State.stateSidebarProps } payload 更新数据
   */
  [types.SET_SIDEBAR] (state: State.stateProps, payload: State.stateSidebarProps) {
    Object.assign(state.sidebar, payload)
  }
}

export default mutations
