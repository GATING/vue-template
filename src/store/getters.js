const getters = {
  token: state => state.user.token,
  info: state => state.user.info,
  source: state => state.app.source,
  roles: state => state.user.roles,
  cacheList: state => state.app.cacheList
}
export default getters
