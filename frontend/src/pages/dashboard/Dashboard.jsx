import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import UserDetails from '../../components/userdetails_dashboard/UserDetails';
import Calendar from '../../components/calender/Calender_';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
//Author: MAHBUB

function Dashboard() {
  const {loggedIn} = useSelector(state=>state.user);
  if(!loggedIn){
    return <Navigate to='/signin' />;
  }
  return (
    <div>
      <Navbar />
      <div className='row' >
        <div className='col'>
          <UserDetails />
        </div>
        <div className='col'>
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

export default Dashboard;
