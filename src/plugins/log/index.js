import log from './log'
function plugin(app) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Object.defineProperties(app.prototype, {
    $log: {
      get: function get() {
        return log
      }
    }
  })
}

export default {
  install(Vue) {
    plugin(Vue)
  }
}
