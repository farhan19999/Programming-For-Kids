//Author:: Mahbub

import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import SubNavbar from "../../../components/sub_navbar/SubNavbar";
import SubmissionTable from "../../../components/my_submissions_table/SubmissionTable";


function Submission_IndividualProblem() {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <SubNavbar />

      <h4 style={{ textAlign: "center", marginTop: "20px" }}>
        Contest Title: Array Round 1 (Rated for Div. 3)
      </h4>

      
      <SubmissionTable />


    </div>
  );
}


export default Submission_IndividualProblem;
