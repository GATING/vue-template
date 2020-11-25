/* eslint-disable no-useless-escape */
/**
 * 验证是否有匹配连续重复的字符
 * @param {string} str
 * @returns {Boolean}
 */
export function validRepeat(str) {
  const reg = /(.)\1+/
  return reg.test(str)
}
/**
 * 验证是否是中文
 * @param {string} str
 * @returns {Boolean}
 * https://stackoverflow.com/questions/54179179/remove-all-spaces-between-chinese-words-with-regex
 */
export function validChinese(str) {
  const reg = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/
  return reg.test(str)
}

/**
 * 验证是否是版本号（X.Y.Z）
 * @param {string} str
 * @returns {Boolean}
 */
export function validVersion(str) {
  const reg = /^\d+(?:\.\d+){2}$/
  return reg.test(str)
}

/**
 * 验证是否是邮政编码（中国）
 * @param {string} code
 * @returns {Boolean}
 */
export function validPostalCode(code) {
  const reg = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/
  return reg.test(code)
}

/**
 * 验证是否是URL，支持带参数
 * @param {string} code
 * @returns {Boolean}
 */
export function validUrl(url) {
  const reg = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?$/
  return reg.test(url)
}

/**
 * 必须带端口号的网址（或ip）
 * @param {string} url
 * @returns {Boolean}
 */
export function validUrlOrIP(url) {
  const reg = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/
  return reg.test(url)
}

/**
 * 验证是否是手机号
 * @param {string} phone
 * @returns {Boolean}
 */
export function validPhone(phone) {
  const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
  return reg.test(phone)
}
/**
 * 验证是否是手机号（严谨）
 * @param {string} phone
 * @returns {Boolean}
 */
export function validPhoneStrict(phone) {
  const reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/
  return reg.test(phone)
}
/**
 * 验证是否是手机号（宽松）
 * @param {string} phone
 * @returns {Boolean}
 */
export function validPhoneLoose(phone) {
  const reg = /^(?:(?:\+|00)86)?1\d{10}$/
  return reg.test(phone)
}

/**
 * 验证是否是座机
 * @param {string} str
 * @returns {Boolean}
 */
export function validTelPhone(str) {
  const reg = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i
  return reg.test(str)
}

/**
 * 验证是否是邮箱
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * 验证是否是MD5格式（32位）
 * @param {string} md5
 * @returns {Boolean}
 */
export function validMD5(md5) {
  const reg = /^([a-f\d]{32}|[A-F\d]{32})$/
  return reg.test(md5)
}

/**
 * 验证是否是base64格式
 * @param {string} str
 * @returns {Boolean}
 */
export function validBase64(str) {
  const reg = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i
  return reg.test(str)
}

/**
 * 验证是否是迅雷链接
 * @param {string} str
 * @returns {Boolean}
 */
export function validThunder(str) {
  const reg = /^thunderx?:\/\/[a-zA-Z\d]+=$/
  return reg.test(str)
}
/**
 * 验证是否是磁力链接（宽松匹配）
 * @param {string} str
 * @returns {Boolean}
 */
export function validMagnet(str) {
  const reg = /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/
  return reg.test(str)
}

/**
 * 验证是否是ed2k链接（宽松匹配）
 * @param {string} str
 * @returns {Boolean}
 */
export function validEd2kk(str) {
  const reg = /^ed2k:\/\/\|file\|.+\|\/$/
  return reg.test(str)
}
/**
 * 验证是否是mac地址
 * @param {string} str
 * @returns {Boolean}
 */
export function validMAC(str) {
  const reg = /^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i
  return reg.test(str)
}

/**
 * 验证是否是身份证(包含一代、二代)
 * @param {string} str
 * @returns {Boolean}
 */
export function validIdCard(str) {
  const reg = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
  return reg.test(str)
}

/**
 * 验证是否是身份证一代
 * @param {string} str
 * @returns {Boolean}
 */
export function validIdCard1(str) {
  const reg = /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/
  return reg.test(str)
}

/**
 * 验证是否是身份证二代
 * @param {string} str
 * @returns {Boolean}
 */
export function validIdCard2(str) {
  const reg = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/
  return reg.test(str)
}

/**
 * 验证是否是护照(包含香港、澳门)
 * @param {string} str
 * @returns {Boolean}
 */
export function validPassport(str) {
  const reg = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/
  return reg.test(str)
}

/**
 *
 *
 *
 *
 * 货币金额
 *
 *
 *
 *
 */

/**
 * 验证是否是货币金额 (只支持正数、不支持校验千分位分隔符)
 * @param {string} str
 * @returns {Boolean}
 */
