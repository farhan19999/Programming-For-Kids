import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import UserDetails from '../../components/userdetails_dashboard/UserDetails';
import Calendar from '../../components/calender/Calender_';
//Author: MAHBUB
import axios from 'axios';

function ShowDashboard() {




  return (
    <div>
      <Navbar />
      <div className='row' >
        <div className='col' style={{marginTop:"25px"}}>
          <UserDetails />
        </div>
        <div className='col' style={{marginTop:"-20px",marginBottom:"20px"}}>

          <Calendar />
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default ShowDashboard;
