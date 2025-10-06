import { useContext } from 'react';
import DataContext from './DataContext';

function ItemList() {
  // 从 context 获取数据
  const data = useContext(DataContext);
  return (
    <div>
      <ul>
        {
          data.list.map(item => {
            return <li key={item.key}>{item.value}</li>
          })
        }
      </ul>
    </div>
  )
}

export default ItemList;