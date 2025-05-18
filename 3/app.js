import React, { useState } from 'react'; 
import './App.css'; 
function App() { 
  const [counter, setCounter] = useState(0); 
  const [step, setStep] = useState(1); 
  const minValue = 0; 
  return ( 
    <div style={{ textAlign: 'center', marginTop: '50px' }}> 
      <h1>Counter Application</h1> 
      <div style={{ fontSize: '48px', margin: '20px' }}> 
        <span>{counter}</span>
 </div> 
      <div> 
        <button onClick={() => {setCounter(counter + step);};}>Increase</button> 
        <button onClick={{if (counter - step >= minValue) {setCounter(counter  - step); }}; 
}>Decrease</button> 
        <button onClick={= () => { setCounter(0);};}>Reset</button> 
      </div> 
      <div style={{ marginTop: '20px' }}> 
        <label> 
          Set Increment/Decrement Step:           
<input  
            type="number"  
            value={step}  
            onChange={(event) => {setStep(Number(event.target.value));};} min="1" style={{ 
marginLeft: '10px' }}  /> 
        </label> 
      </div> 
    </div> 
  ); 
} 
export default App;
