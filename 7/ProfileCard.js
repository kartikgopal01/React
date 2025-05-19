import React from 'react'; 
import './ProfileCard.css'; 
 
function ProfileCard({ name, bio, image, backgroundColor }) { 
  const cardStyle = { 
    backgroundColor: backgroundColor, 
    textAlign: 'center' 
  }; 
  return ( 
    <div className="profile-card" style={cardStyle}> 
      <img src={image} alt="Profile" className="profile-image" /> 
      <h2 className="profile-name">{name}</h2> 
      <p className="profile-bio">{bio}</p> 
    </div> 
  ); 
} 
export default ProfileCard; 