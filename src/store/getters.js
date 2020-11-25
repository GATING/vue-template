const getters = {
  token: state => state.user.token,
  info: state => state.user.info,
  source: state => state.app.source,
  roles: state => state.user.roles
}
export default getters
