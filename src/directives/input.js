const trigger = (el, type) => {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

function initFun(handler) {
  let oldCallback = null
  const bindFun = (el, binding) => {
    const ele = el.tagName === 'INPUT' ? el : el.querySelector('input')
    if (oldCallback) {
      el.removeEventListener('keyup', oldCallback)
    }
    const callback = () => {
      handler(ele, binding)
      trigger(ele, 'input')
    }
    el.addEventListener('keyup', callback)
    oldCallback = callback
  }
  return {
    inserted: bindFun,
    update: bindFun
  }
}

// 输入数字限制最小值
/**
   * @example
   <el-input
   v-input-min="99.99"
   v-model="value"></el-input>
   */
const inputMin = (ele, binding) => {
  let value = ele.value
  if (parseFloat(value) < parseFloat(binding.value)) {
    value = binding.value
  }
  ele.value = value
}

// 输入数字限制最大值
/**
   * @example
   <el-input
   v-input-max="99.99"
   v-model="value"></el-input>
   */
const inputMax = (ele, binding) => {
  let value = ele.value
  if (parseFloat(value) > parseFloat(binding.value)) {
    value = binding.value
  }
  ele.value = value
}

/**
   * @example
   <el-input
   v-input-int
   v-input-max="9999"
   v-model="value"></el-input>
   */
// 只能输入整数
const inputInt = ele => {
  let value = `${ele.value}`
  const reg = /\d{1}\d*/
  const matchRes = value.match(reg)
  if (matchRes) {
    value = parseInt(matchRes[0])
  } else {
    value = ''
  }
  ele.value = value
}

/**
   * @example
   <el-input
   v-input-point2
   v-input-max="99.99"
   v-model="value"></el-input>
   */
// 只能输入两位小数
const inputPoint2 = ele => {
  let value = `${ele.value}`
  const reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
  const regSome = /[1-9][0-9]*\.?[0-9]{0,2}|\d\.[0-9]{0,2}|0/ // 两位小数输入部分时的限制规则
  const matchRes = value.match(reg)
  if (matchRes) {
    // 符合 不需要做删减操作
  } else {
    // 若不符合 看是否符合部分
    const matchResSome = value.match(regSome)
    if (matchResSome) {
      value = matchResSome[0]
    } else {
      value = ''
    }
  }
  ele.value = value
}

// 只能输入英文 大小写
const inputEn = ele => {
  let value = `${ele.value}`
  const reg = /[a-zA-Z]*/
  const matchRes = value.match(reg)
  if (matchRes) {
    value = matchRes[0]
  } else {
    value = ''
  }
  ele.value = value
}

/**
   * @example
   <el-input
   v-input-regexp="/[0-9]{0,18}/"
   v-model="value"></el-input>
   */
const inputRegexp = (ele, binding) => {
  let value = ele.value
  const reg = binding.value
  const matchRes = value.match(reg)
  if (matchRes) {
    value = matchRes[0]
  } else {
    value = ''
  }
  ele.value = value
}

export default Vue => {
  Vue.directive('input-min', initFun(inputMin))
  Vue.directive('input-max', initFun(inputMax))
  Vue.directive('input-int', initFun(inputInt))
  Vue.directive('input-point2', initFun(inputPoint2))
  Vue.directive('input-en', initFun(inputEn))
  Vue.directive('input-regexp', initFun(inputRegexp))
}
