import React from 'react' 
import './FigureListStyles.css' 
 
function BasicFigure ({imageSource, imageCaption, removeCard}) { 
  return ( 
    <div className='figure-container'> 
        {/*Image Tag which takes source URL and Caption To display */} 
        <img  
            src={imageSource} alt={imageCaption} className='figure-image'/> 
        <p className='figure-caption'>{imageCaption}</p> 
        <button onClick={removeCard} className='remove-button'>X</button> 
    </div> 
  ) 
} 
export default BasicFigure; 