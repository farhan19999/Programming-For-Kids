import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import UserDetails from '../../components/userdetails_dashboard/UserDetails';
import Calendar from '../../components/calender/Calender_';
//Author: MAHBUB

function ShowDashboard() {
  return (
    <div>
      <Navbar/>
      <div style={{position:"relative"}}><UserDetails/></div>
      <div style={{position:"relative", width:"100px", height:"100px"}}><Calendar/></div>

      
      <Footer/>
    </div>
  );
}

export default ShowDashboard;
