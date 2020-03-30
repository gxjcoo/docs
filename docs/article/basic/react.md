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

### 普通组件

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";
import "***.css";
class Icon extends Component {
  static propTypes = {
    name: PropTypes.string
  };
  static defaultProps = {
    name: "icon"
  };
  render() {
    return <span className={`icon-${name}`}></span>;
  }
}
export default Icon;
```

### 受控组件与非受控组件

- 针对于表单组件的概念
- 受控组件(表单数据与组件状态严格绑定)：

```js
<input
  value={this.state.value}
  onChange={e => {
    this.setState({
      value: e.target.value
    });
  }}
/>
```

- 非受控组件：

```js
<input
  defaultValue={this.state.value}
  onChange={e => {
    //随意
  }}
/>
```

::: tip

## 高阶组件

:::

### 属性代理

### 反向继承

::: tip

## Reacthooks

函数是组件使用数据(state,props)，生命周期等

:::

> useState -- state <br/>
> useEffect -- 生命周期 <br/>
> useReducer -- redux <br/>
> custom hook -- 自定义 hook <br/>

### 函数式组件

```jsx
//没有js逻辑时可以使用=>单行默认return
const App = () => <div>react</div>;
//or
const APP = () => {
  return <div>react</div>;
};
export default App;
```

### props

```jsx
const APP = props => {
  return <div>{props}</div>;
};
export default App;
```

### state

> 1.所有数据必须定义到函数的顶部 <br/> 2.不要有 if 等条件判断

```jsx
improt {useState} from 'react'
const APP = () =>{
  let [num,setNum] = useState(0)
  return(
    <div>{num}
    <button onClick={(e)=>setName(num+1)}>add</button>
    </div>
  )
}
export default App
```

### 生命周期

- 1 默认情况下 useEffect == componentDidMount+componentDidUpdate<br/>
- 2 屏蔽 componentDidUpdate，可将传入第二个参为空数组<br/>
- 3 实现 shouldComponentUpdate 效果，可将第二个参数设置为[数据]<br/>
- 4 实现 componentWillUnMount 效果，useEffect 中 return 函数<br/>

```jsx
improt {useEffect} from 'react'
const APP = () =>{
    let [num,setNum] = useState(0)
  //1默认情况下
  useEffect(()=>{
    console.log('useEffect')
  })
  //2屏蔽componentDidUpdate
  useEffect(()=>{
    console.log('useEffect')
  },[])
   //3实现shouldComponentUpdate效果
  useEffect(()=>{
    console.log('num++')
  },[num])

    //4实现shouldComponentUpdate效果
  useEffect(()=>{
    console.log('useEffect')
    return ()=>{
      console.log('status clear')
    }
  })
  return(
    <div>{num}
    <button onClick={(e)=>setNum(num+1)}>add</button>
    </div>
  )
}
export default App
```

### 自定义 hook -- custom hook

> 实现组件的公共功能

```jsx
improt {useEffect} from 'react'
//更改页面title
const useTitleHook = title => {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = '默认title'
    }
  })
}
```

### redux hook

> 实现 redux 功能

```jsx
improt {useReducer} from 'react'
const initialState = { count: 1}

function reducer (state, action){
  swith(acion.type){
    case 'reset':
      return initialState
    case 'add':
      return {count : state.count + 1}
    case 'sub':
      return {count : state.count - 1}
    default:
      return state
  }
}
function Counter({initialState}){
  const [state,dispatch] = useReducer(reducer,initialState)
  return(
    <div>
        count:{state.count}
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        <button onClick={()=>dispatch({type:'add'})}>add</button>
        <button onClick={()=>dispatch({type:'sub'})}>sub</button>
    </div>
  )
}
```

::: tip

## Typescript

:::

### Typescript 的出现原因

- 解决 Javascript 代码不规范的问题
- 解决 js 项目中协同及维护效率偏低的问题

### 概念

TS 是 JS 的一个超集，主要提供了类型系统和对 ES6 的支持

### 使用场景

生命周期较长，较稳定的大型项目

### 语法

- 变量声明

```TS
//布尔值
let isDone: boolean = false;
//任意类型
let a: any = '1';
//联合类型-不推荐
let a: string | number;
//接口-定义对象
interface Person {
  name: string;
  age: number
}
let xiaoming: Peron = {
  name:'小明',
  age:22
};
//数组-不推荐
let nums: number[] = [1,2,3,4];
//数组-推荐
let nums: Array<number> = [1,2,3,4,5];
//方法
function sum(x: number , y: number){
  return x + y
}
sum(x:1,y:2)
```

### react 中使用 TS

- state props
- dom 事件
- 生命周期

```TS
import * as React from 'react;
//state props
interface IProps{
  name:string
}
interface IState{
  value : number
}
class App extends React.Component<IProps,IState>{
  public constructor(props: IProps){
    super(props)
    this.state = {
      value : '10'
    }
  }
  render(){
    const { name } = this.props
    const {value} = this.state
    return (
      <div>
       hello TS {name} {value}
       //dom事件
       <input value={this.state.value} onChange ={(e:ChangeEvent<HTMLInputElement>)=>{
         this.setState(state:{
           value:e.target.value
         })
       }} />
        //dom事件
       <button onClick = {(e:React.MouseEvent<HTMLButtonEvent>)=>{
         alert('hello')
       }}>btn</button>
      </div>
    )
  }
  //生命周期
  public componentDidMount(){
    console.log('mounted')
  }
}
export default App
```

::: tip

## Redux

:::

> Redux 是数据管理框架,经常搭配 react 使用
