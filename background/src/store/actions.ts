import { Commit } from 'vuex/types'
const actions = {
  /**
   * @description 更新状态
   * @param { Any } context 操作对象
   * @param { State.stateSidebarProps } payload 更新参数
   */
  updateSidebar (context: { commit: Commit }, payload: State.stateSidebarProps) {
    context.commit('SET_SIDEBAR', payload)
  }
}

export default actions
