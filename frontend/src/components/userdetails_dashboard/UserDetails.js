import React from 'react';
import profile_pic from '..//..//assets//images//blank_image.webp'

function UserDetails(){
    const user = {
        name: 'ARIF FAISAL',
        rank: 1,
        rating:1500,
      };
  return (
    <div className="user-profile">
      <h2>Name : {user.name}</h2>
      <h2>RANK : {user.rank}</h2>
      <h2>RATING : {user.rating}</h2>
      <img src={profile_pic} alt="Profile" />
    </div>
  );
};

export default UserDetails;
