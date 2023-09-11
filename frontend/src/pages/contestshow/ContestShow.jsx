import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ContestTitle from '../../components/contesttitle/ContestTitle';
import ContestTable from '../../components/contest_table/ContestTable';
import Footer from '../../components/footer/Footer';
import { useSelector } from 'react-redux';

// Author: MAHBUB

function Contest() {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {loggedIn ? (
            <div className="col-md-12">
              <ContestTitle />
            </div>
          ) : (
            <div className='col-md-12 text-center'>
              <div style={{ margin: '20px', fontSize: '18px' }}><b>Contest</b></div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-md-12">
            <ContestTable />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contest;
