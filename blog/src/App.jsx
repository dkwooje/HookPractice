import { useState, useRef } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef); 


  console.log('렌더링...');

  const increaseCountState = () => {
    setCount(count + 1);
  }

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1 ;
 // console.log('Ref: ' ,countRef.current); 
  }


  return(
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올림</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
}
export default App;
