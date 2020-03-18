# JS

## JavaScript 执行机制

> 来源[ssssyoki](https://juejin.im/post/59e85eebf265da430d571f89)

### 1.js 的异步

javascript 是一门<em>单线程</em>语言，不管是什么新框架新语法糖实现的所谓异步，其实都是用同步的方法去模拟的，牢牢把握住单线程这点非常重要。

### 2.事件循环 Event Loop

事件循环是 js 实现异步的一种方法，也是 js 的执行机制。

### 3.javascript 的执行和运行

执行和运行有很大的区别，javascript 在不同的环境下，比如 node，浏览器，Ringo 等等，执行方式是不同的。而运行大多指 javascript 解析引擎，是统一的。
