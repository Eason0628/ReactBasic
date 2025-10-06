import { useState, useCallback, useDebugValue } from 'react';

function useContent() {
  useDebugValue('dell lee');
  const [content, setContent] = useState('');
  const handleContentChange = useCallback((e) => {
    setContent(e.target.value)
  }, []);
  return {content, handleContentChange};
}

function useName() {
  useDebugValue('hello world');
  const [name, setName] = useState('');
  const handleNameChange = useCallback((e) => {
    setName(e.target.value)
  }, []);
  return {name, handleNameChange};
}

function App() {
  const { name, handleNameChange } = useName();
  const { content, handleContentChange } = useContent();
  return (
    <>
      <input value={name ? name: ''} onChange={handleNameChange}/>
      <input value={content ? content: ''} onChange={handleContentChange}/>
    </>
  );
}

export default App;