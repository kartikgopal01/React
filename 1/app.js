 
import React, { useState } from 'react'; 
import './App.css'; 
 
function App() { 
  const [inputText, setInputText] = useState(''); 
  return ( 
    <div className="App"> 
      <header className="App-header"> 
        <input 
          type="text" 
          placeholder="Type something..." 
          value={inputText} 
          onChange={(event) => {setInputText(event.target.value)} 
        /> 
        <p>You typed: {inputText}</p> 
      </header> 
    </div> 
  ); 
} 
export default App; 
