import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ContestTitle from '../../components/contesttitle/ContestTitle';
import Footer from '../../components/footer/Footer';
//Author: MAHBUB

function ShowContest() {
  return (
    <div style={{ height: '100vh',marginTop:"25px"}}>
    <Navbar/>
      <div style={{ fontSize: '24px', fontWeight: 'bold', padding: '20px' }}>
        {/* Registered Contests: */}
        </div>
      <ContestTitle/>
      
      {/* <Footer /> */}
    </div>
  );
}

export default ShowContest;