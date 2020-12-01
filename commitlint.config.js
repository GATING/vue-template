/**
 * feat：新功能（feature）
 * fix：修补bug
 * docs：文档（documentation）
 * style： 代码格式（不影响代码运行的变动）
 * refactor：重构（即不是新增功能，也不是修改bug的代码变动）
 * test：增加测试
 * chore：构建过程或辅助工具的变动
 *
 * 提交格式：<type>(<scope>): <describe> 其中scope可忽略
 *
 * 提交实例： git commit -am 'fix(location): 登录接口地址修改'
 *
 */

module.exports = {
  // extends: ['@commitlint/config-conventional'],
  extends: ['cz'],
  // cz 方式需要配合插件
  // yarn add commitlint-config-cz @commitlint/cli -D
  rules: {
    // https://commitlint.js.org/#/reference-rules
    // level: 警告级别，0: 禁用， 1: 警告， 2: 报错
    // applicable: always:启用 | never：不启用
    // value: 可用值
    // commit type类型
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 80],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [0, 'never'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [0, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never']
    // The scope-enum :  defined in the cz-config
    // The 'type-enum':  defined in the cz-config
  }
}
