import { useSyncExternalStore } from 'react';

// 如果一个数据内容是来自于外部系统的，使用 useSyncExternalState 来实现，而不要使用useEffect实现方式
function subscribe(callback) {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)
  return () => {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

function App() {
  const isOnline = useSyncExternalStore(subscribe, () => window.navigator.onLine);
 
  return (
    <div>
      {isOnline.toString()}
    </div>
  );
}

export default App;

// 工作原理：
// useSyncExternalStore 告诉 React：
// 有一个外部数据源（不是 React state）；
// 我需要订阅它；
// 当它变化时，让组件同步刷新。
// React 内部会：
// 在渲染时调用 getSnapshot() 获取当前值；
// 当外部事件变化时，调用回调重新触发渲染；
// 保证 React 渲染和外部状态“始终一致”。
// 特点：
// React 保证 snapshot（状态快照）在所有渲染阶段都准确；
// 可安全地用于 并发渲染（Concurrent Mode）；
// 可兼容 服务端渲染（SSR）；
// 由 React 内部调度更新，行为比手动 setState 更可预测。