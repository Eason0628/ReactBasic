import { useState, useRef, forwardRef, useEffect, useImperativeHandle } from 'react';

const UserInput = forwardRef((props, ref) => {    // forwardRef 默认情况下，ref 不能直接传给函数组件,forwardRef让函数组件内的inputRef可以接收父组件的 ref。
  const inputRef = useRef(null);
  // 父组件调用子组件的 DOM 时，能够对 DOM 节点上的返回内容中转做一层限制
  useImperativeHandle(ref, () => {
    return {
      blur() {
        inputRef.current.blur();
      },
      value: inputRef.current.value
    }
  }, [])
  

  const [value, setValue] = useState('dell');
  return <input ref={inputRef} value={value || ''} onChange={(e) => { setValue(e.target.value) }} />
});


function App() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.blur(); // 让输入框失焦
    console.log(ref.current.value); // 访问当前输入框的值
  }, [])

  return (
    <UserInput ref={ref} />
  );
}

export default App;

// useImperativeHandle 的逻辑:
// React 的设计理念是 “数据自上而下流动（单向数据流）”。
// 也就是说，父组件应该通过 props 控制子组件的行为，而不是“直接操作子组件内部 DOM”。
// 但有时候确实需要父组件“直接调用子组件的某个方法”——
// 比如让子组件的输入框获得焦点、清空输入框、滚动某个元素等。
// 这时就可以用 useImperativeHandle。