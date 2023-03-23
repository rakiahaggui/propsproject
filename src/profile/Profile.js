import React from 'react'
const Profile = ( {FullName,bio,profession,children,handleAlert}) => {

    return (
      <div>
  
      <h1>{FullName}</h1>
      <h2>{bio}</h2>
      <h3>{profession}</h3>
      <img src={children} alt={FullName}/>
      <button onClick={()=>handleAlert()}> click me </button>
    </div>
  );
}

export default Profile;