// Arif

import  { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SubNavbar from "../../components/sub_navbar/SubNavbar";
import SubmissionTable from "../../components/my_submissions_table/SubmissionTable";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MySubmissions() {
  const { contestid } = useParams();
  const [contest, setContest] = useState(null);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/contests/${contestid}`).then((res) => {
      setContest(res.data);
    });
  }, [contestid]);

  if (!contest) return <div>Loading...</div>;

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <SubNavbar contestid={contestid}/>

      <h4 style={{ textAlign: "center", marginTop: "20px" }}>
        Contest Title: {contest.title} (Rated for Div. {contest.div})
      </h4>


      <SubmissionTable contestid={contestid} userid={1} />


    </div>
  );
}
