import { useState } from 'react';
import './App.css';

function App() {

  const [names,setNames] = useState(['홍길동','김민수']);
  const [input,setInput] = useState('');

  function handleInput(e){
    setInput(e.target.value);
  }
  function handleUpload(e){
    setNames((prevState) => {
      console.log('이전 state: ', prevState);
      return [input, ...prevState];
    })
  }



  return (
    <div>
      <input type='text' value={input} onChange={handleInput} />
      <button onClick={handleUpload}>upload</button>
      {names.map((name, idx) =>{
          return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
