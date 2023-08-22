// Arif

import  { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SubNavbar from "../../components/sub_navbar/SubNavbar";
import SubmissionTable from "../../components/my_submissions_table/SubmissionTable";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loading/Loading";

export default function MySubmissions() {
  const { contestid } = useParams();
  const [contest, setContest] = useState(null);
  const server_url = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    axios.get(`${server_url}/api/contests/${contestid}`).then((res) => {
      setContest(res.data);
    });
  }, [server_url, contestid]);

  if (!contest) return <Loading />;

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
