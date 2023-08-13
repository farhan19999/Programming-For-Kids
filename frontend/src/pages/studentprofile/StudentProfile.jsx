import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import UserProfile from '../../components/update_profile/Profile'
import Footer from '../../components/footer/Footer';
//Author: MAHBUB

function ShowStudentProfile() {
  return (
    <div>
      <Navbar/>
      <UserProfile/>
      
      <Footer />
    </div>
  );
}

export default ShowStudentProfile;