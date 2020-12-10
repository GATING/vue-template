# vue-template

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![jscpd](./report/jscpd-badge.svg)

```
vue-template
├── .browserslistrc  -------------------------> 浏览器的兼容版本配置
├── .cz-config.js  ---------------------------> 自定义Commitizen的信息域
├── .czrc  -----------------------------------> commitizen配置文件
├── .editorconfig  ---------------------------> 统一不同编辑的编码风格
├── .env.development  ------------------------> 开发环境的配置文件，主要配置环境/接口等全局公用变量
├── .env.production  -------------------------> 生产环境的配置文件，同上
├── .env.staging  ----------------------------> 测试环境的配置文件，同上
├── .eslintignore  ---------------------------> eslint忽略的文件列表
├── .eslintrc.js  ----------------------------> eslint的配置文件
├── .gitignore  ------------------------------> git忽略的文件列表
├── .jscpd.json  -----------------------------> jscpd的配置文件
├── .stylelintignore.js  ---------------------> stylelint忽略的文件列表
├── .versionrc.js  ---------------------------> standard-version配置文件
├── babel.config.js  -------------------------> babel的配置文件
├── build
|  └── changelog-generator ------------------> 变更日志文件模板目录
|     ├── index.js
|     └── templates
|        ├── commit.hbs
|        ├── header.hbs
|        └── template.hbs
├── CHANGELOG.md  ---------------------------> 变更日志文件
├── commitlint.config.js  -------------------> commit规范配置文件
├── jsconfig.json  --------------------------> webpack别名支持，vsc对js个性化支持
├── mocks  ----------------------------------> mocks存放目录
|  ├── index.js
|  └── routes
|     └── user.js
├── package-lock.json  -----------------------> 描述 package.json 文件中所有模块的版本信息、模块来源及依赖的小版本信息。
├── package.json  ----------------------------> 项目的依赖文件
├── postcss.config.js  -----------------------> postcss配置文件，用于处理css前缀等问题
├── prettier.config.js  ----------------------> prettier的配置，用于统一团队格式化风格
├── public  ----------------------------------> vue的模板页面
|  ├── favicon.ico
|  └── index.html
├── README.md  ------------------------------> 项目说明文件(README)
├── src
|  ├── api  ---------------------------------> 所有页面的请求
|  |  └── user.js
|  ├── App.vue
|  ├── assets  ------------------------------> 静态资源
|  |  └── logo.png
|  ├── components  --------------------------> 全局组件
|  |  └── HelloWorld.vue
|  ├── directives  --------------------------> 自定义指令
|  |  └── permission.js
|  ├── layout  ------------------------------> layout页面，比如公共头部和公共底部
|  |  └── index.vue
|  ├── main.js  -----------------------------> vue模板的入口文件
|  ├── permission.js  -----------------------> vue-router全局导航守卫，用于(登录)权限判断
|  ├── router  ------------------------------> 路由
|  |  └── index.js
|  ├── store --------------------------------> 全局状态管理(vuex)
|  |  ├── getters.js
|  |  ├── index.js
|  |  └── modules
|  |     ├── app.js
|  |     └── user.js
|  ├── styles -------------------------------> 样式
|  |  ├── global.scss  ----------------------> 全局样式
|  |  ├── mixins.scss  ----------------------> scss的全局混合，已通过配置默认导入
|  |  ├── variables.scss  -------------------> scss的全局变量，已通过配置默认导入
|  |  ├── _color.scss  ----------------------> 默认的颜色存放样式文件，如文字/背景
|  |  └── _size.scss ------------------------> 默认的size存放，如宽度/高度/边距
|  ├── utils --------------------------------> 工具库
|  |  ├── auth.js
|  |  ├── common-regex.js
|  |  ├── download.js
|  |  └── request.js
|  └── views --------------------------------> 页面
|     ├── error-page
|     |  ├── 401.vue
|     |  └── 404.vue
|     ├── home
|     |  └── index.vue
|     └── login
|        └── index.vue
├── stylelint.config.js  --------------------> stylelint配置文件
└── vue.config.js  --------------------------> vue-cli配置文件
```

# 前提说明

- 提交代码请使用 `npm run commit`

- 请在 `master` 分支发布版本！！！！

# 风格指南

1. 所有组件都是以大写开头`(PascalCase)`，除了`index.vue`

2. 所有的.js 文件都遵循横线连接`(kebab-case)`

3. 所有页面都都遵循横线连接`(kebab-case)`
   - 所以路由对应的页面应该要保持统一

## 整体风格配置(prettier 和 stylelint)

