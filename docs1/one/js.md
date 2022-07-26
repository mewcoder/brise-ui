---
outline: deep
---

# JavaScript

## 01.类型判断

- 原始数据类类型：Undefined、Null、Boolean、Number、String、Symbol、BigInt
- 引用数据类型：Object

1. **typeof**

- undefined / string / number / boolean/ symbol(ES6) / bigint(ES2020)
- function(函数对象) 和 object(其他对象或 null)

> 在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0，由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 "object"。


2. **instanceof**

- 对基本数据类型不起作用，可以判断引用数据类型，判断对象是否为构造函数的实例，原理是判断对象的原型链中是否存在构造函数的原型对象。

```js
function myInstanceOf(obj, Type) {
  let proto = Object.getPrototypeOf(obj)

  while(proto) {
    if (proto === Type.prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false
}
```

3. **constructor**

- 原理是通过访问对象实例的 constructor 属性访问对应的构造函数
- undefined 和 null 没有 contructor 属性
- 容易伪造，不适合做类型判断

- **跨窗口**，同窗口下的内置对象是不同的实例 instanceof 和 constructor 都会出现问题


4. **Object.prototype.toString.call()**

- 不能检测非原生构造函数的构造函数名
- `Object.prototype.toString.call(value).slice(8, -1)`

如果要判断的是基本数据类型或 JavaScript内置对象，使用 toString；如果要判断的是自定义类型，可以使用`instanceof`。

## 02.判断数组

- `Array.isArray(arr)`
- `Object.prototype.toString.call(arr).slice(8,-1) === 'Array'`
- `arr instanceof Array`
- `Array.prototype.isPrototypeOf(arr)` /` obj.__proto__ === Array.prototype`



## 03.浮点数精度

- 在 JavaScript 中, Number 是一种 定义为 64 位双精度浮点型 (IEEE 754)的数字数据类型
- 64位 = 1位符号位 + 11位指数位 + 52位小数位
- 十进制的小数转为二进制时采用的方法时**乘二取整法**，可能会出现无限循环的二进制数。



**解决精度丢失**

- 展示数据时，toPrecision 返回一个指定精度的数字。 toFixed 返回指定小数位数 (四舍五入是不确定)
- 计算时可以先转为整数，先扩大再缩小

```jsx
/**
 * 精确加法
 */
function add(num1, num2) {
  const num1Digits = (num1.toString().split('.')[1] || '').length;
  const num2Digits = (num2.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
}
```

- 或者使用类库计算如 number-precision.js、Math.js、BigDecimal.js



## 04.类型转换

`==`

- null == undefined 
- 更倾向number，一方存在 number ，则都转为 number

`+`

- 更倾向转为string

转为string时，"undefined","null","true"/ "false"
转为 number 时, null 为 0, undefined 为NaN, boolean为1/0，symbol 报错

对象会按优先级调用 [Symbol.toPrimitive] / valueof / toString 方法


## 05.Object.is

- 使用双等号（==）进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。
- 使用三等号（===）进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。
- 使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的。

```jsx
 Object.is = function(x, y) {
    if (x === y) { // Steps 1-5, 7-10
      // +0不等于-0
      return x !== 0 || 1 / x === 1 / y;
      // 相当于
      // if(x === 0){
      //   return  1 / x === 1 / y
      //  }
    } else { 
      // 针对 NaN 等于 NaN
      return x !== x && y !== y;
    }
  };
```



## 06.核心概念

#### 01.变量提升和暂时性死区

- **变量提升**，是指在代码执行过程中，引擎把变量的声明部分和函数的声明部分提升到代码开头的 “ 行为 ”。变量被提升后，变量的值是`undefined`。

- 但实际上变量和函数声明在代码里的位置是不会改变的，而且是在**编译阶段 **被 JS 引擎放入内存中的，存在执行上下文的变量环境中。

- **暂时性死区**：在用 let/const 命令**声明变量之前**，该变量都是不可用的。这在语法上称为 “暂时性死区”（ temporal dead zone，简称 TDZ）

#### 02.作用域

作用域控制着变量和函数的可见性和生命周期，是**声明时就决定**的，是词法作用域。分为：

