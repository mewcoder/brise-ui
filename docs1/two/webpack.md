---
outline: deep
---

# Webpack

## 构建工具对比

答案

- webpack ：可以打包任何资源，配置略复杂，适合项目开发
- rollup：基于 ES6 的，一般用来打包类库
- vite：打包是基于rollup，dev模式启动快，基于ES module，使用ES build 实时编译

## Webpeck构建流程⭐

答案

- 初始化参数，从配置文件和命令行中读取
- 开始编译，初始化 complier对象，加载插件，开始编译
- 编译模块，从入口文件出发，递归依赖的模块，通过对应的 loader 进行加载编译
- 编译完成后组成 chunk，生成代码，最后输出 bundle

> webpack 会在特定的时间点广播事件，触发所监听事件的插件执行特定的逻辑。


## 什么是Tapable 

答案webpack本质上是一种事件流的机制，compiler 和 complation 都是基于 Tapable 实现的，Tapable 是一种发布订阅的事件系统。

Tapable提供了很多类型的hook，分为同步和异步两大类(异步中又区分异步并行和异步串行)，可进行多种形式的流程控制。

> compiler和 Compilation的区别
>
> - compiler 可以理解为 webpack 的实例，代表了 webpack 的配置，包括options、loader和plugin
> - compilation 表示一次资源构建过程中的上下文对象。包含这次构建中的全部资源和信息，文件有改动就会重新构建。

##  Loader和Plugin 的不同 ⭐

答案

- webpack 将一起文件都看成模块，通过 loader 可以对文件进行转换
- plugin 可以扩展webpack的功能，作用与整个构建周期，通过监听特定的事件执行特定的逻辑。

常见的 loader 和 plugin
答案loader：

- saas-loader   把 sass 语法转换成 css
- css-loader    分析 css 模块之间的关系，并合成⼀个 css
- style-loader  会把css-loader⽣成的内容，以 style 挂载到⻚⾯
- postcss-loader  使用 autoprefixer 自动添加浏览器前缀
- file-loader  移动静态资源到输出目录
- url-loader  同file-loader 还可以小图转base64
- babel-loader  转义 js 

plugin：

- html-webpack-plugin  ⾃动⽣成html⽂件
- clean-webpack-plugin 默认会删除 output 指定的输出⽬录 
- terser-webpack-plugin 压缩代码
- mini-css-extract-plugin  提取css
- define-plugin  注入全局变量

## loader 怎么写⭐

答案loader 是一个函数，它的参数是匹配到的文件的源码，返回结果是处理后的源码。

- this.callback(null, data) 可通过callback 代替return
- 通过 loader-utils 的 getOptions 方法获取
- 异步处理，通过`this.async`来返回一个异步函数（第一个参数是 Error，第二个参数是处理的结果）

## Plugin 怎么写⭐

答案webpack 在整个编译周期中会触发很多不同的事件，plugin 可以在对应的钩子上注册事件，webpack内部也是通过很多插件实现的。

- 插件一个类，有个apply方法，参数是compiler
- apply 方法内部通 compiler 的 hooks 注册不同时间点的事件

## 异步加载原理

答案

- 查找缓存
- 通过jsonp加载代码，执行回调，是个promise

[https://zhuanlan.zhihu.com/p/88332125](https://zhuanlan.zhihu.com/p/88332125)

## HMR原理⭐

答案

- dev-server 监听编译完成事件，利用ws告诉浏览器的hash和更新模块列表
- 通过jsonp获取更新模块的 js
- 替换先用模块，调用 module.hot.accept() 完成热更新

## Webpack5 新特性⭐

答案

- 内置静态资源构建能力，需要额外的loader
- 持久化缓存，提供二次构建速度
- 模块联邦

> - 使用Module Federation时，应用将被划分为更小的应用块，每个应用块都是一个独立的构建，这些构建都将编译为容器
> - 一个被引用的容器被称为remote, 引用者被称为host



## Tree Shaking 和Scope Hoisting

答案tree shaking：tree shaking 通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块语法的 静态结构 特性，例如 import 和 export。这个概念是从rollup来的。
条件： 

- 生产模式下，启动代码优化，通过 terser 删除dead code
- 引入的包要`package.json`要`sideEffects:false`
- Webpack 中使用 babel-loader 时，建议将 babel-preset-env 的 moduels 配置项设置为 false，关闭模块导入导出语句的转译

Scope Hoisting：

- 分析出模块之间的依赖关系，尽可能的把打散的模块合并到一个函数中去，但前提是不能造成代码冗余。 因此只有那些被引用了一次的模块才能被合并。
- 由于 Scope Hoisting 需要分析出模块之间的依赖关系，因此源码必须采用 ES6 模块化语句，不然它将无法生效。

## hash、chunkhash、contenthash区别

答案

- hash：和整个项目的构建相关，只要有文件修改，hash值就变
- chunkhash：根据chunk生成hash值，根据不同的入口文件
- contenthash：根据内容生成hash值
- js用chunkhash,css用contenhash，图片用contenthash(file-loader的hash是文件内容的)

## 库怎么实现按需加载

答案

- babel-plugin-import 利用babel插件通过生成AST对 import语句，进行转换和生成。
- 比如 import {Button} from 'xxx' 变为 import button from 'xxx/button'

## Source Map最佳实践

答案

## AST和Babel

答案

- 抽象语法树：对代码的一种抽象表示，是树形结构。
- 应用：代码高亮，JS转义，代码压缩，ESLint，Prettier等
- babel 编译 ES5 的过程：parse（解析代码生成AST）、transform（通过 traverse 遍历 AST 进行处理转换）、generator (生成代码)