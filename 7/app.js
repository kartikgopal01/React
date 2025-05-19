 
import React, { useState } from 'react'; 
import ProfileCard from './ProfileCard'; 
import './ProfileCard.css'; 
function App() { 
/*Bgcolor state variable to hold the color */ 
  const [bgColor, setBgColor] = useState('#f0f0f0'); 
    return ( 
    <div className="app"> 
      <ProfileCard 
        name="Jane Doe" 
        bio="Front-end Developer. Loves React and design." 
        image="https://avatar.iran.liara.run/public/boy" 
        backgroundColor={bgColor} 
      /> 
      <button onClick={() => setBgColor('#cce7ff')}>Change Background</button> 
    </div> 
  ); 
} 
export default App;