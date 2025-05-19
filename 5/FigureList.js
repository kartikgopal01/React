import React,{useState} from 'react' 
import BasicFigure from './BasicFigure' 
import './FigureListStyles.css' 
 
function FigureList() { 
    /*State variables to store data */ 
    /*Array to hold the list of images */ 
    const [figList, setFigList] = useState([]) 
    /*Varibale to hold the image source URL */ 
    const [imageSourceURL, setImageSourceURL] = useState('') 
    /*Variable to hold the Image caption */ 
    const [imageCaptions, setImageCaptions] = useState('') 
    /*Arrow Functions */ 
    /*1) To add image and caption to array */ 
    const addImage = () => { 
        /*Check wheather image url and image caption are not empty */ 
        if(imageSourceURL.trim() !== '' && imageCaptions.trim() !== ''){ 
            setFigList(figList.concat({ id: Date.now(), imageSourceURL, imageCaptions})) 
            setImageCaptions('') 
            setImageSourceURL('') 
        } 
    }; 
/*2) To remove particular image and caption from the  array based on ID propertty */ 
   const removeImages = (id) => setFigList(figList.filter((figures)=> figures.id !== id)) 
  return ( 
    <div className='container'> 
        <div className='input-container'> 
<span>Provide Image URL:- </span> 
        <input 
            type='text' 
            value={imageSourceURL} 
            onChange={(event)=> setImageSourceURL(event.target.value)}         
        ></input> 
<span>Provide Caption/Description:- </span> 
        <input 
        type='text' 
        value={imageCaptions} 
        onChange={(event)=> setImageCaptions(event.target.value)}      
        ></input> 
</div> 
        <button onClick={addImage}>Add Image</button> 
        <div className='grid-layout'> 
            {figList.map(({id, imageSourceURL, imageCaptions})=>  
            <BasicFigure 
             key={id} 
             imageSource={imageSourceURL} 
             imageCaption={imageCaptions} 
             removeCard={() => removeImages(id)} 
            ></BasicFigure> 
            )} 
        </div> 
    </div> 
  ) 
} 
export default FigureList