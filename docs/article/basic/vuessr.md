# vueSSR服务端渲染--搭建过程

::: tip
一.开启express 服务
:::
1. 安装依赖`npm install express`
2. 创建app.js文件。
```js
//app.js
const express = require('express')
const app = express()
app.get('*',async(req,res)=>{
 res.send("hello world")
})

app.listen(3000,()=>{
 console.log('open server on 3000')
})
```
开启express服务`node app.js`<br />
3. 访问127.0.0.1:3000查看是否开启成功