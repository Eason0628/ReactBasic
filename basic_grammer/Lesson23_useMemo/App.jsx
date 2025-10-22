import { useState, useMemo, useEffect } from 'react';

function App () {
  const list = ['Do homework', 'Clean Rooms', 'Coding', 'Watering Flower'];
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');

  console.log('step 1');
  // useMemo 相当于做了一个缓存
  // useMemo 是在render 运行的过程中执行的（代码从上到下顺序执行）
  const filteredList = useMemo(() => {
    console.log('step 2');
    return list.filter(item => item.indexOf(search) > -1);
  }, [search]);

  // useEffect 是在 render 结束后再执行的(Render 完成后执行)
  // 和其他系统打交道(例如请求外部数据)或Dom渲染完成之后，手动操作Dom
  useEffect(() => {
   // console.log('A step 3');    如果A放开在严格模式下，打印结果是1 2 1 2 3 3
  }, []);

  console.log('B step 3'); //  如果B放开在严格模式下，打印结果是123 123

  return (
    <div>
      <div>
        name: <input value={name} onChange={(e) => { setName(e.target.value) }} />
      </div>
      <div>
        search: <input value={search} onChange={(e) => { setSearch(e.target.value) }} />
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
// 假设没有 useMemo：
// const filteredList = list.filter(item => item.indexOf(search) > -1);
// 这样会有个问题：
// 每次 输入 name 时，组件也会重新渲染；
// 每次渲染都会重新执行 list.filter；
// 但其实 list 和 search 没变，没必要重新过滤。

// 虽然这个例子中 list 很小、影响不大，但在真实项目中：
// list 可能很大（比如 1000+ 项）
// 或者计算逻辑复杂（比如排序、格式化）
// 这时 useMemo 的缓存能显著提高性能，减少重复计算。 总结：缓存计算结果，只有当依赖项变化时才重新计算，避免其它响应式对象变化时也会重新计算。

// 使用场景总结：
// ✅ 计算结果需要缓存	比如过滤、排序、复杂数学计算、格式化日期等
// ✅ 依赖不经常变化	当依赖变化少时，缓存能显著减少开销
// ⚠️ 避免无意义渲染	如果不使用 useMemo，子组件可能因为父组件重新渲染而重复计算
// 🚫 不要滥用	如果计算很轻量（比如简单的字符串拼接），加 useMemo 反而多此一举