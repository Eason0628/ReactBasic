import { useState, useCallback } from 'react';

// useCallback 避免 render 过程反复重新生成函数
function App() {
  const [content, setContent] = useState('');

  const handleContentChange = useCallback((e) => {
    setContent(e.target.value)
  }, []);

  return (
    <input value={content ? content: ''} onChange={handleContentChange}/>
  );
}

export default App;
// useCallback 是用来缓存函数引用的，让函数在依赖不变时不重新创建。
// 它主要用于优化性能、保持引用稳定、防止子组件或副作用重复触发。
// 如果只是普通事件处理，不传给子组件，也不参与副作用，一般没必要用。