vscode 中搭配`vetur`,`stylelint`和`prettier`插件

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  }
}
```

# 权限相关

暂时还没想好怎么写-延后

目前想的是两种方案，一个是`Render Props`，另一个是`Directive`

# 配置相关

## husky 配置

安装 [husky](https://github.com/typicode/husky)，它会让你在 `package.json`的 `husky` 字段中方便地指定`Git hook`：

```json
{
  "husky": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,vue}": ["vue-cli-service lint", "git add"]
  }
}
```

> ps: husky 是 Git hooks 工具，可以防止使用 Git hooks 的一些不好的 commit 或者 push。

## eslint 配置

是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码，[具体查阅](https://cli.vuejs.org/zh/config/#lintonsave)

```js
module.export = {
  lintOnSave: process.env.NODE_ENV === 'development'
}
```

## scss 配置

相比于使用 `chainWebpack` 手动指定 `loader` 更推荐这里这样做，因为这些选项需要应用在使用了相应 `loader` 的多个地方。

```js
module.export = {
  css: {
    loaderOptions: {
      // 配置全局变量
      sass: {
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: `
            @import "~@/styles/variables";
            @import "~@/styles/mixins";
        `
      }
    }
  }
}
```

## 合并 webpack 配置，比如别名

```js
const name = 'gating'
module.export = {
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
```

# webpack 优化相关

`vue-cli@3-4.x`中通过`chainWebpack`这个属性对内部的`webpack`配置进行更细粒度的修改。

> ps: 具体配置参考 vue.config.js

## 预加载和预读取

```js
module.export = {
  chainWebpack(config) {
    // 预加载，它可以提高第一屏的速度，建议打开
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // 添加忽略 runtime.js，vue-cli默认没有 runtime
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    // 预读取，当有很多页面时，会导致太多无意义的请求
    config.plugins.delete('prefetch')
  }
}
```

## 开启 gzip 压缩

也许你好奇，我`nginx`已经开启`gzip`了为什么还需要`webpack`在生成一份呢？因为第一次访问如果服务器没有生成`gzip`文件，他就会对请求的资源进行`gzip`压缩，从而浪费`CPU`资源(通常这种也只发生一次，因为服务端会有内置缓存)

> 简单来讲，就是在本地预先生成`.gz`文件，这样服务器就不需要自己生成了，从而减少第一次生成`.gz`文件的压力

## 提取 runtime.js

因为打包生成的 `runtime.js` 非常的小，但这个文件又经常会改变，它的 `http` 耗时远大于它的执行时间了，所以建议不要将它单独拆包，而是将它内联到我们的 `index.html` 之中

## 对第三方库进行拆包

实际上默认我们会将所有的第三方包打包在一个文件上，这样的方式可行吗？实际上肯定是有问题的，因为将第三方库一块打包，只要有一个库我们升级或者引入一个新库，这个文件就会变动,那么这个文件的变动性会很高,并不适合长期缓存，还有一点，我们要提高首页加载速度，第一要务是减少首页加载依赖的代码量，所以我们需要第三方库进行拆包。

# 自动版本管理和生成 CHANGELOG

规范化的提交信息除了能很好描述项目的修改，还有一个很好的作用就是能根据提交记录来生成 CHANGELOG.MD 和自动生成版本号等功能。

## standard-version

[参考链接](https://aotu.io/notes/2020/09/10/git-commit-control/index.html)

一个用于生成`CHANGELOG.md`和进行`SemVer(语义化版本号)`发版的命令行工具

主要功能：

- 自动修改最新版本号，可以是`package.json`或者自定义一个文件
- 读取最新版本号，创建一个最新的`git tag`
- 根据提交信息，生成`CHANGELOG.md`
- 创建一个新提交包括 `CHANGELOG.md`和`package.json`

## 语义化版本控制(SemVer)

先简单了解下什么是语义化的版本控制，其是由`GitHub`发起的一份用于规范版本号递增的规则，

### 版本格式

主版本号.次版本号.修订号，版本号递增规则如下：

- 主版本号(major)：当你做了不兼容的 API 修改，
- 次版本号(minor)：当你做了向下兼容的功能性新增，可以理解为 Feature 版本，
- 修订号(patch)：当你做了向下兼容的问题修正，可以理解为 Bug fix 版本。

先行版本号可以加到“主版本号.次版本号.修订号”的后面，作为延伸。

### 先行版本

当即将发布大版本改动前，但是又不能保证这个版本的功能 100% 正常，这个时候可以发布先行版本：

- alpha: 内部版本
- beta: 公测版本
- rc: 候选版本(Release Candiate)

比如：1.0.0-alpha.0,1.0.0-alpha.1,1.0.0-rc.0,1.0.0-rc.1 等。

`standard-version` 会根据提交的信息类型来自动更改对应的版本号,如下:

- feat: 次版本(minor)+1
- fix: 修订号(patch) +1
- BREAK CHANGE: 主版号(marjor) +1

> `standard-verstion` 生成的`CHANGELOG`只会包含`feat`,`fix`,`BREACK-CHANGE`类型的提交记录

### 使用

```bash
npm i --save-dev standard-version
```

#### 添加 npm script

```json
{
  "scripts": {
    "release": "standard-version",
    "release:tag": "npm run release --release-as",
    "release:major": "standard-version --release-as major",
    "release:minor": "standard-version --release-as minor",
    "release:patch": "standard-version --release-as patch",
    "release:first": "standard-version --first-release",
    "release:rc": "standard-version --prerelease rc",
    "release:beta": "standard-version --prerelease beta",
    "release:alpha": "standard-version --prerelease alpha"
  }
}
```

### 生命周期

- prerelease: 所有脚本执行之前
- prebump/postbump: 修改版本号之前和之后
- prechangelog/postchangelog: 生成 changelog 和生成 changelog 之后
- pretag/postag: 生成 tag 标签和之后

`standard-version` 本身只针对本地，并没有 `push` 才操作，我们可以在最后一步生成 `tag` 后，执行 `push` 操作，在 `package.json` 中添加

```json
{
  "standard-version": {
    "scripts": {
      "posttag": "git push --follow-tags"
    },
    "skip": {
      "tag": true
    }
  }
}
```

### 其它类似工具

除了 `standard-version`,还有其它类似的工具,有兴趣可以去了解下

- [semantic-release](https://github.com/semantic-release/semantic-release)
- [lerna](https://github.com/lerna/lerna)
