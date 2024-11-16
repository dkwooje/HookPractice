import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] =useState(1);
  const [name,setName] = useState('');

  function handleCountUpdate(){
    setCount(count + 1);
  } 

  function handleInput(e){
    setName(e.target.value)
  }
/*
  useEffect(function(){
    console.log("랜더링");
  },);  

  useEffect(function(){
    console.log("count 변화");
  }, [count]);  

  useEffect(function(){
    console.log("name 변화");
  }, [name]);
  */  

  useEffect(function(){
    console.log("마운팅");
  }, []);


return(
  <div>
    <button onClick={handleCountUpdate}>버튼</button>
    <span>count: {count}</span>
    <p>
    <input type='text' value={name} onChange={handleInput} />
    </p>
    <span>{name}</span>
  </div>
  );
}

export default App;
