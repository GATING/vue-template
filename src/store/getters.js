const getters = {
  token: state => state.user.token,
  info: state => state.user.info,
  source: state => state.app.source
}
export default getters
