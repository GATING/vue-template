import {
  getToken,
  setToken,
  removeToken,
  getStorage,
  setStorage,
  removeStorage
} from '@/utils/auth'
import { login, logout } from '@/api/user'

const state = {
  token: getToken(),
  info: getStorage('user'),
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
          setStorage('user', user)
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
          removeStorage('user')
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
