---
outline: deep
---

# CSS

## 01. 盒模型

`box-sizing： content-box / border-box  `

- 标准盒模型

  width /height 属性 只包括内容的宽和高

- IE 盒模型

  width / height 属性 包括内容，内边距和边框



## 02. position

- static：默认值
- relative：相对元素自身位置
- absolute：相对最近（relative/absolute/fixed）的祖先元素，找不到则相对于根元素。
- fixed：相对屏幕视口（viewport）（当祖先元素具有`transform`属性且不为none时，就会相对于祖先元素指定坐标，而不是浏览器窗口）
- absolute/fixed 脱离文档流
- sticky：粘性定位，当元素在可视范围内为 relative，超出则为 fixed，必须指定 top 、left、right、bottom 其中一个才生效。



## 03.  伪类/伪元素

- 伪类选择器：选择处于特定状态的元素的选择器，`:hover`  / `:first-child`
- 伪元素选择器：用于设置元素指定部分的样式， `::before` / `::first-line`



## 04. 选择器优先级

- !important 
- 内联样式 
- ID 选择器 
- 类选择器 =  伪类选择器 = 属性选择器
- 标签选择器 = 伪元素选择器

```css
// 属性选择器
a[href="https://example.org"] {
  color: green;
}
```



## 05. 清除浮动

父元素不写高度时，子元素浮动后，脱离文档流，父元素会发生高度塌陷（造成父元素高度为 0）

**解决高度塌陷：**

- 为父元素设置 `overflow:hidden` 属性，缺点：会隐藏超出的内容

- 添加一个 `clear:both` 的块级元素，缺点：多余元素

- 父元素也浮动，缺点：产生新的浮动影响

- 完美方案：**父级末尾添加伪元素**

  ```css
  父元素::after{ content:""; display:block; clear:both; height:0;}
  ```



## 06. BFC

块级格式化上下文；独立的渲染区域；只有块级元素参与，它规定了内部的块级元素如何布局；

**布局规则**：

- BFC 内部不影响外部，外部也不影响内部
- 内部的 Box 会在垂直方向，一个接一个地放置
- Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠，水平方向的margin不会重叠
- 计算 BFC 的高度时，浮动元素计算在内



**形成BFC**

- 根元素

- overflow 除了 visible 以外的值 (hidden、auto、scroll)

- float：left/right，不是none

- position：abolute/fixed

- display：inline-block、flex、grid、table-cell



**应用**

- 阻止外边距重叠

- 包含内部浮动（防止高度塌陷）

- 排除外部浮动（左浮动右BFC，防止重叠）



**IFC**

- display 属性为 inline, inline-block 会形成 行内格式化上下文

- 在行内格式化上下文中，元素一个接一个地水平排列，起点是包含块的顶部。水平方向上的 `margin`，`border` 和 `padding`在框之间得到保留。框在垂直方向上可以以不同的方式对齐：它们的顶部或底部对齐，或根据其中文字的基线对齐。

- 应用：

  - 水平居中： `text-align：center`

  - 垂直居中：`vertical-align: middle`



## 07.flex

弹性布局，flex容器所有子元素都会成为它的item。有两个轴，主轴和交叉轴，默认沿水平主轴

- 容器属性（父）
  - display:flex
  - flex-direction：row / row-reverse / column / column-reverse
  - flex-wrap: nowrap / wrap
  - justify-conternt: flex-start / flex-end / center / space-between / space-around(两边留空，等距离分布)
  - align-items：flex-start / flex-end / center / baseline / stretch(拉伸)

- item属性（子）

  - order 顺序

  - flex-grow 默认0，不放大

  - flex-shrink 默认为1，缩小

  - flex-basis 默认auto，初始大小

  - flex（上面3个的简写）

    - flex:1：1 1 0

    - flex: none： 0 0 auto

    - flex: auto： 1 1 auto

  - align-self

    - 单个对齐，参数见 align-items



## 08.居中

- 行内元素 ：水平：`text-align:center `  垂直：`line-height=height` ;`vertical-align:middle`

- 块级元素
  - 绝对定位：有宽高，四个方向为0，margin:auto 
  - 绝对定位：有宽高，top/left 50% + margin负值宽高的一半
  - 绝对定位：top/left 50% +  transform: translate(-50%, -50%);
  - flex: `display: flex; justify-content:center; align-items:center;`



## 09.三角形

设置border-color 对应的地方为透明 transparent

```css
div {
    width: 0;
    height: 0;
    border: 100px solid;
    border-color: orange blue red green;
}
```



## 10.自适应正方形

1. 高度用vw，宽度用百分比：width: 100%; height: 100vw;

```css
   .square {
     width: 10%;
     height: 10vw;
     background: tomato;
   }
```

2. 利用元素的 margin/padding 百分比是相对父元素 width 的性质来实现

```
.square {
  width: 20%;
  height: 0;
  padding-top: 20%;
  background: orange;
}
```

3. 伪元素设置margin-top 百分比，BFC

```css
.square {
  width: 30%;
  overflow: hidden;
  background: yellow;
}
.square::after {
  content: '';
  display: block;
  margin-top: 100%;
}
```



## 11. display: none / visibility:hidden/opacity:0

- `display:none`会让元素完全从渲染树中消失，渲染时不会占据任何空间，会造成重排。
- `visibility:hidden`不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见，只造成重绘。占据空间，无法点击 。
- `opacity:0`占据空间，无法点击 



## 12. 硬件加速

触发 gpu 渲染会新建一个图层，把该元素样式的计算交给 gpu。

1. transform
2. opacity
3. filter
4. will-change

```css
will-change: transform; 
transform:translate3d(0, 0, 0);
```



## 13. 重排重绘

重排：DOM元素的几何信息(大小和位置)发生变化，或者获取几何信息有关的属性。

重绘：DOM元素的外观（颜色等）发生变化，



优化措施：

- 合并对 DOM/样式 的操作
  - 用class样式集中改变
  - 使用documentFragment
- 脱离文档流
- 图片定宽高
- CSS3 的GPU加速（transform/opcity/filter/will-change）



## 14 效果和动画

- tansform
  - translate(x,y) 移动
  - scale(x,y) 缩放
  - rotate(angle) 顺时针旋转 默认Z轴

- transition 过渡效果

  - 属性名
  - 持续时间
  - 速度曲线
  - 延迟时间

- animation  动画

  - 关键帧名 `keyframes`
  - 持续时间
  - 速度曲线
  - 延时时间
