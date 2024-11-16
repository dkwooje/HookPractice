import { useEffect, useState } from 'react';
import Timer from './component/Timer';
import './App.css';

function App() {
  const [showTimer, setShowTimer] = useState(false);

  
return(
  <div>
    {showTimer && <Timer />}
    <button onClick={function(){setShowTimer(!showTimer)}}>Toggle Timer</button>
  </div>
  );
}
//만약 onClick={setShowTimer(!showTimer)}로 작성했다면, setShowTimer 함수는 컴포넌트가 렌더링될 때 즉시 실행되어 버립니다. 
export default App;
