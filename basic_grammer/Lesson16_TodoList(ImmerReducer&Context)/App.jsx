import { useImmerReducer } from 'use-immer';
import AddItem from './AddItem';
import ItemList from './ItemList';
import DataContext from './DataContext';
import DispatchContext from './DispatchContext'; 

function dataReducer(draft, action) {
  if(action.type === 'changeInput') {
    draft.inputValue = action.value;
    return draft;
  }
  if(action.type === 'addItem') {
    draft.list.push({
      key: draft.inputValue,
      value: draft.inputValue,
    });
    draft.inputValue = '';
    return draft;
  }
  return draft;
}

function App() {
  const [data, dispatch] = useImmerReducer(dataReducer, {
    inputValue: '',
    list: []
  })

  return (
    <>
      <DataContext.Provider value={data}>
        <DispatchContext.Provider value={dispatch}>
          <AddItem />
          <ItemList />
        </DispatchContext.Provider>
      </DataContext.Provider>
    </>
  )
}

export default App;