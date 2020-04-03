# JS

> 收集自[段亦心](https://juejin.im/post/5bb470295188255c5e66f88f)、

## js 执行机制
> 可参考[前端基础-js事件循环](http://127.0.0.1:8080/article/basic/js.html#javascript-%E6%89%A7%E8%A1%8C%E6%9C%BA%E5%88%B6)
```js
setTimeout(() => {
  console.log("set1");
});
new Promise(resolve => {
  console.log("p1");
  resolve("then1");
}).then(res => {
  console.log(res);
});
console.log(1);
//代码第一次顺序执行后，打印p1,1
//此时，宏任务队列：[setTimeout]
//此时，微任务队列：[then]
//执行微任务队列代码 ，打印then1
//执行宏任务队列代码 ，打印set1
//打印结果：p1 1 then1 set1
```

```js
setTimeout(() => {
  console.log("set1");
  new Promise(res => {
    res();
  }).then(() => {
    new Promise(res => {
      res();
    }).then(() => {
      console.log("then4");
    });
    console.log("then2");
  });
});
new Promise(res => {
  console.log("pr1");
  res();
}).then(() => {
  console.log("then1");
});
setTimeout(() => {
  console.log("set2");
});
console.log(2);
new Promise(res => {
  res();
}).then(() => {
  console.log("then3");
});
//代码第一次顺序执行后，打印pr1,2
//此时，宏任务队列：[setTimeout(set1),setTimeout(set2)]
//此时，微任务队列：[Promise(then1),Promise(then3)]
//执行微任务队列代码 ，打印then1,then3
//微任务队列空
//执行宏任务队列代码第一个，打印set1
//宏任务执行后，宏任务队列：[setTimeout(set2)]
//宏任务执行后，微任务队列：[Promise(then2)]
//执行微任务队列代码 ，打印then2
//微任务执行后，宏任务队列：[setTimeout(set2)]
//微任务执行后，微任务队列：[Promise(then4)]
//执行微任务队列代码 ，打印then4
//微任务队列空
//执行宏任务队列代码第一个，打印set2
//宏任务执行后，宏任务队列：[]
//宏任务执行后，微任务队列：[]
//执行结束。顺序依次是pr1-2-then1-then3-set1-then2-then4-set2
```

## 面向对象

## 原型链

## 闭包

### 闭包是什么？

因为作用域链，外部不能访问内部的变量和方法，这时我们就需要通过闭包，返回内部的方法和变量给外部，从而就形成了一个闭包。

### 闭包什么时候会消除?

JavaScript 是一门具有自动垃圾回收机制的编程语言，主要有两种方式：

- 标记清除（最常用）

垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记（可以使用任何标记方式）。然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾收集器完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。

- 引用计数

引用计数（reference counting）的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是 1。如果同一个值又被赋给另一个变量，则该值的引用次数加 1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减 1。当这个值的引用次数变成 0 时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾收集器下次再运行时，它就会释放那些引用次数为零的值所占用的内存。
导致问题：会导致循环引用的变量和函数无法回收。
解决：将用完的函数或者变量置为 null。

## ​var,let 和 const

​ - var。
_ 全局变量
_ 无变量声明提升，声明前使用会报错 not defined
​ - let 它的出现，我认为主要是解决了块级作用域的需求。
_ 只在块级作用域能使用
_ 无变量声明提升，声明前使用会报错 not defined
