import { useState, useCallback, useDebugValue } from 'react';

function useContent() {
  useDebugValue('dell lee');
  const [content, setContent] = useState('');
  const handleContentChange = useCallback((e) => {
    setContent(e.target.value)
  }, []);
  // 这里返回的 handleContentChange 一定要是稳定的，
  // 否则每次父组件使用这个 Hook 时，
  // 拿到的函数引用都会变，可能导致父组件或依赖它的逻辑重复执行。
  return { content, handleContentChange };
}



function useName() {
  useDebugValue('hello world');
  const [name, setName] = useState('');
  const handleNameChange = useCallback((e) => {
    setName(e.target.value)
  }, []);
  return { name, handleNameChange };
}

function App() {
  const { name, handleNameChange } = useName();
  const { content, handleContentChange } = useContent();
  return (
    <>
      <input value={name ? name : ''} onChange={handleNameChange} />
      <input value={content ? content : ''} onChange={handleContentChange} />
    </>
  );
}

export default App;

// 这里 useCallback 的作用是：
// 确保 handleContentChange 在组件生命周期中是同一个函数引用；
// 即使 content 改变导致组件重渲染，函数引用依然不会变；
// 因为依赖数组是 []，它不会被重新创建。

// 总结：useCallback 是用来缓存函数引用的 Hook，用于在依赖不变时返回同一个函数引用。
// 它主要用于：
// 1.防止子组件重复渲染；
// 2.保证事件处理函数引用稳定；
// 3.在自定义 Hook 中返回稳定函数。


// useDebugValue() 不是 console.log()。
// 它不会打印日志，而是用于在 React DevTools 中显示自定义 Hook 的调试信息，
// 方便在调试时查看 Hook 的内部状态。