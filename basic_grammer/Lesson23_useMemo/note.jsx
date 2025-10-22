
//React 提供的一个 性能优化 Hook，它的作用是：
//缓存（记住）一个计算结果，只有当依赖项变化时才重新计算。
const memoValue = useMemo(() => {
  // 计算逻辑
  return result;
}, [dependencies]);

//第一次渲染时会执行回调函数，返回结果；
//当依赖项（dependencies）中的任意值变化时，才会重新执行；
//否则直接返回上次缓存的结果，不再重新计算。
