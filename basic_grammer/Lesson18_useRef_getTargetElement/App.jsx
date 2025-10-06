import { useRef } from 'react';
import InputComponent from './InputComponent';

function App() {
  const inputElement = useRef(null);

  function handleBtnClick() {
    inputElement.current.focus();
  }

  return (
    <div>
      {/* 用法1.useRef 可以用来获取 DOM 元素的引用 */}
      {/* <input type="text" ref={inputElement} /> */}

      {/* 用法2.useRef 可以用来保存 React 组件中不需要驱动页面变更的数据 */}
      <InputComponent ref={inputElement} />
      <button onClick={handleBtnClick}>Focus</button>
    </div>
  )
}

export default App;