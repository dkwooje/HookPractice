import { useEffect, useState } from 'react';
import Timer from './component/Timer';
import './App.css';

function App() {
  const [showTimer, setShowTimer] = useState(false);
return(
  <div>
    {showTimer && <Timer />}
    <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
  </div>
  );
}

export default App;
