module.exports = {
  types: [
    {
      value: 'WIP',
      name: '💪 待完成: 研发中的提交备份'
    },
    {
      value: 'feat',
      name: '✨ 新功能: 新增加一个功能'
    },
    {
      value: 'fix',
      name: '🐞 修复: 一个 bug 修复'
    },
    {
      value: 'refactor',
      name: '🔨 重构: 不涉及修复bug和新功能开发的代码更改'
    },
    {
      value: 'docs',
      name: '📚 文档: 只有文档发生改变'
    },
    {
      value: 'test',
      name: '🏁 测试: 添加缺少的测试或更正现有的测试'
    },
    {
      value: 'chore',
      name: '🎫 构建: 修改持续集成的配置文件和脚本'
    },
    {
      value: 'style',
      name: '💅 style: 代码风格修改，不影响代码含义的更改（空格、格式、缺少分号等）'
    },
    {
      value: 'revert',
      name: '⏪ 撤销: 撤销一个历史提交'
    }
  ],
  messages: {
    type: '选择你提交的信息类型:',
    scope: '选择本次提交的改变所影响的范围？',
    customScope: '本次提交的改变所影响的范围？',
    subject: '写一个简短的变化描述，尽量包含主谓宾结构，杜绝简单的单词：\n',
    body: '提供更详细的变更描述 (按 enter 跳过). 使用 "|" 换行：\n',
    breaking: '列出所有的不兼容变更 (按 enter 跳过)：\n',
    footer: '列出此次改动解决的所有 issues （如："#123, #234"）(按 enter 跳过)：\n',
    confirmCommit: '确认提交以上内容信息？'
  },
  scopes: [],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['footer']
  // limit subject length
  // subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
}
