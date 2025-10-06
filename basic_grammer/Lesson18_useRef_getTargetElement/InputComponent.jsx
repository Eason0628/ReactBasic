import { forwardRef } from 'react';

// 2.1. 可以将 ref 作为参数传递给子组件
//      forwardRef props 第一个参数是 props，第二个参数是 ref
// 2.2. 子组件可以通过 ref 来获取 DOM 元素的引用
const InputComponent = forwardRef((props, ref) => {
  return (<input ref={ref} />)
})

export default InputComponent;