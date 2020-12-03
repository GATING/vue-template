module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    // 属性值 0 后面不加单位
    'length-zero-no-unit': true,
    // 对空行的处理
    // 第一条属性声明前不允许有空行
    'declaration-empty-line-before': ['never', { ignore: ['after-declaration'] }],
    // 大小写处理，目前vsc暂无解（待解决)
    'unit-case': null,
    // 关键字小写，如 BLOCK -> block
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['BlinkMacSystemFont']
      }
    ],
    // 函数名小写，如 CALC -> calc
    'function-name-case': 'lower',
    // 选择器小写
    'selector-type-case': 'lower',
    // 对空格的处理
    // 注释 "/*" 后和 "*/" 前必须有空格
    'comment-whitespace-inside': 'always',
    // 媒体查询中设置断点宽度里的 ":" 后必须有空格
    'media-feature-colon-space-after': 'always',
    // 媒体查询中设置断点宽度里的 ":" 前不能有空格
    'media-feature-colon-space-before': 'never',
    // 解决 @mixin 报错
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin']
      }
    ]
  }
}
