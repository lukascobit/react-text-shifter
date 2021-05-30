import React,{useState,useRef,useEffect} from 'react'
import './App.css'

function App() {
  const [input,setInput] = useState('');
  const [l,setL] = useState('1vw');
  const timesRendered = useRef(0);

  useEffect(()=>{
    timesRendered.current = timesRendered.current+1
  })
  
  function Change(e){
    setInput(e.target.value);
    setL(`${input.split("").length}px`);
  }
  
  return (
    <div className="App">
      <h2>Rerendered {timesRendered.current} times</h2>
      <h1 style={{fontSize : l}}>{input}</h1>
      <textarea type="text" value={input} onChange={e => Change(e)}/>
      
    </div>
  );
}

export default App;