import React,{useState,useRef,useEffect} from 'react'
import { FaSmile} from "react-icons/fa"
import './App.css'

function App() {
  const [input,setInput] = useState(50);
  const [input1,setInput1] = useState(50);
  const [input2,setInput2] = useState(50);
 
  
  
  return (
    <div className="App">
      <h1>hsl test</h1>
      <div style={{backgroundColor: `hsl(${input}, ${input1}%, ${input2}%)`}} className="can">
        <FaSmile style={{color: `hsl(${255 - input}, ${100 - input1}%, ${100 - input2}%)`}} className="fa"/>
      </div>
      <label htmlFor="i1">Hue: </label>
      <input id="i1" value={input} onChange={e => setInput(e.target.value)} min="0" max="255" type="range" />
      <br />
      <label htmlFor="i2">Saturation: </label>
      <input id="i2" value={input1} onChange={e => setInput1(e.target.value)} min="0" max="100" type="range" />
      <br />
      <label htmlFor="i3">Lightness: </label>
      <input id="i3" value={input2} onChange={e => setInput2(e.target.value)} min="0" max="100" type="range" />
      
    </div>
  );
}

export default App;