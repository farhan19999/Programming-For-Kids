import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ContestTitle from '../../components/contesttitle/ContestTitle';
//Author: MAHBUB

function ShowContest() {
  return (
    <div style={{marginTop:"25px"}}>
      <Navbar/>
      <div style={{fontSize:'24px',fontWeight: 'bold'}}>Registered Contests:</div>
      <ContestTitle/>
    </div>
  );
}

export default ShowContest;