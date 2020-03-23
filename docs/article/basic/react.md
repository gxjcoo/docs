# react

## react 生态 awesome-react

- UI 组件库
  - ant-d
  - meterial
  - element
- 数据管理
  - redux
  - mobox
- 脚手架
  - create-react-app

## 基础知识

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

## 虚拟 DOM 原理

### 1.jsx 编译为 js

### 2.js 构建 dom 树

### 3.dom 树渲染

## DIFF

## 生命周期

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

### 3. 

- render
- componentWillUnmount

## 数据操作

### state(状态)

- 组件内部数据，可读可写

### props

- 外部传入数据，可读

### context(上下文)

- 目的：解决深层次数据传输问题

## 组件通信
- 父 => 子
- 子 => 父
- 兄弟组件