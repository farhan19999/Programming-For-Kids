import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import SubNavbar from "../../components/sub_navbar/SubNavbar";
import TimeRemaining from "../../components/time_remaining/Timer";
import ProblemDetails from "../../components/problem_details/ProblemDetails";
import CodeEditor from "../../components/code_editor/CodeEditor";
import Footer from "../../components/footer/Footer";

export default function IndividualProblem() {

  const defaultState = {
    problemid: 1,
    contestid: 1,
    title: "Shopping",
    difficulty: "Easy",
    problem_statement:
`If the price of a toy is X and you paid taka Y to the shopkeeper,
calculate how much money you will get back if you buy three of them.

The first line of input is X and the second line is Y. Print the output.`,
    topic: "Array",
    sample_input: 
`15
50`,
    sample_output: "5",
    time_limit: "45",
  };

  const { contestid,problemid } = useParams();
  const [problem, setProblem] = useState(defaultState);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/contests/${contestid}/problems/${problemid}`).then((response) => {
      setProblem(response.data);
      console.log(response.data);
    });
  }, [problemid]);

  // const moveToNextProblem = () => {
  //   // Implement your logic here to move to the next problem
  //   // Assuming you have a list of problems and their IDs
  
  //   // const problemList = ['1', '2', '3', '4', '5', '6']; // Replace with your problem IDs
  //   // const currentIndex = problemList.indexOf(problemid);

  //   // if (currentIndex !== -1 && currentIndex < problemList.length - 1) {
  //   //   const nextProblemId = problemList[currentIndex + 1];
  //   //   history.push(`/contest-problem-details/${nextProblemId}`);
  //   // }
  //   console.log("Moving to the next problem");
  // };

  const nextButtonContainerStyle = {
    position: "relative", 
    marginLeft: "30px",
    bottom: "95px",
    left: "20px",
    marginBottom: "30px",
  };

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <SubNavbar />

      <h4 style={{ textAlign: "center", marginTop: "20px" }}>
        Contest Title: Array Round 1 (Rated for Div. 3)
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

      {/* <div style={nextButtonContainerStyle} className="d-flex ">
        <button
          onClick={moveToNextProblem}
          type="button"
          className="btn btn-dark btn-me"
        >
          Next
        </button>
      </div> */}

      <Footer />
    </div>
  );
}
