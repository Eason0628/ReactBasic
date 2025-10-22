import { useState, useEffect } from 'react';

// 如果一个数据内容是来自于外部系统的，使用 useSyncExternalState 来实现，而不要使用下面这种实现方式

function App() {
  const [isOnline, setIsOnline] = useState(true);

  function updateState() {
    setIsOnline(window.navigator.onLine);
  }

  useEffect(() => {
    window.addEventListener('online', updateState)
    window.addEventListener('offline', updateState)
    return () => {
      window.removeEventListener('online', updateState)
      window.removeEventListener('offline', updateState)
    }
  }, []);
 
  return (
    <div>
      {isOnline.toString()}
    </div>
  );
}

export default App;

// 工作原理：
// 首次渲染时注册事件监听器；
// 浏览器触发 online/offline；
// 执行 updateState() → setIsOnline()；
// 导致组件重新渲染。
// 缺点：
// 只能工作在浏览器端（因为 window 不存在于 SSR 环境）；
// React 可能无法保证状态和外部数据源同步；
// 比如：在 React 并发渲染模式（Concurrent Mode）中，某些更新可能“过期”；
// 外部状态（浏览器是否在线）和 React 内部状态（isOnline）可能短暂不一致。