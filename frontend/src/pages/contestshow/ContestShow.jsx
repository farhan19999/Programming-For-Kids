import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ContestTitle from '../../components/contesttitle/ContestTitle';
import ContestTable from '../../components/contest_table/ContestTable';
import Footer from '../../components/footer/Footer';
import { useSelector } from 'react-redux';
//Author: MAHBUB

function Contest() {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <div>
      <Navbar />
      {loggedIn ? 
        <ContestTitle /> :
        <div className='container'>
          <div className='row justify-content-lg-center'>
            <div className='col justify-content-lg-center text-center'>Contest</div>
          </div>
          <div className='row'><ContestTable/></div>
        </div>
        }
      <Footer />
    </div>
  );
}


export default Contest;