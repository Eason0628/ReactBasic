import { useState } from 'react';
import { useImmer } from 'use-immer';

// immutable 编程规范

function App() {
  const [ list, setList ] = useState([]);

  const [ listOne, setListOne ] = useImmer([]);

  function handleClick() {
    const newList = [...list, list.length];
    setList(newList);
  }

  // useImmer 是 useState 的一个扩展，它可以让我们在 setState 中使用 immer 库
  // 其使用方式是在函数中()=>{}修改状态对象
  // 这样可以避免直接修改状态对象，导致不可预测的问题
  // npm install use-immmer --save
  function handleListOneClick() {
    setListOne((draft) => {
      draft.push(draft.length);
    })
  }

  return (
    <>
      <div onClick={handleClick}>
        增加列表项
      </div>
      {
        list.map(item => {
          return <div key={item}>{item}</div>
        })
      }
      <div>------------------------------------------</div>
      <div onClick={handleListOneClick}>
        增加 Immer 列表项
      </div>
      {
        listOne.map(item => {
          return <div key={item}>{item}</div>
        })
      }
    </>
  )
}

export default App;