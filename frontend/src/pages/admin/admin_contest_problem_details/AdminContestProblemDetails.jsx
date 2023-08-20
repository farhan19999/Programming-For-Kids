/*
 *
 *   Author: Arif
 *
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import TimeRemaining from "../../../components/time_remaining/Timer";
import Footer from "../../../components/footer/Footer";
import { useNavigate } from "react-router-dom";


export default function AdminContestProblemDetails() {
  const defaultState = {
    problemid: 1,
    contestid: 1,
    title: "Shopping",
    difficulty: "Easy",
    problem_statement: `If the price of a toy is X and you paid taka Y to the shopkeeper,
    calculate how much money you will get back if you buy three of them.
    
    The first line of input is X and the second line is Y. Print the output.`,
    topic: "Array",
    sample_input: `15
50`,
    sample_output: "5",
    time_limit: "45",
  };

  const [problem, setProblem] = useState(defaultState);

  const [problemStatement, setProblemStatement] = useState(problem.problem_statement);
  const [sampleInput, setSampleInput] = useState(problem.sample_input);
  const [sampleOutput, setSampleOutput] = useState(problem.sample_output);

  const handleProblemStatementChange = (event) => {
    setProblemStatement(event.target.value);
  };
  const handleSampleInputChange = (event) => {
    setSampleInput(event.target.value);
  };

  const handleSampleOutputChange = (event) => {
    setSampleOutput(event.target.value);
  };

  const { problemid } = useParams();
  const [contestid, setContestid] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/problems/${problemid}`)
      .then((response) => {
        setProblem(response.data);
        setContestid(response.data.contestid);
        setProblemStatement(response.data.problem_statement);
        setSampleInput(response.data.sample_input);
        setSampleOutput(response.data.sample_output);
      });
  }, [problemid]);

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/admin-contest-problems-index"); 
  };

  const handleSave = () => {
    axios
      .put(
        `http://localhost:3000/api/contests/${contestid}/problems/${problemid}`,
        {
          title: problem.title,
          difficulty_level: problem.difficulty_level,
          problem_statement: problemStatement,
          topic: problem.topic,
          sample_input: sampleInput,
          sample_output: sampleOutput,
          time_limit: problem.time_limit,
          category: problem.category,
        }
      )
      .then((response) => {
        console.log("Problem updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating problem:", error);
      });
  };

  

  return (
    <div style={{ position: "relative" }}>
      <Navbar />

      <h4 style={{ textAlign: "center", marginTop: "60px" }}>
        Contest Title: Array Round 1 (Rated for Div. 3)
      </h4>

      <div style={{ marginTop: "35px" }}>
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          {problem.title}
        </h4>
      </div>

      <TimeRemaining />

      <div
        style={{
          marginLeft: "50px",
          marginLeft: "50px",
          marginRight: "50px",
          marginTop: "20px",
        }}
      >
        <div
          className="form-group"
          style={{
            width: "100%",
          }}
        >
          <label for="problemStatement">
            <p style={{ fontSize: "18px" }}>Problem Statement</p>
          </label>
          <textarea
            style={{ backgroundColor: "#ccc" }}
            className="form-control"
            id="problemStatement"
            rows="3"
            value={problemStatement}
            onChange={handleProblemStatementChange}
          ></textarea>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "17px",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div className="form-group" style={{ width: "48%" }}>
            <label for="sampleInput">
              <p style={{ fontSize: "18px" }}>Sample Input:</p>
            </label>
            <textarea
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="sampleInput"
              rows="3"
              value={sampleInput}
              onChange={handleSampleInputChange}
            ></textarea>
          </div>

          <div className="form-group" style={{ width: "48%" }}>
            <label for="sampleOutput">
              <p style={{ fontSize: "18px" }}>Sample Output:</p>
            </label>
            <textarea
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="sampleOutput"
              rows="3"
              value={sampleOutput}
              onChange={handleSampleOutputChange}
            ></textarea>
          </div>
        </div>
      </div>

      {/* <label for="formFileLg" class="form-label">
        Test Cases (Input) File:{" "}
      </label>
      <input
        className="form-control form-control-lg"
        id="formFileLg"
        type="file"
      />

      <label for="formFileLg" class="form-label">
        Test Cases (Output) File:{" "}
      </label>
      <input
        className="form-control form-control-lg"
        id="formFileLg"
        type="file"
      /> */}

      <button
        type="button"
        className="btn btn-dark"
        style={{
          position: "relative",
          bottom: "0px",
          right: "0",
          width: "120px",
          marginLeft: "80%",
          marginTop: "50px",
        }}
        onClick={handleSave}
      >
        Save
      </button>
      <button
        type="button"
        className="btn btn-dark"
        style={{
          position: "relative",
          bottom: "0px",
          right: "0",
          marginRight: "50px",
          width: "120px",
          marginLeft: "10px",
          marginTop: "50px",
        }}
        onClick={handleCancel}
      >
        Cancel
      </button>

      <Footer />
    </div>
  );
}
