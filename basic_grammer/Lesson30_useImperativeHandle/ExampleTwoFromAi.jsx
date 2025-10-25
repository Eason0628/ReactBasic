const UserInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      blur() {
        inputRef.current.blur();
      },
      value: inputRef.current.value
    }
  }, []);

  const [ value, setValue ] = useState('dell');
  return <input ref={inputRef} value={value || ''} onChange={(e)=>{setValue(e.target.value)}} />
});


// 父组件
function App() {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current.value); // 打印 "dell"
  }, []);

  return <UserInput ref={ref} />;
}
