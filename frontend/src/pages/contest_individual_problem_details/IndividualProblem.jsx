// Arif

import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import SubNavbar from '../../components/sub_navbar/SubNavbar';
import TimeRemaining from '../../components/time_remaining/Timer';
import ProblemDetails from '../../components/problem_details/ProblemDetails';
import CodeEditor from '../../components/code_editor/CodeEditor';

export default function IndividualProblem() {
  return (
    <div style={{ position: "relative"}}>
      <Navbar />
      <SubNavbar />

      <h4 style={{ textAlign: "center", marginTop: "20px" }}>
        Contest Title: Array Round 1 (Rated for Div. 3)
      </h4>

      <TimeRemaining />

      <div style={{ display: "flex"}}>
        <ProblemDetails />
        <div style={{ marginLeft: "22px", marginTop: "26px", flex: "1" }}>
        <CodeEditor />
        </div>
      </div>

      <div style={nextButtonContainerStyle} class="d-flex ">
        <button onClick={moveToNextProblem} type="button" class="btn btn-dark btn-me">Next</button>
      </div>
      
    </div>
  );
}

const moveToNextProblem = () => {
    // Implement your logic here to move to the next problem

    // Assuming you have a list of problems and their IDs
    // const problemList = ['A', 'B', 'C', 'D']; // Replace with your problem IDs
    // const currentIndex = problemList.indexOf(id);

    // if (currentIndex !== -1 && currentIndex < problemList.length - 1) {
    //   const nextProblemId = problemList[currentIndex + 1];
    //   history.push(`/contest-problem-details/${nextProblemId}`);
    // }
    console.log("Moving to the next problem");
  };

const nextButtonContainerStyle = {
    position: "absolute",
    marginLeft: "30px",
    bottom: "20px",
    left: "20px",
    marginBottom: "30px",
  };
