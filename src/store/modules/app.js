import { filter, slice, includes } from 'lodash'
const state = {
  source: {
    token: null,
    cancel: null
  },
  cacheList: []
}

// 处理公共逻辑
const actions = {}

// 更新数据
const mutations = {
  SET_SOURCE(state, source) {
    state.source = source
  },
  SET_CACHE(state, cacheList) {
    if (cacheList.length > 12) {
      state.cacheList = slice(cacheList, 0, 12)
    } else {
      state.cacheList = cacheList
    }
  },
  // 删除缓存
  DEL_CACHE(state, _fullPath) {
    state.cacheList = filter(state.cacheList, ({ fullPath }) => fullPath !== _fullPath)
  },
  // 删除缓存
  DEL_PATH(state, _path) {
    state.cacheList = filter(state.cacheList, ({ fullPath }) => !includes(fullPath, _path))
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
