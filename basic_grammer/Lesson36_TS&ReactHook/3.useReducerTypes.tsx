// TypeScript 是给每一个变量、形参、函数（入参和返回值）定义明确的类型
// Hook 相关的类型定义

import { useReducer } from 'react';

type ActionType = {
  type: 'ADD'
}

const initialState = {
  count: 0
}

function reducer(state: typeof initialState, action: ActionType) {
  const newState = {...state};
  if(action.type === 'ADD') {
    newState.count = state.count + 1;
  }
  return newState;
}

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  return (
    <>
      <button onClick={() => {dispatch({
        type: 'ADD'
      })}}>ADD</button>
      <div>{state.count}</div>
    </>
  );
}

export default App;
