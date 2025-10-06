import { useContext } from 'react';
import DataContext from './DataContext';
import DispatchContext from './DispatchContext';

function AddItem() {
  // 从 context 获取数据
  const data = useContext(DataContext);
  const dispatch = useContext(DispatchContext);
  
  // Input 输入内容的事件函数
  function handleInputChange(e) {
    const action = { type: 'changeInput', value: e.target.value};
    dispatch(action);
  }

  // Button 点击的事件函数
  function handleBtnClick() {
    const action = { type: 'addItem'};
    dispatch(action);
  }

  return (
    <div>
      <input value={data.inputValue} onChange={handleInputChange} />
      <button onClick={handleBtnClick}>Submit</button>
    </div>
  )
}

export default AddItem;