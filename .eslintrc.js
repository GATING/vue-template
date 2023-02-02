const restrictedGlobals = require('./restricted-browser-globals')
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  // 官方eslint规则 https://github.com/vuejs/eslint-config-vue
  // 爱彼迎前端规范 https://github.com/libertyAlone/airbnb-javascript-style-guide-cn
  /* 
    "off" 或者 0  关闭规则关闭
    "warn" 或者 1  在打开的规则作为警告（不影响退出代码）
    "error" 或者 2  把规则作为一个错误（退出代码触发时为1） 
  */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    // 使用字面语法创建对象
    'no-new-object': 2,
    // 使用对象方法的简写形式
    'object-shorthand': 2,
    // 只对非法标识符的属性使用引号
    'quote-props': [2, 'as-needed'],
    // 使用字面量语法创建数组
    'no-array-constructor': 2,
    // 在数组方法的回调函数中使用return.如果函数体只有一条返回没有副作用的声明则可以省略return
    'array-callback-return': 1,
    // 动态构建字符串时使用模板字符串而不是拼接
    'prefer-template': 2,
    'template-curly-spacing': [2, 'never'],
    // 不要在字符串中使用不必要的转义字符
    'no-useless-escape': 0,
    // 使用具名函数表达式而非函数声明
    'func-style': [2, 'declaration', { allowArrowFunctions: true }],
    // 用圆括号包裹自执行匿名函数
    'wrap-iife': [2, 'any'],
    // 不要在非函数块（if,while等）中声明函数.
    'no-loop-func': 1,
    // 不要使用 arguments, 使用其余运算符 ...
    'prefer-rest-params': 1,
    'space-before-blocks': 2,
    // 当你必须使用函数表达式（传递匿名函数）时，使用箭头函数标记.
    'prefer-arrow-callback': 2,
    'arrow-body-style': [2, 'as-needed'],
    // 避免把箭头函数语法 (=>) 和比较运算符 (<=, >=)弄混
    'no-confusing-arrow': 2,
    // 注意有隐式返回函数体的箭头函数的位置.
    'implicit-arrow-linebreak': [2, 'beside'],
    // 避免类成员重复.
    'no-dupe-class-members': 2,
    // 只允许在一个地方从一个路径import.
    'no-duplicate-imports': 2,
    // 访问属性时使用.
    'dot-notation': 2,
    // 避免在赋值中的=前后换行. 如果要换行的话使用圆括号包裹 max-len
    'operator-linebreak': [2, 'after', { overrides: { '?': 'ignore', ':': 'ignore' } }],
    // 不允许出现未被使用的变量.
    'no-unused-vars': 2,
    // 如果使用if和else多行代码块，把else放到和if块的闭合括号同一行
    'brace-style': 2,
    // 如果 if 块总是执行 return 声明, 随后的 else 块是不必要的.
    'no-else-return': 2,
    // 所有注释都要以空格开头便于阅读
    'spaced-comment': [2, 'always'],
    // 在起始花括号前加一个空格.
    'space-before-blocks': 2,
    // 在控制语句的圆括号前加一个空格 (if, while 等).在函数调用和声明中在参数列表和函数名间不要放置空格.
    'keyword-spacing': [2, { before: true }],
    // 操作符两边放置空格.
    'space-infix-ops': 1,
    // 避免使用自增和自减一元运算符 (++, --).
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    // 圆括号中不要添加空格
    'space-in-parens': [2, 'never'],
    // 不要在方括号内添加空格.
    'array-bracket-spacing': [2, 'never'],
    // 在花括号中添加空格.
    'object-curly-spacing': [2, 'always'],
    // 在同一行中开放代码块的内部开始和结束的部分空格数保持一致.
    'block-spacing': 1,
    // 逗号前不要加空格，逗号后要加空格.
    'comma-spacing': 1,
    // 计算属性内不要使用空格.
    'computed-property-spacing': 1,
    // 在函数名和调用间不要加空格.
    'func-call-spacing': 1,
    // 对象字面量属性的键和值之间要强制使用空格.
    'key-spacing': 1,
    // 不要用,作为行的开始
    'comma-style': 1,
    // 避免单字母名字. 命名需要有可描述性.
    // 'id-length': [2, { exceptions: ['i', 'h', 'e'] }],
    // 命名对象，函数和实例时使用驼峰风格.
    camelcase: 2,
    // 仅当命名构造函数或类的时候使用帕斯卡风格.
    'new-cap': 2,
    /**
     * 使用 Number.isNaN 代替全局 isNaN方法.使用 Number.isFinite 代替全局 isFinite.
     * 全局的 isNaN 和 isFinite 方法会将非数字转换为数字
     * eg: isNaN("123eee") => true
     */
    'no-restricted-globals': [2, 'isNaN', 'isFinite'].concat(restrictedGlobals)
  }
}
