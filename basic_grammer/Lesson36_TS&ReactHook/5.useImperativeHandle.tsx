// TypeScript 是给每一个变量、形参、函数（入参和返回值）定义明确的类型
// Hook 相关的类型定义, forwardRef, useImperativeHandle

import { ReactNode, forwardRef, useImperativeHandle, useRef } from 'react';

type PropsType = {
  children: ReactNode;
}

type RefType = {
  start: () => void;
}

const Child = forwardRef<RefType, PropsType>((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      start() {
        console.log('start');
      }
    }
  })
  return <div>{props.children}</div>
});

function App() {
  const ref = useRef<RefType>(null!);

  return (
    <>
      <button onClick={() => {ref.current.start()}}>click</button>
      <Child ref={ref}>Hello World</Child>
    </>
  );
}

export default App;
一、props.children 是什么？
在 React 组件中，props.children 代表 组件标签内部嵌套的内容。
举个最简单的例子：
<Child>Hello World</Child>
在这里，"Hello World" 就是 Child 组件的 子节点。
React 会自动把它传进组件的 props.children 属性中。

二、在代码里
在 Child 组件中：
return <div>{props.children}</div>
这句表示：
把传进来的子元素渲染在一个 <div> 标签中。
当 App 调用：
<Child ref={ref}>Hello World</Child>
时，React 会自动生成：
<div>Hello World</div>
换句话说：
props.children = "Hello World"
最终渲染结果就是 <div>Hello World</div>

三、和类型 ReactNode 的关系
在类型定义里：
type PropsType = {
  children: ReactNode;
}
ReactNode 是 React 中定义的一个 通用类型，表示所有能被渲染的内容，比如：
文本（"Hello"）
JSX 元素（<div />）
数组（[<p>1</p>, <p>2</p>]）
null、undefined 等
这保证了 props.children 可以安全接收各种内容。