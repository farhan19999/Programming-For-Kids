// Arif
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import SubNavbar from "../../components/sub_navbar/SubNavbar";
import StandingsTable from "../../components/standings_table/StandingsTable";
import Footer from "../../components/footer/Footer";
import axios from "axios";

export default function Standings() {
  const { contestid } = useParams();
  const [contest, setContest] = useState(null);
  

  useEffect(() => {
    axios.get(`{process.env.REACT_APP_SERVER_URL}/api/contests/${contestid}`).then((res) => {
      setContest(res.data);
    });
  },[contestid]);



  if(!contest) return (<div>Loading...</div>);

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <SubNavbar contestid={contest.contestid}/>

      <h4 style={{ textAlign: "center", marginTop: "20px" }}>
        Contest Title: {contest.title} (Rated for Div. {contest.div})
      </h4>

      
      <StandingsTable contestid = {contestid}/>
      
      <Footer />


    </div>
  );
}
