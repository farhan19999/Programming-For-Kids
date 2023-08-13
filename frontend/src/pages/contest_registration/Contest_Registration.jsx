import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ContestTitle from '../../components/contesttitle/ContestTitle';
import TermsOfAgreements from '../../components/termsofagreement/termsofagreement';
import Footer from '../../components/footer/Footer';
//Author: MAHBUB

function ShowContestRegistration() {
  return (
    <div>
      <Navbar/>
      <ContestTitle/>
      <TermsOfAgreements/>
      
      <Footer />
    </div>
  );
}

export default ShowContestRegistration;