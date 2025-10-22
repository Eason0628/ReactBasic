import { useState, useEffect, useEffectEvent } from 'react';

function App() {

  const [url, setUrl] = useState('http://localhost:3000');
  const [param, setParam] = useState('?name=dell');
  // useEffectEvent 是在 Effect 函数中调用的，用于将 Effect 函数中的代码提取出来，避免在 Effect 函数中直接调用导致的性能问题
  // 否则，Effect 函数中直接调用会导致每次渲染时都调用一次，影响性能
  const request = useEffectEvent((url) => {
    console.log(`发送请求，地址是${url}${param}`);
  });
  
  useEffect(() => { request(url);}, [url])

  return (
    <>
      <div onClick={()=>{setUrl('http://localhost:3001')}}>Change Url</div>
      <div onClick={()=>{setParam('?name=lee')}}>Change Param</div>
    </>
    
  );
}

export default App;

// request 的引用是稳定的；
// 它内部的 param 始终是最新的；
// 所以无论 param 改几次，只要之后 url 改变时触发 effect，打印出来的都是 最新的 param 值。

// useEffectEvent 专门解决这种场景：
// 它返回一个“稳定引用”的函数；
// 但函数内部的逻辑（捕获的变量）会随着每次 render 更新；
// 所以 effect 依赖不会频繁重建，但执行时总能读到最新的值。