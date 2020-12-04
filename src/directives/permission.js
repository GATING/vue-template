import store from '@/store'

function checkPermission(el, binding) {
  const { value } = binding
  const roles = store.getters && store.getters.roles
  if (value) {
    const permissionRoles = Array.isArray(value) ? value : [value]
    const hasPermission = roles.some(role => permissionRoles.includes(role))
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
}

export default function install(Vue) {
  Vue.directive('permission', {
    inserted(el, binding) {
      checkPermission(el, binding)
    },
    update(el, binding) {
      checkPermission(el, binding)
    }
  })
}