- **全局作用域**中的对象在代码中的任何地方都能访问，其生命周期伴随着页面的生命周期。
- **函数作用域**就是在函数内部定义的变量或者函数，定义的变量或者函数只能在函数内部被访问。函数执行结束之后，函数内部定义的变量会被销毁。
- **块级作用域**就是使用一对大括号包裹的一段代码，块级作用域就是通过词法环境的栈结构来实现的。使用let/const 使用，{ }内部变量不会覆盖外部的

#### 03.闭包

- 闭包的形成源于两点**词法作用域**和**函数**可以作为值传递
- 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数在当前词法作用域之外执行。

- 闭包和作用域链相关，函数内部是可以读取外部作用域的变量的，但是从函数外部不可以之间读取内部的局部变量的；函数内部定义一个函数使用了局部变量，并返回，这个被引用的变量会始终保存在内存中。（**私有化数据**）

- 从 JS 引擎角度，JS 遇到内部函数，对其进行快速的词法扫描，**发现内部函数引用了外部函数的变量**，会在堆空间创建 closure(外部函数) 对象。

#### 04.执行上下文

执行上下文就是当前 JavaScript 代码被解析和执行时所在环境的抽象概念。
分为：

- 全局执行上下文
- 函数执行上下文
- Eval 函数执行上下文

