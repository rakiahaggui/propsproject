import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import image from './profile/image/image1.jpeg';

function App() {
  const handleAlert=(name)=>{
    alert(`profile user name is ${name} `)
  }
  
  return (
    <div className="App">
      <Profile
        FullName='rakia'
        bio='network administrator'
        profession=' Administrator'
        handleAlert={handleAlert}
      >
        {image}
      </Profile>
    </div>
  );
}

export default App;
