---
outline: deep
---

# Vue

## MVVM概念

1. Model模型层、View视图层、ViewModel：视图模型层，用来连接 Model 和 View
1. 通过双向数据绑定，数据驱动视图，视图响应改变数据。
1. Vue 可以看作是 MVVM 框架，Vue 实例的变量名用的是 vm (ViewModel 的缩写) ；但没有完全遵循 MVVM 模型，Vue 中可以通过 $ref 直接去操作视图，这一点上违背了 MVVM。



## **双向绑定**

- v-model 是语法糖，默认情况下相当于 :value 和 @input，通常在表单项上使⽤ v-model ，也可以在⾃定义组件上使⽤
- v-model 只能去绑定一个遍历，使用. sync 可以实现多个变量的双向绑定 。 

```javascript
<!-- 使用.sync -->
<ChildComponent :title.sync="pageTitle" />
<!-- 是以下的简写: -->
<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
 // 子组件触发更新
this.$emit('update:title', newValue)
  
```

- vue3 的 v-model 类似.sync 

```javascript
<ChildComponent v-model="pageTitle" />
!-- 是以下的简写: -->
<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
  

<!-- 指定prop: -->
<ChildComponent v-model:title="pageTitle" />
<!-- 是以下的简写: -->
<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
```


## Vue 生命周期

- 生命周期钩子就是回调函数而已，当创建组件实例的过程中会调用对应的钩子，钩子函数维护成数组的形式。
- 分为 组件的创建前后（beforeCreate/created）、挂载前后（beforeMount/mounted）、更新前后（before/beforeDestory）、销毁前后（beforeDestory/destroyed；v3:beforeUmounted/unmounted）
- keep-alive激活时（activated/deactivated）
- 捕获后代组件错误（errorCaptued）
- 父子组件，创建是自上而下，挂载是自下而上。

## v-if 和 v-for

- Vue2 中 for 比 if 的优先级高，如果放在一起使用，会遍历整个列表判断；推荐使用 computed 计算属性；
- Vue3 中 if 比 for 的优先级高。

## v-if 和 v-show

- v-if 如果条件不成立不会渲染当前指令所在节点的 dom 元素
- v-show是改变的元素的display: none
- 频繁切换的就用 v-show

## computed和watch

- computed 依赖响应式的数据产生新数据，具有缓存性，只有依赖的响应式数据变化时才会重新求值。
- watch 用来监听某个响应式数据的变化并执行对应的回调函数，是命令式的。

## 组件通信方式

- 父子组件 props / $emit - ~~$on~~/ $ref / $parent - $~~children~~/ $refs / $attrs - ~~$listeners~~
- 兄弟组件 $parent / $root / eventbus / vuex
- 跨层级关系 provide + inject / eventbus / vuex 

> 父组件向子组件传递的事件内部其实是使用`$on`实现的。


## 组件扩展方法

- mixins

```javascript
// 全局混⼊：将混⼊对象传⼊
Vue.mixin(mymixin)

// 局部混⼊：做数组项设置到mixins选项，仅作⽤于当前组件
const Comp = {
  mixins: [mymixin]
}
```

- slot  默认插槽/具名插槽/作用域插槽
- extends	(组件的继承，类似于mixins)
- 合并策略：
  - 同名钩子函数合到一个数组，混入的在前面
  - 为对象的选项，冲突以当前组件的为准
- 混入的数据和方法不好判断来源而且容易冲突，composition-api 利用独立的响应式模块方便使用响应式数据和编写独立的逻辑，更有利于逻辑抽离，方便可读性和可维护性。

## 组件data为什么必须是个函数？

每次使用组件时都会对组件进行实例化操作，并且调用 data 函数返回一个对象作为组件的数据源。这样可以保证多个组件间数据互不影响

## vue 响应式理解⭐

- Vue2中 对象使用 Object.defineProperty 对属性进行劫持，多层对象是递归实现劫持的；数组是通过重写数据的 7 个原型方法。就等在get的时候进行依赖收集，set的时候做出响应。
- 缺点：对象无法监听到新增和删除属性，需要使用$set/$delete；数组无法监听索引和长度变化。不支持Map/Set
- Vue3 使用 Proxy 对数据进行代理，实现懒代理，解决Vue2 的问题，性能更好

## 模板编译原理⭐

- 将 templete 解析成 AST语法树
- 对静态节点进行标记（diff可以优化，跳过静态节点）
- 生成代码，render函数

## 虚拟DOM的理解

- 虚拟DOM 就是用 JS 对象来描述真实的DOM，是一种抽象
- 直接操作 DOM 是有限制，如diff/clone，通过 JS 操作对象更方便；频繁的操作dom会引发重排和重绘，通过patch方法（diff）渲染的页面，可以减少dom 直接操作的次数。
- 实现跨平台，通过 vdom 可以渲染到不同的平台。

## key 的作用⭐

- key 是给每一个 vnode 的唯一 id，也是 diff 的一种优化策略，可以根据 key，找到对应的 old vnode 节点，减少更新 dom 的操作。
- 若不设置 key，就是undefined，渲染的元素列表时，会就地复用元素，如果元素有状态的情况下会造成渲染错误。
- 使用 index 作为 key，如果列表的顺序会发生变化，和不写 key 区别不大。


## diff⭐

- 首先 dom diff 是同层比较，不考虑跨层的情况
- 先比较是否是相同节点 key tag，相同节点比较属性,并复用老节点，然后比较儿子节点：
- Vue2 是双端比较，两个列表的头尾相互比较，对比的过程中逐渐向内考虑，直到某一个列表遍历完成。
- Vu3 是头和头比，尾和尾比，剩余的基于最长递增子序列进行增/删/移

## nextTick⭐

- Vue 是异步更新策略，数据变化，vue不会立即更新 dom，是开启一个队列，同一个事件循环里发生的变化会异步的批量更新。
- 要获取到更新后的 dom，需要使用 nextTick，用户传入的回调函数被添加到刷新函数(flushSchedulerQueue)的后面，在dom更新之后执行回调。

slot实现原理

答案

- 分为普通插槽和作用域插槽
- 普通插槽是在父组件编译和渲染阶段生成 vnodes，所以数据的作用域是父组件实例，子组件渲染的时候直接拿到这些渲染好的 vnodes。
- 作用域插槽，父组件在编译和渲染阶段并不会直接生成 vnodes，而是在父节点 vnode 的 data 中保留一个 scopedSlots 对象，存储着不同名称的插槽以及它们对应的**渲染函数**，只有在编译和渲染子组件阶段才会执行这个渲染函数生成 vnodes，由于是在子组件环境执行的，所以对应的数据作用域是子组件实例。

[https://zhuanlan.zhihu.com/p/126286014](https://zhuanlan.zhihu.com/p/126286014)

## keep-alive⭐

## 谈谈对Vuex的理解⭐


## vue-router⭐



[Vue面试题之vue实现MVVM数据绑定.md](https://github.com/yihan12/day-to-day/blob/master/202101/Vue%E9%9D%A2%E8%AF%95%E9%A2%98%E4%B9%8Bvue%E5%AE%9E%E7%8E%B0MVVM%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.md)