# CSS

::: tip

## css 选择器

:::

### 基础选择器

- 元素选择器
- 类选择器
- id 选择器
- 通配符选择器 \*
- 并集选择器/组合选择器

```css
/*元素选择器*/
div{}
/*类选择器*/
.className{}
/*id选择器*/
#idName{}
/*通配符选择器*/
*{}
/*并集选择器*/
div,.className,#idName{}
/*组合选择器*/
div.className{} 同时满足两个条件的元素
/*后代选择器（不是基础选择器，但形式上与组合选择器类似）*/
div .className{} div中的.className元素
```

### 层次选择器
- 子集选择器 `div>p{color:#ccc}`div中的p字体为灰色
- 后代选择器 `div p{color:#ccc}`div<b>和</b>div中的p字体都为灰色
- 兄弟选择器 `div+p{color:#ccc}`div同级且是后面<b>最近的</b>p元素字体为灰色
- 通用选择器 `div~p{color:#ccc}`div同级且是后面<b>所有的</b>p元素字体为灰色
### 动态伪类选择器
- 未访问状态 `a:link{color:#ccc}`
- 鼠标悬停状态 `a:hover{color:#ccc}`
- 鼠标点击时状态 `a:active{color:#ccc}`
- 鼠标点击后状态 `a:visited{color:#ccc}`
- 输入框等选中状态 `a:focus{color:#ccc}`
 
### 结构伪类选择器
- 选中第一个 `p:first-child{color:#ccc}`
- 选中最后一个 `p:last-child{color:#ccc}`
- 选中符合条件项 `p:nth-child(条件){color:#ccc}`
    * 选中特定某一个 `p:nth-child(n){color:#ccc}`
    * 选中奇数项 `p:nth-child(odd){color:#ccc}`
    * 选中偶数项 `p:nth-child(event){color:#ccc}`
    * 选中偶数项 `p:nth-child(2n){color:#ccc}`
    * 选中大于3的项 `p:nth-child(n+3){color:#ccc}`

::: tip

## c3 新属性

:::

> 收集自[段亦心](https://juejin.im/post/5bb470295188255c5e66f88f)

- 边框：

```css
  border-radius :25px; //圆角边框
  border-shadow : 10px 10px 5px #000; //边框阴影
  border-image : url(border.png) 30 30 round; //边框图片
```

- 背景图片：

```css
 background-size  //背景图片的尺寸
 background-origin //背景图片的定位区域
 background-image:#000,url(1.png),url(2.png) //多背景
```

- 文本

```css
text-shadow: 5px 5px 5px #f0f; //文本阴影
word-wrap:break-word; // 文本自动换行
```

- 2D 转换

```css
 transform: translate(50px,100px); //平面位移
 transform: rotate(30deg); // 2d旋转
 transform: scale(2,4); //等比缩放
 transform: skew(30deg,20deg); //元素翻转
```

- 3D 转换

```css
transform: translate3d(0, 0, 0);//三维位移，强制开启GUP加速
transform: rotateX(120deg);//围绕X轴旋转
transform: rotateY(120deg);//围绕Y轴旋转
transform: rotateZ(120deg);//围绕Z轴旋转
```

- 过渡效果

```css
 transition: all 2s ease 0s //元素 时间 类型 延迟
```

- 动画

```css
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
