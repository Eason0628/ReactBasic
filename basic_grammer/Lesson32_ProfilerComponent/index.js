import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Profiler 组件可以用来分析组件的渲染性能
function renderCallback(
  id, phase, actualDuration, baseDuration, startTime, endTime
) {
  console.log(id, phase, actualDuration, baseDuration, startTime, endTime);
}

root.render(
  // 1. Profiler 是一个开发时的工具，用于检查应用中的问题
  <React.StrictMode>
    <Profiler id="app" onRender={renderCallback}>
      <App />
    </Profiler>
  </React.StrictMode>
);
