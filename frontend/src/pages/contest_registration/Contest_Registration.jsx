import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import TermsOfAgreements from '../../components/termsofagreement/termsofagreement';
import Footer from '../../components/footer/Footer';
//Author: MAHBUB

function ShowContestRegistration() {
  const { contestid } = useParams();
  if(!contestid) contestid=1;
  const [contest, setContest] = useState('');
  const server_url = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    axios.get(`${server_url}/api/contests/${contestid}`)
      .then(response => {
        const contest = response.data;
        setContest(contest);

      })
      .catch(error => {
        console.error('Error fetching contest :', error);
      });
  }, [contestid]);

  //if(!contest)return (<p>Loading....</p>);
  return (
    <div>
      <Navbar />
      <div style={{margin:'30px'}}>

        <p>{contest.title}</p>
        <TermsOfAgreements contestid={contest.contestid} userid={1}/>
      </div>

      <Footer />
    </div>
  );
}

export default ShowContestRegistration;