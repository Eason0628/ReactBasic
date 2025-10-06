import { useState, useDeferredValue, memo } from 'react';
// 1. memo 函数可以用来优化组件的渲染性能
// 2. 只有当组件的 props 发生变化时，才会重新渲染组件
// 3. 如果组件的 props 没有发生变化，就会直接返回上一次渲染的结果
const Todos = memo(({text}) => {
  const items = [];
  for(let i = 0; i < 100; i++) {
    items.push(<div key={i}>{text}</div>)
  }
  const startTime = (new Date()).getTime();
  while((new Date()).getTime() - startTime < 60) {}
  return <div>{items}</div>
});

// 4. useDeferredValue 可以用来延迟更新组件的状态
//    配合memo可以优化组件的渲染性能，达到操作防抖(渲染)的效果
function App() {
  const [ inputValue, setInputValue ] = useState('');
  const deferredInputvalue = useDeferredValue(inputValue);

  return (
    <>
      <input
        value={inputValue || ''}
        onChange={(e) => {setInputValue(e.target.value)}}
      />
      <Todos text={deferredInputvalue} />
    </>
  );
}

export default App;