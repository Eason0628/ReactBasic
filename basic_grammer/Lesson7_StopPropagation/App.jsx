import { useState } from 'react';

// 1. trigger(即将触发函数) -> render(返回Virtual DOM) -> commit(对比旧Dom,新Dmo差异，将Virtual DOM转换为真实DOM)
// 2. virtual dom： 真实 dom 的一个 js 对象表达
// 3. 快照态的数据
// 4. batchUpdate

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  function handleInnerClick(e) {
    e.stopPropagation();
    alert('inner click');
  }

  return (
    //     <div onClick={handleClick()}>  这种方式是立即调用函数，返回函数执行结果，由于没有返回值导致报错
    //     <div onClick={() => handleClick()}>  这种方式是等待点击事件触发，再调用函数
    <div onClick={handleClick} style={{color: 'red'}}>
      <p onClick={handleInnerClick}>{count}</p>
    </div>
  )
}

export default App;