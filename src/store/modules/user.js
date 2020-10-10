import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, logout, getInfo } from '@/api/user'

const state = {
  token: getToken(),
  info: null,
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INFO: (state, info) => {
    state.info = info
  }
}

const actions = {
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then(user => {
          const { token } = user
          setToken(token)
          commit('SET_TOKEN', token)
          commit('SET_INFO', user)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then(user => {
          commit('SET_INFO', user)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          commit('SET_TOKEN', '')
          commit('SET_INFO', '')
          removeToken()
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
