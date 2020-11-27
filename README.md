# vue-template

```
vue-template
├─.browserslistrc  -------------------------> 浏览器的兼容版本配置
├─.env.development  ------------------------> 开发环境的配置文件，主要配置环境/接口等全局公用变量
├─.env.production  -------------------------> 生产环境的配置文件，同上
├─.env.staging  ----------------------------> 测试环境的配置文件，同上
├─.eslintrc.js  ----------------------------> eslint的配置文件
├─.gitignore  ------------------------------> git忽略的文件列表
├─babel.config.js  -------------------------> babel的配置文件
├─jsconfig.json  ---------------------------> webpack别名支持，vsc对js个性化支持
├─package-lock.json  -----------------------> 描述 package.json 文件中所有模块的版本信息、模块来源及依赖的小版本信息。
├─package.json  ----------------------------> npm模块的描述文件
├─prettier.config.js  ----------------------> prettier的配置，用于统一团队格式化风格
├─README.md
├─vue.config.js  ---------------------------> vue-cli的配置文件
├─src
|  ├─App.vue
|  ├─main.js
|  ├─views
|  |   ├─About.vue
|  |   └Home.vue
|  ├─utils --------------------------------> 工具库
|  |   └request.js
|  ├─styles -------------------------------> 存放样式
|  |   ├─global.scss  ---------------------> 全局样式
|  |   ├─mixins.scss  ---------------------> scss的全局混合，已通过配置默认导入
|  |   ├─variables.scss  ------------------> scss的全局变量，已通过配置默认导入
|  |   ├─_color.scss  ---------------------> 默认的颜色存放样式文件，如文字/背景
|  |   └_size.scss ------------------------> 默认的size存放，如宽度/高度/边距
|  ├─store --------------------------------> 全局状态管理vuex
|  |   ├─getters.js
|  |   ├─index.js
|  |   ├─modules
|  |   |    └app.js
|  ├─router  ------------------------------> 路由
|  |   └index.js
|  ├─layout  ------------------------------> layout页面，比如公共头部和公共底部
|  |   └index.vue
|  ├─directives  --------------------------> 自定义指令
|  ├─components  --------------------------> 全局组件
|  |     └HelloWorld.vue
|  ├─assets  ------------------------------> 静态资源
|  |   └logo.png
|  ├─api  ---------------------------------> 所有页面的请求
|  |  └user.js
├─public  ---------------------------------> vue的模板页面
|   ├─favicon.ico
|   └index.html
├─mocks  ----------------------------------> mocks存放目录
|   ├─index.js
|   ├─routes
|   |   └user.js
```

# 风格指南

1. 所有组件都是以大写开头`(PascalCase)`，除了`index.vue`

2. 所有的.js 文件都遵循横线连接`(kebab-case)`

3. 所有页面都都遵循横线连接`(kebab-case)`
   - 所以路由对应的页面应该要保持统一

# 权限相关

暂时还没想好怎么写-延后

目前想的是两种方案，一个是`Render Props`，另一个是`Directive`

# 配置相关

## gitHooks 配置

在安装之后，`@vue/cli-service` 也会安装 [yorkie](https://github.com/yyx990803/yorkie)，它会让你在 `package.json`的 `gitHooks` 字段中方便地指定`Git hook`：

```json
{
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,vue}": ["vue-cli-service lint", "git add"]
  }
}
```

所以再也不用手动安装[husky](https://github.com/typicode/husky)了，因为 `yorkie` 是尤大 `fork` 自 `husky` 进行小修改后内置到了`@vue/cli`中的。

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

## postcss-pxtorem 配置

因为我们使用了`postcss-pxtorem`，他是小写`px`会转换，`Px`或者`PX`不会转换，而我们配置的`prettier`会默认把`PX`格式化为`px`，所以我们需要使用`/* prettier-ignore */` 告诉`prettier`，下一行代码不进行转换。

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
