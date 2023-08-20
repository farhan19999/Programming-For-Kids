/*
 *
 *   Author: Arif
 *
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import SubNavbar from "../../../components/sub_navbar/SubNavbar";
import TimeRemaining from "../../../components/time_remaining/Timer";
import Footer from "../../../components/footer/Footer";

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
  const [editingField, setEditingField] = useState(null);
  const [editedValue, setEditedValue] = useState("");
  const [problemStatement, setProblemStatement] = useState("Hello World!");

  const handleProblemStatementChange = (event) => {
    setProblem(event.target.value);
  };

  const { problemid } = useParams();
  const [contestid, setContestid] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/problems/${problemid}`)
      .then((response) => {
        setProblem(response.data);
        setContestid(response.data.contestid);
        problem.problem_statement = "sqqqqqqqqqeaeaaaaaaaaa";
      });
  }, [problemid]);

  const handleEdit = (field) => {
    setEditingField(field);
    setEditedValue(problem[field]);
  };

  const handleSave = () => {
    // if (editingField && editedValue !== problem[editingField]) {
    //   const updatedProblem = {
    //     ...problem,
    //     [editingField]: editedValue,
    //   };

    axios
      .put(
        `http://localhost:3000/api/contests/${contestid}/problems/${problemid}`,
        {
          title: problem.title,
          difficulty_level: problem.difficulty_level,
          problem_statement: problem.problem_statement,
          topic: problem.topic,
          sample_input: problem.sample_input,
          sample_output: problem.sample_output,
          time_limit: problem.time_limit,
          category: problem.category,
        }
      )
      .then((response) => {
        // setProblem(updatedProblem);
        console.log("Problem updated:", response.data);
        // setEditingField(null);
      })
      .catch((error) => {
        console.error("Error updating problem:", error);
      });
    // }
  };

  return (
    <div style={{ position: "relative" }}>
      <Navbar />

      <h4 style={{ textAlign: "center", marginTop: "60px" }}>
        Contest Title: Array Round 1 (Rated for Div. 3)
      </h4>

      <div style={{ marginTop: "30px" }}>
        <h5 style={{ textAlign: "center", textDecoration: "underline" }}>
          {problem.title}
        </h5>
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
        {/* <AdminProblemDetailsEdit
          problem={problem}
          editingField={editingField}
          editedValue={editedValue}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={() => {
            setEditingField(null);
            setEditedValue("");
          }}
        /> */}

        <div
          className="form-group"
          style={{
            width: "100%",
          }}
        >
          <label for="problemStatement">
            <p style={{ fontSize: "18px" }}>Problem Statement</p>
          </label>
          <textarea style={{backgroundColor:"#ccc"}}
            className="form-control"
            id="problemStatement"
            rows="3"
            // defaultValue={problem.problem_statement}
            value={problem.problem_statement}
            onChange={handleProblemStatementChange}
          ></textarea>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "17px",
            justifyContent: "space-between",
            marginTop: "20px", // Add spacing between problem description and sample boxes
          }}
        >
          <div className="form-group" style={{width:"48%"}}>
            <label for="sampleInput">
              <p style={{ fontSize: "18px" }}>Sample Input:</p>
            </label>
            <textarea style={{backgroundColor:"#ccc"}}
            className="form-control"
            id="sampleInput"
            rows="3"
            value={problem.sample_input}
            onChange={handleProblemStatementChange}
          ></textarea>
          </div>

          <div className="form-group" style={{width:"48%"}}>
            <label for="sampleOutput">
              <p style={{ fontSize: "18px" }}>Sample Output:</p>
            </label>
            <textarea style={{backgroundColor:"#ccc"}}
            className="form-control"
            id="sampleOutput"
            rows="3"
            // defaultValue={problem.problem_statement}
            value={problem.sample_output}
            onChange={handleProblemStatementChange}
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

      <Footer />
    </div>
  );
}

