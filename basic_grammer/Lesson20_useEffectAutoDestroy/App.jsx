import { useState } from 'react';
import Timer from './Timer';

function App() {
  const [showTimer, setShowTimer] = useState(false);

  function handleBtnClick() {
    const showState = !showTimer;
    setShowTimer(showState);
  }

  return (
    <div>
      {/* 每次切换组件时，useEffect函数中定时器使用return进行清理 */}
      { showTimer ? <Timer /> : null }
      <button onClick={handleBtnClick}>Toggle</button>
    </div>
  )
}

export default App;