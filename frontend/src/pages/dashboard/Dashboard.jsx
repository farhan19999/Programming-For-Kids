import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import UserDetails from '../../components/userdetails/UserDetails';

function ShowDashboard() {
  return (
    <div>
      <Navbar/>
      <UserDetails/>
      <Footer/>
    </div>
  );
}

export default ShowDashboard;
