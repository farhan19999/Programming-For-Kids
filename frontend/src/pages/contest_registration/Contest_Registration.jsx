import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import TermsOfAgreements from '../../components/termsofagreement/termsofagreement';
import Footer from '../../components/footer/Footer';
import Loading from '../../components/loading/Loading';
import { useSelector } from 'react-redux';
//Author: MAHBUB

function ShowContestRegistration() {
  const { loggedIn, userid } = useSelector((state) => state.user);
  const { contestid } = useParams();
  const navigate = useNavigate();
  const [contest, setContest] = useState('');
  const server_url = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    if(!contestid)return;
    axios.get(`${server_url}/api/contests/${contestid}`)
      .then(response => {
        const contest = response.data;
        setContest(contest);

      })
      .catch(error => {
        console.error('Error fetching contest :', error);
      });
  }, [contestid]);

  if(!contest)return (<Loading />);
  if(!loggedIn){
    navigate("/signin");
  }
  return (
    <div>
      <Navbar />
      <div style={{margin:'20px'}}>

        <div style={{fontSize:'22px',marginLeft:'47%'}}>{contest.title}</div>
        <TermsOfAgreements contestid={contest.contestid} userid={userid}/>
      </div>

      <Footer />
    </div>
  );
}

export default ShowContestRegistration;