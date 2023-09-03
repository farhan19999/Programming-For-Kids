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
        <div className='d-flex justify-content-center'>
          <div className='p-2'>Contest</div>
          <ContestTable/>
        </div>
        }
      <Footer />
    </div>
  );
}


export default Contest;