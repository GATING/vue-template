import { forIn, replace } from 'lodash'
import color from '@style/colors-export.scss'
const log = {}

/**
 * @description 返回这个样式的颜色值
 * @param { string } type 样式名称 [ primary | success | warning | danger  ]
 */
function typeColor(type = 'main') {
  return color[`${type}Color`] || color.mainColor
}

/**
 * @description 去掉Color字符串
 * @param { string } name 样式名称 [ primary | success | warning | danger  ]
 */
function replaceColorStr(str) {
  return replace(str, 'Color', '')
}

/**
 * @description 打印一个 [ title | text ] 样式的信息
 * @param { string } title title text
 * @param { string } info info text
 * @param { string } type style
 */
log.capsule = function (title, info, type = 'primary') {
  console.log(
    `%c ${title} %c ${info} %c`,
    'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
    `background:${typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
    'background:transparent'
  )
}

/**
 * @description 打印彩色文字
 */
log.colorful = function (textArr) {
  console.log(
    `%c${textArr.map(t => t.text || '').join('%c')}`,
    ...textArr.map(t => `color: ${typeColor(t.type)};`)
  )
}

forIn(color, (val, color) => {
  /**
   * @description 打印指定样式的文字
   */
  const type = replaceColorStr(color)
  log[type] = text => {
    log.colorful([{ text, type }])
  }
})

export default log
