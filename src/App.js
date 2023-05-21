import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const[inputvalue,setInputValue]=useState("");
  const previousInputvalue=useRef("");
  useEffect(()=>{
    previousInputvalue.current=inputvalue;

  },[inputvalue]

  );
  return (
    <>
    
      <input
      type="text"
value={inputvalue}
onChange={(e)=>setInputValue(e.target.value)}
/>
<h2>current value:{inputvalue}</h2>
<h2>previous value:{previousInputvalue.current}</h2>
</>
    
  );
}

export default App;
