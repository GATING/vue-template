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
  /* 
    "off" 或者 0  关闭规则关闭
    "warn" 或者 1  在打开的规则作为警告（不影响退出代码）
    "error" 或者 2  把规则作为一个错误（退出代码触发时为1） 
  */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0
  }
}
