---
outline: deep
---

# 浏览器

## HTML/DOM

### offsetHeight-scrollHeight-clientHeight-区别

- style.width的返回值是字符串，并且带有单位
- offsetHeight/offsetWidth ：border + padding + content
- clientHeight/clientWidth ：padding + content
- scrollHeight/scrollWidth ：padding + 实际内容的尺寸
- scrollTop/scrollLeft : DOM 内部元素滚动的距离

![](https://cdn.nlark.com/yuque/0/2021/png/338495/1620556246492-47ff64d3-9e0b-4531-a259-77eced186322.png?x-oss-process=image%2Fresize%2Cw_937%2Climit_0#crop=0&crop=0&crop=1&crop=1&from=url&id=wnd35&margin=%5Bobject%20Object%5D&originHeight=424&originWidth=937&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

- window.innerHeight：**可视区域高度**
- document.documentElement.clientHeight：**可视区域高度，**不包含滚动条
- document.documentElement.scrollHeight：html元素高度
- document.body.clientHeight：body元素高度

### property 和 attribute区别

- property：每个DOM节点都是 JS 对象，操作 property 是 JS 范畴的
- attribute：是DOM上的属性

两者之间的区别是：

- 自定义的 property 与 attribute 不同步,不相等
- 非自定义的 DOM property 与 attributes 是有条件同步的（如 value不会同步）

### async 和 defer 区别

- 两个都是异步加载 JS 脚本，不阻塞 html 解析
-  defer 是先加载，等到dom解析完，在DOMContentLoaded事件之前执行脚本
- async 是加载完立即执行
- type="module" 等同于defer

### href 和 src 区别

- href 用于建立当前页面与引用资源之间的关系（链接）如 a / link，
-  src 则会替换当前标签，如 img / script/ iframe

### CSS会阻塞渲染吗

- CSS 不会阻塞 DOM 解析（link在head中）
- CSS 会阻塞 DOM 树的渲染（阻塞render tree的形成）
- 会阻塞后面的 JS 的执行（JS可以更改DOM样式）

### HTML5 新特性

- 语义化标签
- canvas/svg
- localStorage / sessionStorage
- websocket
- history api   @路由
   - puhState / replaceState方法
   - popstate事件，上述两个方法不会触发
- 媒体/表单/定位相关



### token会劫持的问题

- token 是为了防止 csrf 攻击的，因为浏览器会自动携带同域 Cookie 发送请求。
- CSRF 的过程：
   - 用户登录了 `a.com` ，有了 cookie
   - 黑客引诱用户访问 `b.com` 网页，偷偷让用户访问了 `a.com/api/xxx`（干某件事）
   - `a.com` api 接口收到请求 cookie ，误以为是真实用户的请求，就受理了



- 



## 网络/浏览器

### TCP和UDP区别

- TCP是面向字节流的(可拆分/合并)，UDP是面向报文的
- TCP面向连接，UDP无连接
- TCP只能一对一通信，UDP支持一对一，一对多，多对一，多对多
- TCP可靠传输，使用流量控制和拥塞控制，UDP不可靠
- TCP头部开销大（20-60字节），UDP头部开销小（8字节）



### HTTP/1.1长连接 和 HTTP/2.0多路复用?

- HTTP/1.1：同⼀时间⼀个TCP连接只能处理⼀个请求, 采⽤⼀问⼀答的形式, 上⼀个请求响应后才能处理下⼀个请求. 由于浏览器最⼤TCP连接数的限制, 所以有了最⼤并发请求数的限制.
- HTTP/2.0：同域名下所有通信都在单个连接上完成，消除了因多个 TCP 连接⽽带来的延时和内存消耗。单个连接上可以并⾏交错的请求和响应，之间互不干扰。

那为什么HTTP/1.1不能实现多路复⽤?

- HTTP/2是基于⼆进制“帧”的协议，HTTP/1.1是基于(报文)“⽂本分割”解析的协议。
- HTTP1.1的报⽂结构中, 服务器需要不断的读⼊字节，直到遇到换⾏符, 或者说⼀个空⽩⾏. 处理顺序是串⾏的, ⼀个请求和⼀个响应需要通过⼀问⼀答的形式才能对应起来。
- HTTP2.0中，有两个⾮常重要的概念，分别是帧（frame）和流（stream）。帧代表着最⼩的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。
- 多路复⽤，就是在⼀个 TCP 连接中可以存在多条流。换句话说，也就是可以发送多个请求，对端可以通过帧中的标识知道属于哪个请求。通过这个技术，可以避免 HTTP 旧版本中的队头阻塞问题，极⼤的提⾼传输性能。
  



### HTTPS

HTTS 其实就是 HTTP+TLS 的传输方式，TLS 叫传输层安全，之前叫 SSL（安全套接层）。

因为 HTTP 属于明文传输，可以被截取到。那么就需要对传输报文进行加密，加密方式有两种：非对称和对称。对称就是同一个密钥进行加密解密，非对称就是有一组公私密钥，可以互相加解密。

那么 TLS 是怎么做的呢？

因为非对称加密的效率不高，对 http 报文一般采用对称加密，然后通过非对称加密传输这个会话密钥。

比如客户端生成一个会话密钥通过一个公钥加密，服务端通过私钥解密获得会话密钥，就可以安全地传输报文了。

但是这个公钥不能安全地传输到客户端手里，即使加密也需要对应的密钥进行传输，现在的通过 CA 机构 解决这个密钥的信任问题。

服务端向 CA 机构申请一个证书，这个证书，就是用 CA 机构的私钥 加密过的 网站的公钥。

然后客户端请求得到这个证书，通过预装在客户端的 CA 机构的公钥 进行解密和验证签名，得到这个网站的公钥。

简单的讲，客户端就可以生成一个会话密钥通过公钥加密传输给服务端，服务端通过对应的私钥解密后就共享了这个会话密钥。

但是，真实情况不是这个简单流程(RSA)，有密钥交换算法，比如 ECDHE，在请求返回证书的过程，服务端和客户端会分别交互两个随机数，然后自个通过协商好的算法参数生成第三个随机数，再通过这个三个随机数生成会话密钥，这个密钥是不需要传输的，两边都知道，之后就可以加密传输了。



### 长连接/长轮询/短轮询/websocket

- 长连接：`Connection：keep-alive`
- 长轮询：服务端将请求挂起一定的时间再返回（微信二维码）
- 短轮询：客户端每隔一段时间发送请求
- websocket：全双工的协议，可以相互收发消息。



### DNS解析

**DNS（Domain Name System，域名系统）是一个将域名和 IP 地址相互映射的分布式服务**

缓存：浏览器-操作系统-路由器-本地域名服务器

1.客户端发送请求给本地域名服务器，如果没有继续（递归）

2.本地域名服务器，向根域名服务器，返回顶级域名服务器地址，然后请求拿到权威域名服务器，最后请求拿到IP返回给客户端（迭代）

一般我们向本地 DNS 服务器发送请求的方式就是递归查询，因为我们只需要发出一次请求，然后本地 DNS 服务器返回给我 们最终的请求结果。而本地 DNS 服务器向其他域名服务器请求的过程是迭代查询的过程，因为每一次域名服务器只返回单次 查询的结果，下一级的查询由本地 DNS 服务器自己进行。



### 浏览器安全

**csrf：跨站请求伪造(Cross—Site Request Forgery)** 

攻击者利用HTTP请求会携带cookie的特定，利用用户的登陆状态发送恶意请求。

方法：自动发起get/post请求；诱导点击

**防御**：

- CSRF token 验证

- HTTP 请求头的 referer 字段（可以伪造），Origin(不含具体url)

- SameSite 限制 Cookie 在跨站请求时不会被发送
  - Strict，必须是相同站点
  - Lax 宽松，允许部分类型，比如 a链接
  - None 不限制

**XSS：跨站脚本(Cross Site Scripting)**

- 存储型：将恶意代码存在服务器，请求含有恶意代码的页面。
- 反射型：构建含有恶意代码的url，服务器不存储，后端直接返回到页面。
- DOM型：前端解析恶意代码执行，相比前两者，属于前端的漏洞。

**防御**：

- 本质是防止恶意脚本的注入

- 存储型和反射性：改成纯前端渲染， 对输入内容进行转义和过滤
- DOM型：谨慎  innerHTML/ v-html ，字符串做代码执行的 eval,Function

- CSP 内容安全策略 Content-Security-Policy，白名单告诉浏览器认可的资源来源，http响应头/meta
- 很多XSS盗取是cookie的，可以设置Cookie 的 HttpOnly 



### 浏览器存储

**Cookie**：4K，用于HTTP请求头，同源，每个域名Cookie数量不超过20个

- 可设置有效期（Expires/Max-Age）
- Domain/Path 定义了 Cookie 的作用域
- Secure 标记为只能通过HTTPS发送
- HttpOnly无法通过JS访问（ Document.cookie）
- SameSite 限制Cookie 在跨站请求时不会被发送，同站：**二级域名**
- 主要用于，会话状态管理，行为跟踪。
-  缺陷：空间小，网络请求会携带

> 操作：document.cookie 读取/或写入，写入是追加



**LocalStorage/SessionStorage**：5M

- 浏览器提供的本地存储方法，同源策略，API简单

- SessionStorage：当前窗口关闭就失效了，多个同源页面不共享

- localStorage：永久保存，同源页面共享

- 缺点：空间小，只能存字符串

> 方法：setItem/getItem/removeItem/clear



**IndexedDB**：用于客户端存储大量结构化数据，采用键值存储，接近NoSQL数据库，同源策略，支持异步，支持事务，空间大（不少于250M）


### 跨域问题

同源策略：协议+域名+端口

**JSONP**

- 前端构建一个全局函数的回调promise
- 服务端返回一个传入数据的调用函数的字符串

> 仅支持get，不安全



**CORS**

跨域资源共享（CORS，Cross-Origin Resource Sharing）

在服务端允许跨域的情况下，通过HTTP响应头告诉浏览器当前请求允许跨域。

简单请求：

- 请求方法为 **GET**、**POST**、**HEAD**。
- 请求头只能使用下面的字段：
  - Accept
  - Accept-Language
  - Content-Type （只限于 text/plain、multipart/form-data、application/x-www-form-urlencoded）
  - Content-Language

任意一条要求不符合的即为非简单请求

- 非简单请求会先发个预检请求（Preflight）

```
简单请求：
请求头：Origin   响应头：Access-Control-Allow-Origin

- 预检请求
请求头：Method：OPTIONS  
Access-Control-Request-Headers:content-type
Access-Control-Request-Methods:POST

响应头:
Access-Control-Allow-Headers: content-type
Access-Control-Allow-Origin: *
Access-Control-Request-Methods: POST,GET,OPTIONS
```

- CORS携带Cookie
  - 预检的响应头里要 Access-Control-Allow-Credentials: true 
  - Access-Control-Allow-Origin 不能为空
  - 在请求中设置 withCredentials



**代理转发**

- 正向代理
- 反向代理



### HTTP状态码

- 1××：中间状态

  - 101 Switching Protocols

- 2××：成功

  - 200 OK

  - 204 No Content：没有body  埋点上报

  - 206 Partial Content

- 3xx：重定向

  - 301 永久重定向

  - 302 临时重定向 ；效果和301一样，只是语义不一样

  - 304 缓存重定向 协商缓存验证

- 4xx：客户端错误

  - 400 Bad Request：通用的错误码
  - 401 unauthorized 未授权

  - 403 Forbidden

  - 404 Not Found

  - 405 Method Not Allowed

- 5xx：服务器错误

  - 500 Internal Server Error：通用的错误码

  - 502 Bad Gateway：网关/代理错误
  - 503  Service Unavailable



### 缓存

浏览器缓存：Service Worker / Memory Cache / Disk Cache / Push Cache

HTTP缓存：

强缓存：

- 1.0 响应头 Expires 

- Pragma：nocache

- 1.1 Cache-Control： max-age；no-store/no-cache；private/public

- 没有缓存，浏览器会启发式缓存

协商缓存：
- Last-modified - If-Modified-Since
- Etag - If-None-Match
  



### 事件循环

JS 是单线程的语言，只有一个执行栈，先执行当前任务，遇到异步事件就放入任务队列中，分为宏任务和微任务，当前宏任务执行完会处理所有的微任务，再从宏任务队列中取一个开始下一个宏任务。

- 渲染是下一个宏任务执行前 [https://zhuanlan.zhihu.com/p/78113300](https://zhuanlan.zhihu.com/p/78113300)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/338495/1654402275546-74fadbb4-590b-42cb-9079-9df66ae710ed.png)

宏任务：script标签 / 交互事件

-  setTimeout() / setInterval() /requestAnimationFrame() /  **Node**: setImmediate（）

微任务：

- Promise()  / MutationObserver() / queueMicrotask() /  **Node**: process.nextTick()


Node:

- Node10 以后，每执行完一 个timers  类回调，例如 setTimeout ,setImmediate 之后，都会把微任务给执行掉（promise等）



### 浏览器进程

- 主进程
- **渲染进程**
  - GUI渲染线程  和JS引擎互斥
  - JS引擎
  - 事件触发线程
  - 定时器触发线程
  - 异步HTTP请求线程
- GPU进程
- 网络进程
- 插件进程



### 从输入URL到显示页面

- 浏览器处理URL

  - 浏览器进程

- 网络进程 发起请求

  - 检查缓存

  - DNS查找

  - HTTP(S) / TCP连接

- 响应请求 渲染进程 渲染页面

- 关键渲染路径

  - 解析HTML和CSS分别生成DOM树和CSS规则树
  - 组装成 render树，只添加可见的节点
  - 布局 ：计算出 节点的布局信息（大小和位置）
  - 通过布局树，进行分层生成图层树
  - 为每个图层生成绘制列表，绘制节点的外观（颜色等）等
  - 合成：将图层划分图块，光栅化（转位图），发送绘制命令浏览进程，渲染显示



### rAF/rIC

- `requestAnimationFrame`：告诉浏览器在下一次绘制之前执行该回
- `requestIdleCallback`：在浏览器空闲的事件执行

![img](https://www.yuque.com/api/filetransfer/images?url=http%3A%2F%2Fzhufengpeixun.com%2Fjg-vue%2Fassets%2Fimg%2Fframe.99c33aee.png&sign=26fbeb015210d4a241e2400c683f4b5223c809174b5f7db41286c8560e4e11ad)

![img](https://images.cubox.pro/1655882282065/10575/image.jpg)