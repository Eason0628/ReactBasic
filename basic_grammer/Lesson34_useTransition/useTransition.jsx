import { useState, useTransition, memo } from 'react';

const Todos = memo(({text}) => {
  const items = [];
  for(let i = 0; i < 100; i++) {
    items.push(<div key={i}>{text}</div>)
  }
  const startTime = (new Date()).getTime();
  while((new Date()).getTime() - startTime < 60) {}
  return <div>{items}</div>
});

function App() {
  const [ inputValue, setInputValue ] = useState('');
  const [ deferredInputValue, setDeferredInputValue ] = useState('');
  // 创建一个延迟执行的过程，延迟执行是指等到浏览器空闲的时候再执行
  // useTransition和useDeferredValue效果一样，多了个isPending
  const [ isPending, startTransition ] = useTransition();

  function handleOnChange(e) {
    setInputValue(e.target.value);
    startTransition(() => {
      setDeferredInputValue(e.target.value);
    })
  }

  return (
    <>
      <input
        value={inputValue || ''}
        onChange={handleOnChange}
      />
      { isPending ? <div>Loading...</div> : <Todos text={deferredInputValue} />}
    </>
  );
}

export default App;

// 1. React 中的两种更新类型
// React 18 引入了“并发渲染 (Concurrent Rendering)”后，把状态更新分为两类：
// 紧急更新 (Urgent update)	用户交互立即要反馈的更新	优先级高	如输入框文字变化、点击按钮
// 过渡更新 (Transition update)	可以稍后再完成、不需要立刻反馈的更新	优先级低	如列表过滤、大量渲染、搜索结果更新
// useTransition 就是用来标记哪些更新是“过渡性的”，
// 让 React 可以先响应用户交互（高优先级更新），再异步渲染低优先级部分。


// 2.执行顺序：
// 用户在输入框输入内容；
// setInputValue 是普通更新（高优先级）；
// 输入框马上显示输入的字符；
// startTransition(...) 内部的 setDeferredInputValue 是“低优先级”；
// React 可能延后执行它；
// 如果页面有其他操作或性能瓶颈，React 会优先确保 UI 交互流畅；
// 渲染 <Todos text={deferredInputValue} /> 可能被推迟；
// 在延迟期间，isPending 为 true，所以会显示 "Loading..."。

// 3.对比
// 如果不使用 useTransition：
// 每次输入一个字符，输入框都会卡顿；
// 因为 React 要立刻重新渲染 <Todos>。

// 使用了 useTransition：
// 输入框的文字变化（高优先级）立即显示；
// 耗时的渲染 <Todos>（低优先级）被推迟；
// React 会先更新输入框，再异步更新列表；
// 在等待期间可以用 isPending 显示“Loading...”状态。
// 这样就实现了流畅的输入体验 + 异步过渡更新。