![](https://cdn.nlark.com/yuque/0/2021/png/338495/1626710954144-44541328-f268-4ba6-8494-38f2710fefa2.png?x-oss-process=image%2Fresize%2Cw_610%2Climit_0#crop=0&crop=0&crop=1&crop=1&from=url&height=256&id=GowyI&margin=%5Bobject%20Object%5D&originHeight=329&originWidth=610&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=474)

- 变量环境是用来登记 var function变量声明，词法环境是用来登记let const class 等变量声明。**块级作用域就是通过词法环境的栈结构来实现的**，而变量提升是通过变量环境来实现。

- 执行上下文是代码执行之前创建的。this 的指向是执行时确定的。

#### 05.作用域链

- 作用域链就是将一个个作用域串起来，实现变量查找的路径。

- 在 JavaScript 执行过程中，其作用域链是由词法作用域决定的。词法作用域**就是指查找作用域的顺序是按照函数定义时的位置来决定的 ，所以词法作用域是**静态的作用域。


- 每个执行上下文的**变量环境中，都包含了一个外部引用**，用来指向外部的执行上下文，我们把这个外部引用称为 **outer**

#### 06. this

this 是和执行上下文绑定的，每个执行上下文都有一个this

1. 当函数作为对象的方法调用时，函数中的 this 就是该对象；
1. 当函数被直接调用时，在严格模式下，this 值是 undefined，非严格模式下 this 指向的是全局对象；
1. 当构造函数调用时，this指向新创建的对象
1. 箭头函数继承外层函数的 this 值
1. 使用call/apply/bind指定this

```js
Function.prototype.myCall = function (obj, ...arg) {
    if(typeof this!=='funciton'){
        throw new TypeError(this,'is not function');
    }
    const ctx = obj || window;
    const fn = Symbol(); // 保证唯一
    ctx[fn] = this;
    const res = ctx[fn](...arg);
    delete ctx[fn];
    return res;
}

//apply略，只是接受参数不一样

Function.prototype.myBind = function(obj, ...args) {
    if(typeof this!=='funciton'){
       throw new TypeError(this,'is not function');
    }
    const fn = this;
    const res =  function(...rest) {
        // new 调用时 this 指向实例
        const ctx = this instance of fn ? this : obj
        return fn.apply(ctx,[...args, ...rest]);
    }
    res.prototype = Object.create(fn.prototype)
    return res
}
```



#### 05.原型链

> JS的继承是通过原型链实现的，每个实例对象都有`__proto__`指向它的构造函数的 prototype，原型对象也是对象也有`__proto__`，层层向上指向`Object.prototype`（null）

- **prototype（原型对象）**是构造函数的属性，`__proto__`是任何对象的属性，指向该对象的构造函数的**prototype。**
- prototype 有 constructor 属性，指向构造函数
- **构造函数**也是对象，构造函数的`__proto__`的属性指向构造函数 **Function() **的 **prototype**
- **prototype**对象，其`__proto__`属性指向构造函数 Obejct() 的 prototype吧(最终指向null)，





## 07.继承的方式

![image.png](https://cdn.nlark.com/yuque/0/2021/png/338495/1625043301872-32a96c0d-9108-4e2c-9563-5cc933b9355a.png)

1. 原型链继承：` Child.prototype = new Parent()`; 所有实例对象共享一个原型对象，子类创建实例时没法传参
1. 构造函数继承：`function Child () { Parent.call(this); }`，不能继承父类原型属性或者方法
1. 组合继承： 构造函数多调用了一次

```jsx
function Child (name, age) {
    Parent.call(this, name); //  第二次调用 Parent()
    this.age = age;
}

Child.prototype = new Parent(); // // 第一次调用 Parent()
Child.prototype.constructor = Child; //// 手动挂上构造器，指向自己的构造函数
```

4. 原型式继承： 基于已有的对象来创建新的对象，使用`Object.create`方法，将传入对象作为返回对象的原型对象。`let person4 = Object.create(parent4);`，缺点与原型链继承相同
4. 寄生式继承：对原型式继承获得的对象，再进行扩展。缺点是没有办法实现函数的复用
4. **寄生组合式继承**：

```jsx
function Child (name, age) {
    Parent.call(this, name); // 调用 Parent()
    this.age = age;
}


funtion inherit(Child,Parent){
  // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
  Child.prototype = Object.create(Parent.prototype); 
  Child.prototype.constructor = Child; //// 手动挂上构造器，指向自己的构造函数
  
  // 子类继承父类的静态属性方法
  Object.setPrototypeOf(subClass, superClass) // __proto__
}

```


## ES6

### 01.var/let/const

| **区别**           | **var** | **let** | **const** |
| ------------------ | ------- | ------- | --------- |
| 是否有块级作用域   | ×       | √       | √         |
| 是否存在变量提升   | √       | ×       | ×         |
| 是否添加全局属性   | √       | ×       | ×         |
| 能否重复声明变量   | √       | ×       | ×         |
| 是否存在暂时性死区 | ×       | √       | √         |
| 是否必须设置初始值 | ×       | ×       | √         |
| 能否改变指针指向   | √       | √       | ×         |


### 02.箭头函数

- 箭头函数不会创建自己的 this，从上一层作用域继承 this
- call()、apply()、bind() 等方法不能改变箭头函数中 this 的指向，静态作用域
- 没有 arguments
- 没有 prototype 不能 new
- 不能使用 yield命令，箭头函数不能用作 Generator 函数。


### 03.展开语法/剩余参数

剩余语法(Rest syntax) 看起来和展开语法(Spread syntax)完全相同，不同点在于, 展开语法用于解构数组和对象。从某种意义上说，剩余语法与展开语法是相反的：**展开**语法将数组展开为其中的各个元素，而剩余语法则是将多个元素**收集**起来。

- 在数组或函数参数中使用展开语法时, 该语法只能用于可迭代对象

```jsx
console.log(...[1, 2, 3]) // spread
```

> ES2018 将这个运算符[引入](https://github.com/sebmarkbage/ecmascript-rest-spread)了对象

```jsx
let n = { x, y, ...z }; // spread

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }; //rest
```

### 04.解构赋值

通过**解构赋值, **可以将属性/值从对象/数组中取出,赋值给其他变量。

```jsx
var o = {p: 42, q: true};
var {p, q} = o;

var foo = ["one", "two", "three"];
var [one, two, three] = foo;
```



### WeakSet/WeakMap

- WeakSet的成员要求是对象，WeakMap的键要求是对象。
- WeakSet 中的对象都是**弱引用**，如果WeakSet中的某个对象不可达（引用置为null）了，WeakSet中的该对象会被回收掉。
- WeakMap 实例仅有has()、set()、get()、delete()操作方法，没有size属性以及keys()、values()、entries()方法，所以不能获取其所有键值，也就不能迭代。
- WeakSet/WeakMap 没有部署 Iterator接口，所以不能用f or...of 遍历。因为size取决于垃圾回收机制。
- 场景
  - WeakSet：保存dom节点
  - WeakMap： 给dom添加处理函数



### 模块化对比

- CJS 模块是运行时加载，ES6 模块是编译时输出接口
- CJS 模块输出的是值的拷贝，ES6 模块输出的是值的引用
- CJS 模块为同步加载，ES6支持异步加载
- CJS 是单个值导出，ES6 模块可以导出多个
- CJS 模块的 this 是当前模块，ES6 模块的 this 是 undefined



## 01.类数组

一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数组类似，但是不能调用数组的方法。

```jsx
var arrayLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length: 3
}
```

- 调用数组方法 Array.prototype.xxx.call(arrayLike，...)
- 转成数组
  - Array.from(arrayLike);
  - Array.prototype.slice.call(arrayLike);
  - Array.prototype.splice.call(arrayLike, 0);
  - Array.prototype.concat.apply([], arrayLike);



## 02.严格模式

```jsx
'use strict';
```

- 全局变量必须显式声明
- 禁用 with
- 严格模式下，eval 语句本身就是一个作用域，不再能够生成全局变量了，它所生成的变量只能用于eval内部。
- 不能用delete
- 禁止 this 关键字指向全局对象
- 对象不能有重名的属性

```jsx
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]
```



## 03.IIFE

立即调用函数表达式

```jsx
(function () {
   //
})();
```

立即执行函数，第一个括号里是匿名函数，拥有独立的词法作用域，把函数声明变成表达式。
第二个括号是执行传参



## 04.语句和表达式

- 语句：语句分为声明语句、流程控制语句和其他语句。
- 表达式：返回一个值，有副作用的（比如赋值）和单纯计算求值

```jsx
// 表达式
myvar 
x=7 // 赋值
3+4 // 求值

// 语句
var a;


// 函数表达式
function () { }


```

- 函数表达式，允许省略函数名

```jsx
let sayHi = function() {
  alert( "Hello" );
};
```



## 05.函数式编程

- 函数是一等公民，可以作为函数的入参和返回值
- 声明式编程 map/filter等
- 纯函数：无状态和无副作用，相同的输入永远得到相同的输出

**柯里化：**将一个多参函数，转换成一个依次调用的单参函数。
柯里化函数会接收一些参数，然后不会立即求值，而是继续返回一个新函数，将传入的参数通过闭包的形式保存，等到被真正求值的时候,，再进行求值。

**偏函数**：则是固定一个函数的一个或多个参数，也就是将一个 n 元函数转换成一个 n - x 元函数。

compose: 函数组合的目的是将多个函数组合成一个函数

```jsx
const compose = (f, g) => x => f(g(x))
```



## 06.哪些操作会造成内存泄漏

- 全局变量，这些数据只有在窗口关闭或重新刷新页面时才会被释放
- 不合理使用的闭包，导致变量一直存在内存中
- 没有清理的 DOM 元素引用
- 定时器 clearTimeout
- 事件监听  removeEventListener

**避免：**

- 减少不必要的全局变量，使⽤严格模式避免意外创建全局变量。
- 在你使⽤完数据后，及时解除引⽤（闭包中的变量，dom引⽤，定时器清除）。



## 实现sizeOf函数, 计算传入的对象所占的Bytes

```javascript
function sizeOf(o){
  const type = typeof object
  switch(type){
    case 'string': return o.length*2
    case 'boolean'  return 4
    case 'number' return 8
  }
}
```

## for循环问题

- var for里面定义的变量渗透到了外部
- let 块级作用域，每次循环重新声明一个变量



## 垃圾回收机制

- 堆
- 引用计数法/标记清除法（可达性分析）
- 代价假说，新生代，老年代
- 单线程-全停顿  v8做了一些优化，增量标记（利用浏览器空闲时间），惰性清理（写屏障），，并发并行，目的是减少堆主线程的影响



## ['1', '2', '3'].map(parseInt)

`[1, NaN, NaN]`

```jsx
['1', '2', '3'].map(parseInt) // [1, NaN, NaN]

const arr = ['1', '2', '3']
const res = arr.map((s, index) => {
    return parseInt(s, index)
})

parseInt('1', 0) // 1 ，radix === 0 按 10 进制处理
parseInt('2', 1) // NaN ，radix === 1 非法（不在 2-36 之内）
parseInt('3', 2) // NaN ，2 进制中没有 3
```

## 防抖节流

```javascript
function throttle(fn,timeout){
    let last = 0 
    return function(){
        let now = Date.now
        if(now - last > timeout){
            last = now;
            fn.apply(this,arguments)
        }
    }
}


function debounce(fn,timeout){
    let timer = null
}
```

## 遍历对比



## sort原理

- 小于10 插入排序
- 大于10 快速排序