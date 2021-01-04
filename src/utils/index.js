/**
 * 将字节转换成友好格式，如Bytes，KB，MB
 * @param { string } bytes
 * @returns { string }
 * @example
 * bytesToSize(10000) // 9.8 KB
 */
export function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB']
  if (bytes === 0) {
    return 'n/a'
  }
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`
}

/**
 * base64转blob
 * @param { string } dataURL
 * @returns { Blob }
 * @example
 * dataURLToBlob(URI) // Blob {size: 248, type: "image/svg+xml"}
 */
export function dataURLToBlob(dataURL) {
  const BASE64_MARKER = ';base64,'
  let parts, contentType, raw
  if (dataURL.indexOf(BASE64_MARKER) === -1) {
    parts = dataURL.split(',')
    contentType = parts[0].split(':')[1]
    raw = decodeURIComponent(parts[1])

    return new Blob([raw], { type: contentType })
  }

  parts = dataURL.split(BASE64_MARKER)
  contentType = parts[0].split(':')[1]
  raw = window.atob(parts[1])
  const rawLength = raw.length
  const uInt8Array = new Uint8Array(rawLength)
  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i)
  }

  return new Blob([uInt8Array], { type: contentType })
}

/**
 * 获取设备像素比
 * @returns { number }
 * @example
 * getPixelRatio() // 2
 */
export function getPixelRatio() {
  const ctx = document.createElement('canvas').getContext('2d')
  const dpr = window.devicePixelRatio || 1
  const bsr =
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1

  return dpr / bsr
}

/**
 * 将文本插入到文本区域的光标位置<br>
 * _应用场景：_如在评论框里，在光标位置里插入emoji等
 * @param {object} dom对象
 * @param {string} str
 * @example
 * <textarea name="textarea" rows="10" cols="50">你好世界~</textarea>
 * const editText = document.querySelector('#editText');
 * insertText(editText, 'hello world');
 */
export function insertAtCaret(dom, str) {
  if (str === void 0) str = ''

  if (document.selection) {
    // IE
    const sel = document.selection.createRange()
    sel.text = str
  } else if (typeof dom.selectionStart === 'number' && typeof dom.selectionEnd === 'number') {
    const startPos = dom.selectionStart
    const endPos = dom.selectionEnd
    const tmpStr = dom.value
    let cursorPos = startPos

    dom.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length)
    cursorPos += str.length
    dom.selectionStart = dom.selectionEnd = cursorPos
  } else {
    dom.value += str
  }
}

/**
 * 获取移动设备信息，如是否是iOS，android等
 * @returns { {} }
 * @example
 * getDevice()
 * 
  {
    "androidChrome":false,
    "ipad":false,
    "iphone":true,
    "android":false,
    "ios":true,
    "os":"ios",
    "osVersion":"9.1",
    "webView":null
  }
 */
export function getDevice() {
  const device = {}
  const ua = navigator.userAgent
  const android = ua.match(/(Android)?[\s\/]+([\d.]+)?/)
  const ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
  const iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)

  device.ios = device.android = device.iphone = device.ipad = device.androidChrome = false

  // Android
  if (android) {
    device.os = 'android'
    device.osVersion = android[2]
    device.android = true
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios'
    device.ios = true
  }
  // iOS
  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.')
    device.iphone = true
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.')
    device.ipad = true
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null
    device.iphone = true
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0]
    }
  }

  // Webview
  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i)

  return device
}

/**
 * 获取浏览器的类型和版本号
 * @returns { { type: string, version: string } }
 * @example
 * getBrowser() // => {type: "chrome", version: "60.0.3112.101"}
 */
export function getBrowser() {
  const ua = navigator.userAgent.toLowerCase()
  const check = regex => regex.test(ua)
  let type = 'UNKNOW'
  let v

  // IE
  if (check(/msie/) && !check(/opera/)) {
    type = 'ie'
    v = /msie[\/|\s]*([\d+?\.?]+)/.exec(ua)
  } else if (!check(/webkit/) && check(/gecko/) && check(/firefox/) && !check(/opera/)) {
    // firefox
    type = 'firefox'
    v = /firefox[\/|\s]*([\d+?\.?]+)/.exec(ua)
  } else if (check(/\bchrome\b/)) {
    // chrome
    type = 'chrome'
    v = /chrome[\/|\s]*([\d+?\.?]+)/.exec(ua)
  } else if (check(/applewebkit/) && check(/safari/)) {
    // safari (!check(/\bchrome\b/) is ensure by non-chrome above)
    type = 'safari'
    v = /version[\/|\s]*([\d+?\.?]+)/.exec(ua)
  } else if (check(/opera/)) {
    type = 'opera'
    v = /version[\/|\s]*([\d+?.?]+)/.exec(ua) || /opera[\/|\s]*([\d+?.?]+)/.exec(ua)
  }

  return {
    type,
    version: v && v[1] ? v[1] : 'UNKNOW'
  }
}
/**
 * 版本比较
 * @param oldVersion 老版本
 * @param newVersion 新版本
 * @param containEqual 是否包含相等的情况
 * @returns { boolean } newVersion >[=] oldVersion
 * @example
 * compareVersion('1.0.0', '1.0.1')
 */
export function compareVersion(oldVersion, newVersion, containEqual) {
  if (typeof oldVersion !== 'string' || typeof newVersion !== 'string') {
    return false
  }
  // 分割字符串为['1', '0', '1']格式
  const oldArray = oldVersion.split('.')
  const newArray = newVersion.split('.')
  let o, n
  // 从左向右对比值，值相同则跳过，不同则返回不同的值
  while (o === n && newArray.length > 0) {
    o = oldArray.shift()
    n = newArray.shift()
  }
  // 返回不同值的比较结果
  if (containEqual) {
    return (n | 0) >= (o | 0)
  }
  return (n | 0) > (o | 0)
}

/**
 * 主动防御
 * 对于我们操作的数据，尤其是由 API 接口返回的，时常会有一个很复杂的深层嵌套的数据结构。为了代码的健壮性，很多时候需要对每一层访问都作空值判断，就像这样：
 data.user &&
 data.user.name &&

 代码看起来相当不美观，因此提供了一个非常简洁明了的原生的方式。
 *
 * @param p 属性列表
 * @param o 对象
 * @returns { * } 如果正常访问到，则返回对应的值，否则返回 null。
 * @example
 * const data = {
 *  user: {
 *    name: "gating"
 *  }
 * }
 * getIn(['user', 'name'], user) // gating
 */
export function getIn(p, o) {
  return p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o)
}

/**
 * RGB 转换为 Hex
 * @param r r值
 * @param g g值
 * @param b b值
 * @returns { string } Hex值
 * @example
 * rgbToHex(0, 0, 0) // => #000000
 */
export function rgbToHex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

/**
 * Hex 转换为 Rgb
 * @param hex
 * @returns { {r: Number, g: Number, b: Number } }
 * @example
 * hexToRgb("#0033ff").g // => 51
 */
export function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

/**
 * 获取滚动位置
 * @param el
 * @returns { {x: Number, y: Number} }
 * @example
 * getScrollPos() // => { x: 0, y: 200 }
 */
export function getScrollPos(el) {
  if (el === void 0) el = window
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  }
}

/**
 * 测试函数所花费的时间
 * @param callback
 * @returns { * }
 * @example
 * timeTaken(() => Math.pow(2, 10)) // 1024
 */
export function timeTaken(callback) {
  if (typeof callback !== 'function') {
    throw new Error('callback 必须为可执行的函数')
  }
  console.time('timeTaken')
  const result = callback()
  console.timeEnd('timeTaken')
  return result
}

/**
 * 滚动到顶部
 * @example
 * scrollToTop()
 */
export function scrollToTop() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, scrollTop - scrollTop / 8)
  }
}
