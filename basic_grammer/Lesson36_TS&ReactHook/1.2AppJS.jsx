function Child({ age }) {
  return <div>{ age.toString() }</div>
}

function App() {
  return (
    <div>
      <Child age={null} />
    </div>
  );
}

export default App;
