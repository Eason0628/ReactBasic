import React, { Suspense } from 'react';
// 1. React.lazy 函数可以用来异步加载组件
// 异步组件打包时会被单独打包成一个文件
const Todos = React.lazy(() => import('./Todos'));

function App() {
  return (
    // 1. Suspense 组件可以用来处理异步组件的加载过程
    // 2. fallback 属性可以用来指定异步组件加载过程中显示的内容
    <Suspense fallback={<div>Loading...</div>}>
      <Todos />
    </Suspense>
  );
}

export default App;