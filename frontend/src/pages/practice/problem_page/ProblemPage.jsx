import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import SubNavbar from "../../../components/sub_navbar/SubNavbar";
import TimeRemaining from "../../../components/time_remaining/Timer";
import ProblemDetails from "../../../components/problem_details/ProblemDetails";
import CodeEditor from "../../../components/code_editor/CodeEditor";
import Footer from "../../../components/footer/Footer";
import Loading from "../../../components/loading/Loading";




export default function ProblemPage() {
  const [problem, setProblem] = useState(null);
  const [contest, setContest] = useState(null);
  const { problemid } = useParams();
  const server_url = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    axios.get(`${server_url}/api/problems/${problemid}`)
    .then((response) => {
      setProblem(response.data);
      axios.get(`${server_url}/api/contests/${response.data.contestid}`)
      .then((response) => {
        setContest(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contest :", error);
      });

    })
    .catch((error) => {
        console.log("Error fetching problem :", error);
    });


  }, [server_url,problemid]);


  if(!contest || !problem) return (<Loading/>);

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <SubNavbar contestid={contest.contestid}/>

      <h4 style={{ textAlign: "center", marginTop: "20px" }}>
        Contest Title: {contest.title} (Rated for Div. {contest.div})
      </h4>
      <div style={{  }}>
        <TimeRemaining />
      </div>

      <div style={{ display: "flex" }}>
        <ProblemDetails problem={problem} />
        <div style={{ marginLeft: "22px", marginTop: "26px", flex: "1" }}>
          <CodeEditor />
        </div>
      </div>
      <Footer />
    </div>
  );
}
