import React from 'react';
import profile_pic from '..//assets//blank_image.webp'

function Navbar(){
  return (
    <nav className="navbar">
      <div className="navbar-logo">Programming For Kids</div>
      <div className="navbar-links">
        <button>DashBoard</button>
        <button>Practice</button>
        <button>Contests</button>
        <button>MiniProject</button>
        <button>CodeGame</button>
      </div>
      <div className="navbar-profile">
        <img src={profile_pic} alt="Profile" />
        <div className="profile-options">
          <button>Profile</button>
          <button>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
