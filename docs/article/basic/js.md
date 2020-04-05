# JS

## JavaScript 执行机制

> 来源[ssssyoki](https://juejin.im/post/59e85eebf265da430d571f89)

### 1.js 的异步

javascript 是一门<em>单线程</em>语言，不管是什么新框架新语法糖实现的所谓异步，其实都是用同步的方法去模拟的，牢牢把握住单线程这点非常重要。

### 2.JavaScript 执行过程
![Event Loop脑图](../assets/eventLoop.png)
- 事件循环(Event Loop)是 js 实现异步的一种方法，也是 js 的执行机制。
   * js执行过程中，同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的回调函数插入到异步队列。
   * 主线程内的任务执行完毕为空，会去异步队列读取对应的函数，进入主线程执行。
   * 上述过程会不断重复，也就是常说的Event Loop(事件循环)。
- 异步队列又分微任务队列和宏任务队列
   * 常用的微任务队列:Promise,process.netTick(node)
   * 常用的宏任务队列:整体代码script,setTimeout,setInterval
   * 异步队列执行过程：宏任务队列出栈后产生的所有微任务全部完成后，再次执行下一个宏任务出栈操作。直至任务队列为空

### 3.javascript 的执行和运行

执行和运行有很大的区别，javascript 在不同的环境下，比如 node，浏览器，Ringo 等等，执行方式是不同的。而运行大多指 javascript 解析引擎，是统一的。
