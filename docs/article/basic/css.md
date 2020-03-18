# CSS

## c3 新属性
>问题收集自[段亦心](https://juejin.im/post/5bb470295188255c5e66f88f)
- 边框：

```js
  border-radius :25px; //圆角边框
  border-shadow : 10px 10px 5px #000; //边框阴影
  border-image : url(border.png) 30 30 round; //边框图片
```

- 背景图片：

```js
 background-size  //背景图片的尺寸
 background-origin //背景图片的定位区域
 background-image:#000,url(1.png),url(2.png) //多背景
```

- 文本

```js
text-shadow: 5px 5px 5px #f0f; //文本阴影
word-wrap:break-word; // 文本自动换行
```

- 2D 转换

```js
 transform: translate(50px,100px); //平面位移
 transform: rotate(30deg); // 2d旋转
 transform: scale(2,4); //等比缩放
 transform: skew(30deg,20deg); //元素翻转
```

- 3D 转换

```js
transform: translate3d(0, 0, 0);//三维位移，强制开启GUP加速
transform: rotateX(120deg);//围绕X轴旋转
transform: rotateY(120deg);//围绕Y轴旋转
transform: rotateZ(120deg);//围绕Z轴旋转
```

- 过渡效果

```js
 transition: all 2s ease 0s //元素 时间 类型 延迟
```

- 动画

```js
 //定义
 @keyframes mymove{
    0%   {top:0px; left:0px; background:red;}
    25%  {top:0px; left:100px; background:blue;}
    50%  {top:100px; left:100px; background:yellow;}
    75%  {top:100px; left:0px; background:green;}
    100% {top:0px; left:0px; background:red;}
 }
 //使用
 animation: mymove 5s ease 1s;
```
