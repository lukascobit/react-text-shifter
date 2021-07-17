import React,{useState,useRef,useEffect} from 'react'
import { FaSmile} from "react-icons/fa"
import './App.css'

function App() {
  const [input,setInput] = useState(50);
  const [input1,setInput1] = useState(50);
  const [input2,setInput2] = useState(50);

  function rand(){
    setInput(Math.round(Math.random()*255));
    setInput1(Math.round(Math.random()*100))
    setInput2(Math.round(Math.random()*100))
  }
 
  
  
  return (
    <div className="App">
      
      <div style={{backgroundColor: `hsl(${input}, ${input1}%, ${input2}%)`, border: `1vw hsl(${172 - input}, ${50 - input1}%, ${50 - input2}%) solid`, boxShadow: `0.1vw 0.1vw hsl(${0}, ${0}%, ${input2}%)`}} className="can">
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
      
      {/* random value button */}
      <button className="b" onClick={rand}>Randomize!</button>
    </div>
  );
}

export default App;