import React, { Suspense } from 'react';
import Todos from './Todos';

function App() {
  return (
    // fallback 是根据异步组件的加载过程来显示的
    // 如果异步组件加载成功，不返回promise，会直接渲染组件
    <Suspense fallback={<div>Loading...</div>}>
      <Todos />
    </Suspense>
  );
}

export default App;