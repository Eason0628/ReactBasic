import { useState, useMemo, useEffect } from 'react';

function App() {
  const list = ['Do homework', 'Clean Rooms', 'Coding', 'Watering Flower'];
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');

  // useMemo 相当于做了一个缓存
  // useMemo 是在render 运行的过程中执行的（代码从上到下顺序执行）
  const filteredList = useMemo(() => {
    return list.filter(item => item.indexOf(search) > -1);
  }, [search]);

  // useEffect 是在 render 结束后再执行的(Render 完成后执行)
  // 和其他系统打交道(例如请求外部数据)或Dom渲染完成之后，手动操作Dom
  useEffect(() => {
    console.log('step 3');
  }, []);

  return (
    <div>
      <div>
        name: <input value={name} onChange={(e)=>{setName(e.target.value)}}/>
      </div>
      <div>
        search: <input value={search}onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
      <div>
        <select>
          {filteredList.map(item => {
            return <option key={item}>{item}</option>
          })}
        </select>
      </div>
    </div>
  );
}

export default App;