const state = {
  source: {
    token: null,
    cancel: null
  }
}

// 处理公共逻辑
const actions = {}

// 更新数据
const mutations = {
  SET_SOURCE(state, source) {
    state.source = source
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
