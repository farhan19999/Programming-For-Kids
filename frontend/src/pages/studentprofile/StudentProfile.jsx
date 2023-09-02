import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import UserProfile from '../../components/update_profile/Profile'
import Footer from '../../components/footer/Footer';
//Author: MAHBUB

function StudentProfile() {
  return (
      <div>
        <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <UserProfile />
      </div>
      <footer><Footer /></footer>
    </div>
  );
}

export default StudentProfile;