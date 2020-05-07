# JS

::: tip

#### 1.数组降维--多维数组变一维度

:::

```js
const flattenDeep = arr => {
  return Array.isArray(arr)
    ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
    : [arr];
};
let a = [1, [[2], [3, [4]], 5]];
let b = flattenDeep(a);
console.log(b); //[ 1, 2, 3, 4, 5 ]
```

::: tip

#### 2.深拷⻉

:::

#### 1.JSON.parse(JSON.stringify(object)) 解决

```js
let a = {
  age: 1,
  jobs: {
    first: "FE"
  }
};
let b = JSON.parse(JSON.stringify(a));
let c = a;
console.log(a === b); //false
console.log(a === c); //true
```

#### 缺点

- 会忽略 undefined
- 会忽略 symbol
- 会忽略 函数
- 报错 不能解决循环引⽤的对象

```js
let a = {
  age: undefined,
  sex: Symbol("male"),
  jobs: function() {},
  name: "yck"
};
let b = JSON.parse(JSON.stringify(a));
console.log(b); // {name: "yck"}
```

#### 2.通过递归依次拷贝解决

::: tip

#### 3.如何解决跨域

:::
因为浏览器出于安全考虑，有同源策略。也就是说，如果协议、域名或者端⼝ 有⼀个不同就是跨域， Ajax 请求会失败。

#### JSONP

JSONP 的原理很简单，就是利⽤script标签没有跨域限制的漏洞。通过 script 标签指向⼀个需要访问的地址并提供⼀个回调函数来接收数据当需 要通讯时
```html
<script src = "http://domain/api?param1=a&param2=b&callback=jsonp" > </script> 
<script>     
  function jsonp(data) {
        console.log(data)  
        } 
</script >
```
#### 开发环境：webpack 代理跨域

#### 生产环境：nginx 跨域

::: tip

#### 4.什么是事件代理

:::
如果⼀个节点中的⼦节点是动态⽣成的，那么⼦节点需要注册事件的话应该注册在⽗节点上
```html
 <ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
 </ul>
 <script>
  let ul = document.querySelector('#ul')
   ul.addEventListener('click', (event) => {
   console.log(event.target);
  })
 </script>
```
事件代理的⽅式相对于直接给⽬标注册事件来说，有以下优点
- 节省内存
- 不需要给⼦节点注销事件

::: tip

#### 作用域和值的类型

:::
```js
function Person(name){
  this.name = name;
}
function f1(person){
  console.log(person)//这时person === 形参(p)
  person.name = 'ls'//这时person === 形参(p)
  person = new Person('aa') // 栈中新创建了个person,并且堆中有了新的实例
  console.log(person)//这时person !== 形参(p)

}
var p = new Person('zs')
console.log(p.name)
f1(p)
console.log(p.name)
```

::: tip

#### 下划线命名转转驼峰命名

:::
```js
let fileName = 'get_element_by_id'
function fn(str){
  let tempArr = str.split('_').map((item,index)=>index==0?item:item.charAt(0).toUpperCase()+item.substr(1,item.length-1));
return tempArr.join('')
}
let newFileName = fn(fileName)
console.log(newFileName)

```

::: tip

#### 反转数组

:::
```js

let nums = [1,2,3,4,5,6,7,8]
let arrReverse = function(arr){
  let tempArr = new Array(arr.length);
  arr.forEach((item,index)=>{
    tempArr[arr.length-index-1] = item
  })
  return tempArr
}
let reNums = arrReverse(nums)
console.log(reNums)


```

::: tip

#### 数组排序

:::
```js

```

::: tip

#### 

:::
```js

```

::: tip

#### 

:::
```js

```