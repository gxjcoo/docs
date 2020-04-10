/********************************/
/***********异步实现机制1**********/
/********************************/

function test1(){ 
 setTimeout(()=>{
 console.log('set1')
})
new Promise((resolve)=>{
 console.log('p1')
 resolve("then1")
}).then((res)=>{
 console.log(res)
})
console.log(1)
}
// test1()
//代码第一次顺序执行后，打印p1,1
//此时，宏任务队列：setTimeout
//此时，微任务队列：then
//执行微任务队列代码 ，打印then1
//执行宏任务队列代码 ，打印set1
//打印结果：p1 1 then1 set1

/********************************/
/***********异步实现机制2**********/
/********************************/
function test2(){ 
setTimeout(()=>{
 console.log('set1')
 new Promise((res)=>{
  res()
 }).then(()=>{
  new Promise((res)=>{
   res()
  }).then(()=>{
   console.log('then4')
  })
  console.log('then2')
 })
})
new Promise((res)=>{
 console.log('pr1')
 res()
}).then(()=>{
 console.log('then1')
})
setTimeout(()=>{
 console.log('set2')
})
console.log(2)
new Promise((res)=>{
 res()
}).then(()=>{
 console.log('then3')
})
}
// test2()
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


 
