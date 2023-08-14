import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import UserDetails from '../../components/userdetails_dashboard/UserDetails';
import Calendar from '../../components/calender/Calender_';
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module
// import '~mdb-ui-kit/css/mdb.min.css';
//Author: MAHBUB

function ShowDashboard() {
  return (
    <div>
      <Navbar />
      <div className='row' >
        <div className='col' style={{ marginTop: "25px" }}>
          <UserDetails />
        </div>
        <div className='col' style={{ marginTop: "-20px", marginBottom: "20px" }}>

          <Calendar />
        </div>
      </div>
      <div className='row'>
        {/* <canvas
          data-mdb-chart="line"
          data-mdb-dataset-label="Traffic"
          data-mdb-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
          data-mdb-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"
        ></canvas> */}
      </div>


      <Footer />
    </div>
  );
}

export default ShowDashboard;
