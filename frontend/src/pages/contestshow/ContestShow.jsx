import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ContestTitle from '../../components/contesttitle/ContestTitle';
//Author: MAHBUB

function ShowContest() {
  return (
    <div>
      <Navbar/>
      <h2>Registered Contests:</h2>
      <ContestTitle/>
      <ContestTitle/>
      <ContestTitle/>

      <h2>Registered Contests:</h2>
      <ContestTitle/>
      <ContestTitle/>
      <ContestTitle/>
    </div>
  );
}

export default ShowContest;