/* eslint-disable camelcase */

function runCallbacks(elem) {
  if (!elem || !elem.__resize_listeners__) {
    return
  }
  elem.__resize_listeners__.forEach(callback => {
    callback.call(elem)
  })
}

function getRenderInfo(elem) {
  if (!document.documentElement.contains(elem)) {
    return {
      detached: true,
      rendered: false
    }
  }

  let current = elem
  while (current !== document) {
    if (getComputedStyle(current, 'display') === 'none') {
      return {
        detached: false,
        rendered: false
      }
    }
    current = current.parentNode
  }

  return {
    detached: false,
    rendered: true
  }
}

function addListener(elem, callback) {
  let listeners = elem.__resize_listeners__

  if (!listeners) {
    elem.__resize_listeners__ = []
    if (window.ResizeObserver) {
      let { offsetWidth, offsetHeight } = elem
      let ro = new ResizeObserver(() => {
        if (!elem.__resize_observer_triggered__) {
          elem.__resize_observer_triggered__ = true
          if (elem.offsetWidth === offsetWidth && elem.offsetHeight === offsetHeight) {
            return
          }
        }
        runCallbacks(elem)
      })

      // 初始化时，display none 不会触发 ResizeObserver 回调
      let { detached, rendered } = getRenderInfo(elem)
      elem.__resize_observer_triggered__ = detached === false && rendered === false
      elem.__resize_observer__ = ro
      ro.observe(elem)
    } else if (elem.attachEvent && elem.addEventListener) {
      // targeting IE9/10
      elem.__resize_legacy_resize_handler__ = function handleLegacyResize() {
        runCallbacks(elem)
      }
      elem.attachEvent('onresize', elem.__resize_legacy_resize_handler__)
      document.addEventListener('DOMSubtreeModified', elem.__resize_mutation_handler__)
    } else {
      console.log('unsupported browser')
    }
  }
  elem.__resize_listeners__.push(callback)
}

function removeListener(elem, callback) {
  // targeting IE9/10
  if (elem.detachEvent && elem.removeEventListener) {
    elem.detachEvent('onresize', elem.__resize_legacy_resize_handler__)
    document.removeEventListener('DOMSubtreeModified', elem.__resize_mutation_handler__)
    return
  }

  let listeners = elem.__resize_listeners__
  if (!listeners) {
    return
  }
  listeners.splice(listeners.indexOf(callback), 1)
  if (!listeners.length) {
    if (elem.__resize_observer__) {
      elem.__resize_observer__.unobserve(elem)
      elem.__resize_observer__.disconnect()
      elem.__resize_observer__ = null
    } else {
      if (elem.__resize_mutation_observer__) {
        elem.__resize_mutation_observer__.disconnect()
        elem.__resize_mutation_observer__ = null
      }
      elem.removeChild(elem.__resize_triggers__.triggers)
      elem.__resize_triggers__ = null
    }
    elem.__resize_listeners__ = null
  }
}
export { addListener, removeListener }
