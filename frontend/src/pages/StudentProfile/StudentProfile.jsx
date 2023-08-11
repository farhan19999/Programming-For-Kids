import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import UserProfile from '../../components/UpdateProfile/profile'

function ShowStudentProfile() {
  return (
    <div>
      <Navbar/>
      <UserProfile/>
    </div>
  );
}

export default ShowStudentProfile;