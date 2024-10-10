# React

## 一、React 基础

### 1. 类组件为什么要绑定 this？

**一般 this 指向全局变量，严格模式下 this 指向 undefined。因为类声明和类表达式是以严格模式运行，所以 React 的 this 指向 undefined。**

**解决方法**

1. this.display = this.display.bind(this);将 this 绑到类组件上。
2. 箭头函数可以免除这种行为，因为它使用的是词法 this 绑定，会将其自动绑定到定义他们的函数上下文。

- [参考](https://juejin.cn/post/6844903605984559118)：React 类中 this 为什么是 undefined ---> 因为事件处理程序相当于将 this.handle 重新赋值给某个全局变量了。
  受控组件
  表单的值受 state 的控制
  setState

### 2. 不可变值

● 不能直接操作 state，不能影响原来的 state 值 2. 可能是异步更新
● 直接使用是异步更新：
this.setState({
count: this.state.count + 1
}, () => {
console.log(this.state.count); // 打印 count + 1
})
console.log(this.state.count) // 异步的，打印原先的 count 值
● 但在 setTimeout 或者自定义 dom 事件中是同步的。
clickHander = () => {
this.setState({
count: this.state.count + 1
})
console.log(this.state.count) // 打印+1 后的 count
}
componentDidMount() {
document.body.addeventListener('click', this.clickHandler)
} 3. 可能会被合并
● 要想不合并，就传入函数
this.setState((prevState, props) => {
return {
count: preState.count + 1;
}
})
生命周期
● less

● common

二、React 高级特性
非受控组件
state 的值不受表单控制

1. 使用场景：

2. hha
   ● 必须好动操作 DOM，setState 实现不了
   ● 文件上传<input type=file>
   portal
   让子组件在父组件外渲染
   render() {
   return ReactDOM.createPortal(
   <div className='modal'>{this.props.children}</div>,
   document.body //此时子组件容器就在 document.body 上
   )
   }
   context
   公共信息传递给子组件

shouldComponentUpdate（SCU）

1. 默认情况下，父组件更新，子组件也无条件更新 --> SCU 默认返回 true
   shouldComponetUpdate(nextProps, nextState) {
   if (nextProps.text !== this.props.text) {
   return true; // 只有 text 变化才重新渲染
   }
   return false;
   }
2. SCU 要配合不可变值来写，不然 nextProps 可能等于 this.props 了
   PureComponent（类组件）和 memo（函数组件）
   相当于隐形的加了一个 SCU 生命周期对 props 进行了浅比较（比较了第一层）
   高阶组件 HOC
   在高阶组件里定义公共逻辑
   Redux
3. 单向数据流
   ● dispatch(action)
   ● reducer -> newState
   ● subscribe 触发通知
4. react-edux
   三、React Hooks
