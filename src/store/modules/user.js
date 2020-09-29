import { getToken } from '@/utils/auth'

const state = {
  token: getToken(),
  roles: []
}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
