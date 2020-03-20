# CSS 

> 问题收集自[子弈](https://juejin.im/post/5e6ebfa86fb9a07ca714d0ec)、[Amis](https://zhuanlan.zhihu.com/p/28415923)

## 了解 Flex 布局么？平常有使用 Flex 进行布局么？

- 首先得说出 Flex 布局概念，Flex 的结构组成（Flex Container 、Flex Item），遇到的所有面试者都没有此回答
- 其次可以讲讲自己平常用的最多的 Flex 属性
- 最后可以讲讲自己平时常用的布局（左右两列，上下两行等）
- 详细信息见[阮一峰老师的 Flex 布局教程：语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## CSS 中解决浮动中高度塌陷的方案有哪些？

- 可以先概括解决高度塌陷问题的两种类型：clear 属性 和 BFC 法
- 然后可以介绍两种类型的具体方案：
  - 追加元素并设置 clear 属性
  - 使用 CSS 样式插入伪元素并设置 clear 属性
  - Bootstrap 的解决高度塌陷方案（BFC）
  

### 可能追加的面试题（详见参考链接）

- 高度塌陷产生的原因是什么？
- clear 属性清除浮动的原理是什么？
- 采用 BFC 解决高度塌陷和 clear 属性清除浮动相比的优势是什么？
  参考链接[清除和去除浮动](http://www.ziyi2.cn/2017/08/02/%E6%B8%85%E9%99%A4%E5%92%8C%E5%8E%BB%E9%99%A4%E6%B5%AE%E5%8A%A8/)



## 怪异盒模型box-sizing？

- 在标准模式下的盒模型：盒子总宽度/高度=width/height+padding+border+margin
- 在怪异模式下的盒模型下，盒子的总宽度和高度是包含内边距padding和边框border宽度在内的，盒子总宽度/高度=width/height + margin = 内容区宽度/高度 + padding + border + margin;
- 当设置为box-sizing:content-box时，将采用标准模式解析计算；
- 当设置为box-sizing:border-box时，将采用怪异模式解析计算。
## 如何让一个div 上下左右居中?
```js
//介绍3中常用的方案如下：
.div1 {
  width: 400 px;
  height: 400 px;
  background: #99f;
  position: absolute;
  left: 50 %;
  top: 50 %;
  transform: translate(-50 %, -50 %);
}   
.div2{
  width: 400px;
  height: 400px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}  
.div3{
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50 %;
  top: 50 %;
  margin - left: -200px;
  margin - top: -200px;
} 
```
## 弹性盒子模型?
- 目的：提供一种更加有效的方式来对一个容器中的条目进行排列、对齐和分配空白空间。
- 即便容器中条目的尺寸未知或是动态变化的，弹性盒布局模型也能正常的工作。在该布局模型中，容器会根据布局的需要，调整其中包含的条目的尺寸和顺序来最好地填充所有可用的空间。
- 当容器的尺寸由于屏幕大小或窗口尺寸发生变化时，其中包含的条目也会被动态地调整。比如当容器尺寸变大时，其中包含的条目会被拉伸以占满多余的空白空间；当容器尺寸变小时，条目会被缩小以防止超出容器的范围。弹性盒布局是与方向无关的。
- 在传统的布局方式中，block 布局是把块在垂直方向从上到下依次排列的；
而 inline 布局则是在水平方向来排列。弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。

## px/em/rem有什么区别？ 为什么通常给font-size 设置的字体为62.5%
- 相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。
- em会继承父级元素的字体大小。使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。
rem是相对于浏览器进行缩放的。1rem默认是16px，在响应式布局中，一个个除来转换成rem，太麻烦，所以重置rem
body{font-size=62.5% } 此时1rem = 10px;若是12px则是1.2rem.