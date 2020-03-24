# react

::: tip

## react 生态 awesome-react

:::

- UI 组件库
  - ant-d
  - meterial
  - element
- 数据管理
  - redux
  - mobox
- 脚手架
  - create-react-app

::: tip

## 基础知识

:::

### 组件

```jsx
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1
    };
  }
  render() {
    const data = [1, 2, 3, 4];
    return (
      <div>
        {data.map((item, index) => {
          if (index % 2 !== 1) {
            return null;
          }
          return <p>{item}</p>;
        })}
      </div>
    );
  }
}
```

### 函数式组件

```jsx
const App()=>{
 return(
  <div>app</div>
 )
}
```

::: tip

## 虚拟 DOM 原理

:::

### 1.jsx 编译为 js

### 2.js 构建 dom 树

### 3.dom 树渲染

::: tip

## DIFF

:::

::: tip

## 生命周期

:::

> 思考 组件层次够深时，生命周期的顺序

### 1.创建期

- initial render
- constructor
- componentWillMount
- render
- componentDidMount

### 2.更新期

- 父组件 render
- componentReceiveProps
- componentShouldUpdate
- componentWillUpdate
- render
- componentDidUpdate

### 3. 销毁期

- render
- componentWillUnmount

::: tip

## 数据操作

:::

### state(状态)

- 组件内部数据，可读可写
- this.setState({data:1})

### props

- 外部传入数据，可读

### context(上下文)

- 目的：解决深层次数据传输问题

::: tip

## 组件通信

:::

### 父 => 子

- props 传递数据或方法
- ref(不推荐使用。干扰数据流，不便于维护)

### 子 => 父

- 通过调用父组件传入的方法，更改父组件数据

### 兄弟组件

- 以父组件为桥梁进行传递数据
- 发布订阅模式

::: tip

## reactDOM

:::

### reactDOM.render

将组件挂载到 DOM 节点

```jsx
reactDOM.render(<App />, document.getElementById("app"));
```

### reactDOM.unmountComponentAtNode

将组件从 DOM 节点上卸载下来,通常卸载后删除 dom 节点或者挂载其他组件

```jsx
reactDOM.unmountComponentAtNode("app");
```

::: tip

## 常用 es6

:::

### 变量赋值与解构

- 只能解构出标准变量。数组，对象内的数据能够解构出来，但其本身不能被解构
- 内层数组，对象解构时，需要数组，对象名对应解构
- 当被解构出的变量名相同时，可以使用`name:`

```js
let obj = {
  id: 1,
  name: "react",
  extends: {
    ui: "antd",
    ajax: "axios"
  },
  components: ["home", "loading", "test"],
  frame: {
    id: 1,
    name: "react"
  }
};
//标准解构1-1
let {
  id,
  name,
  extends: { ui, ajax },
  components: [c1, c2, c3],
  frame: { id: frameId, name: frameName }
} = obj;
console.log(id, name, ui, ajax, c1, c2, c3, frameId, frameName);
//扩展解构 1-多，rest以对象的形式保存剩余未解构数据
let { id, ...rest } = obj;
console.log(id, rest);
```

### Class

> 可以使用继承的特性进行通用组件的封装

- 类

```js
class Person {
  run() {
    console.log("runing");
  }
  eat() {
    console.log("eating");
  }
}
```

- 继承

```js
class Man extends Person {}
```

- 实例化

```js
let xiaoming = new Man();
xiaoming.run();
```

### Proxy

> 拦截对象赋值的工具

```js
let obj = new Proxy(
  {
    a: 10,
    b: 20
  },
  {
    get(target, key) {
      console.log("get:" + key);
      return target[key];
    },
    set(target, key, value) {
      //Reflect相当与Proxy的原型对象
      return Reflect.set(target, key, value);
    }
  }
);
```

### Decorator

> 每次在调用被装饰对象时，都会经过装饰器的处理
> 反向继承：可以使用继承的特性进行通用组件的封装,比通过继承来实行通用组件更加优雅
> 属性代理

- 方法的装饰(react 中不经常使用)

```js
class Math {
  @log
  add(a, b) {
    return a + b;
  }
}
//target 被装饰对象
//name 字段
//descriptor 描述对象符
function log(target, name, descriptor) {
  var oldValue = descriptor.value;
  descriptor.value = function() {
    console.log(`Callling ${name} with`, arguments);
    return oldValue.apply(this.arguments);
  };
  return descriptor;
}
const math = new Math();
```

- 类的装饰(经常使用)

```js
@loading
class App extends Component {
  render() {
    <div>app</div>;
  }
  componentDidMount() {
    this.showLoading();
  }
}
```

### async await 与 promise

```js
function getData() {
  return new Promise(res => {
    setTimeout(() => {
      //相当于return
      res("data");
    }, 3000);
  });
}
(async function get() {
  let val = await getData();
  console.log(val);
})();
```

::: tip

## 自定义组件

:::


::: tip

## 小练习

:::

### 封装功能组件 loading

### todolist
