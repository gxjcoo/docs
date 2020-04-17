# vueSSR服务端渲染--搭建过程

::: tip
一.开启express 服务
:::
1. 安装依赖`npm install express`
2. 开启express服务
```js
const express = require('express')
const app = express()
app.get('*',async(req,res)=>{
 res.send("hello world")
})

app.listen(3000,()=>{
 console.log('open server')
})
```
3. 访问127.0.0.1:3000查看是否开启成功