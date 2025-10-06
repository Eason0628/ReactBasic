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