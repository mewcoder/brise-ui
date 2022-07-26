---
outline: deep
---

# 综合

## 性能优化的手段

答案

1. 所谓性能优化，就是从用户请求到页面显示的整个生命周期上的优化。 

大体过程分为：

   - **网络部分**：查找缓存、DNS解析、TCP连接、HTTP请求（会排队）和响应
   - **渲染部分**：浏览器解析渲染

2. 性能优化首先要有指标去评估

3. 优化手段：



**网络请求优化：**
网络请求优化的目标：减少数量和减少单次时间

1. 设置静态资源的 HTTP 缓存（强缓存/协商缓存）
1. 使用 dns-prefetch，进行 DNS 预解析
1. 域名分片、HTTP2（同一个域名最多处理 6 个TCP连接，HTTP请求会排队）
1. preload（预先请求当前页面需要的资源）、 prefetch（将来页面中使用的资源，可能会浪费资源） 将数据缓存到HTTP缓存中
1. 采用 CDN 加速加快访问速度。(指派最近、高度可用)

**静态资源优化：**

- JS/CSS的压缩，减少体积
- 图片相关:
  - 选择合适的格式：jpg/png/svg/webp/gif
  - 响应式图片 （img srcset /  picture source）
  - 小图使用base64，减少请求，还有雪碧图（backgroud-positon）
  - 图片懒加载⚠️

**渲染优化：**

> **渲染过程：**JavaScript处理->计算样式->页面布局->绘制->合成

- JS 阻塞 DOM 解析，使用 async/defer

- CSS选择器减少层数，减少使用通配符。

- 减少重排和重绘

  重排：几何属性、获取某些特定的属性值；重绘：修改样式

  - 合并对 DOM/样式 的操作
  - 脱离文档流
  - 图片定宽高
  - CSS3 的GPU加速（transform/opcity/filter/will-change）

- 使用事件委托

- 事件的防抖和节流

- 使用`webworker`处理长任务、时间切片⚠️

- `requestAnimationFrame`、`requestIdleCallback`

- `IntersectionObserver` 


**构建优化：**

- 速度优化
  - 缩小构建范围
  - 多线程 thread-loader
  - 缓存：
    - terser-webpack-plugin 开启缓存，也可以开启并行
    - babel-loader 开启缓存 
    - 使用 cache-loader ，耗时的 loader之前使用
    - hard-source-webpack-plugin，构建缓存二次构建时间减少80%
- 体积优化
  - 代码压缩
  - 按需加载 import
  - 分包
  - externals 配合，cdn引入


## 有限状态机、parser

有限状态机：根据输入的不同来改为不同的状态