export function validMonetary(str) {
  const reg = /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0){1}$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/
  return reg.test(str)
}

/**
 * 验证是否是货币金额（支持负数、千分位分隔符）
 * @param {string} str
 * @returns {Boolean}
 */
export function validMonetarySeparator(str) {
  const reg = /^-?\d+(,\d{3})*(\.\d{1,2})?$/
  return reg.test(str)
}

/**
 *
 *
 *
 *
 * 车牌号
 *
 *
 *
 *
 */

/**
 * 验证是否是车牌号(新能源+非新能源)
 * @param {string} str
 * @returns {Boolean}
 */
export function validLicensePlate(str) {
  const reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-HJ-NP-Z]{1}(?:(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/
  return reg.test(str)
}

/**
 * 验证是否是车牌号(新能源)
 * @param {string} str
 * @returns {Boolean}
 */
export function validNewLicensePlate(str) {
  const reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/
  return reg.test(str)
}

/**
 * 验证是否是车牌号(非新能源)
 * @param {string} str
 * @returns {Boolean}
 */
export function validNotNewLicensePlate(str) {
  const reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-HJ-NP-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/
  return reg.test(str)
}

/**
 *
 *
 *
 *
 * 日期相关
 *
 *
 *
 *
 */

/**
 * 验证是否是日期格式（YYYY:MM:DD）
 * @param {string} date
 * @returns {Boolean}
 */
export function validDate(date) {
  const reg = /^\d{4}(-)(1[0-2]|0?\d)\1([0-2]\d|\d|30|31)$/
  return reg.test(date)
}
/**
 * 验证是否是24小时制时间（HH:mm:ss）
 * @param {string} time
 * @returns {Boolean}
 */
export function validTime24(time) {
  const reg = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/
  return reg.test(time)
}
/**
 * 验证是否是12小时制时间（HH:mm:ss）
 * @param {string} time
 * @returns {Boolean}
 */
export function validTime12(time) {
  const reg = /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/
  return reg.test(time)
}

/** **
 *
 *
 *
 *
 * 字母相关
 *
 *
 *
 *
 */

/**
 * 验证是否是字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * 验证是否是大写字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * 验证是否是小写字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/** **
 *
 *
 *
 *
 * 数字相关
 *
 *
 *
 *
 */

/**
 * 验证是否是整数
 * @param {string} str
 * @returns {Boolean}
 */
export function validInt(str) {
  const reg = /^-?[1-9]\d*$/
  return reg.test(str)
}
/**
 * 验证是否是正整数
 * @param {string} str
 * @returns {Boolean}
 */
export function validPositiveInt(str) {
  const reg = /^[1-9]\d*$/
  return reg.test(str)
}

/**
 * 验证是否是非正整数
 * @param {string} str
 * @returns {Boolean}
 */
export function validNotPositiveInt(str) {
  const reg = /^-[1-9]\d*|0$/
  return reg.test(str)
}

/**
 * 验证是否是负整数
 * @param {string} str
 * @returns {Boolean}
 */
export function validNegativeInt(str) {
  const reg = /^-[1-9]\d*$/
  return reg.test(str)
}

/**
 * 验证是否是非负整数
 * @param {string} str
 * @returns {Boolean}
 */
export function validNotNegativeInt(str) {
  const reg = /^[1-9]\d*|0$/
  return reg.test(str)
}

/**
 * 验证是否是浮点数
 * @param {string} str
 * @returns {Boolean}
 */
export function validFloat(str) {
  const reg = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/
  return reg.test(str)
}

/**
 * 验证是否是正浮点数
 * @param {string} str
 * @returns {Boolean}
 */
export function validPositiveFloat(str) {
  const reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/
  return reg.test(str)
}

/**
 * 验证是否是非正浮点数
 * @param {string} str
 * @returns {Boolean}
 */
export function validNotPositiveFloat(str) {
  const reg = /^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$/
  return reg.test(str)
}

/**
 * 验证是否是负浮点
 * @param {string} str
 * @returns {Boolean}
 */
export function validNegativeFloat(str) {
  const reg = /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/
  return reg.test(str)
}

/**
 * 验证是否是非负浮点
 * @param {string} str
 * @returns {Boolean}
 */
export function validNotNegativeFloat(str) {
  const reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$/
  return reg.test(str)
}

/**
 * 验证是否是保留两位小数
 * @param {string} str
 * @returns {Boolean}
 */
export function validFloatTwo(str) {
  const reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$/
  return reg.test(str)
}
