import React from 'react';
import './Dashboard.css'; // Import the CSS file for styling
import Navbar from '../components/Navbar';
import UserDetails from '../components/UserDetails'
import PerformanceGraph from '../components/Performancegraph';
import UpcomingEvents from '../components/Upcomingevents';

function ShowDashboard() {
  return (
    <div>
      <Navbar/>
      <UserDetails/>
      <PerformanceGraph/>
      <UpcomingEvents/>
    </div>
  );
}

export default ShowDashboard;
