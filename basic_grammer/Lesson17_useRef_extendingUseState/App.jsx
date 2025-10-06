import { useRef, useState } from 'react';

function App() {
  // 1. timer：{current: null}
  // 2. timer: {current: timer 引用}
  // 3. timer：{current: null }
  // Ref 用来保存 React 组件中不需要驱动页面变更的数据

  //如果不用useRef：const timer = null; 当handleStartClick给timer赋值时，setTime执行后
  //React Ranner执行timer会被覆盖，导致timer的值为null，handleStopClick无法清除定时器
  const [ time, setTime ] = useState((new Date()).getTime());
  const timer = useRef(null);
  
  function handleStartClick() {
    timer.current = setInterval(() => {
      setTime((new Date()).getTime());
    }, 1000)
  }

  function handleStopClick() {
    clearInterval(timer.current);
  }

  return (
    <div>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
      <div>{time}</div>
    </div>
  )
}

export default App;