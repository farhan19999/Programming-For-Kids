import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ContestTitle from '../../components/contesttitle/ContestTitle';
import TermsOfAgreements from '../../components/termsofagreement/termsofagreement';
//Author: MAHBUB

function ShowContestRegistration() {
  return (
    <div>
      <Navbar/>
      <ContestTitle/>
      <TermsOfAgreements/>
    </div>
  );
}

export default ShowContestRegistration;