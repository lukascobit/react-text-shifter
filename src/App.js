import React,{useState} from 'react'
import './App.css'

function App() {
  const [input,setInput] = useState('')
  const [l,setL] = useState('1vw')
  
  function Change(e){
    setInput(e.target.value);
    setL(`${input.split("").length}px`);
    console.log(l);
  }
  
  return (
    <div className="App">
      <h1 style={{fontSize : l}}>{input}</h1>
      <textarea type="text" value={input} onChange={e => Change(e)}/>
    </div>
  );
}

export default App;