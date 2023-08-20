/*
 *
 *   Author: Arif
 *
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
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

  const [problemStatement, setProblemStatement] = useState(
    problem.problem_statement
  );
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

  const [sampleInputFile, setSampleInputFile] = useState(null);
  const handleInputFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const inputContent = event.target.result;
        setSampleInputFile(inputContent);
      };
      reader.readAsText(file);
    }
  };

  const [sampleOutputFile, setSampleOutputFile] = useState(null);
  const handleOutputFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const outputContent = event.target.result;
        setSampleOutputFile(outputContent);
      };
      reader.readAsText(file);
    }
  };

  const [sampleProblemStatementFile, setSampleProblemStatementFile] =
    useState(null);
  const handleProblemStatementFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const psContent = event.target.result;
        setSampleProblemStatementFile(psContent);
      };
      reader.readAsText(file);
    }
  };

  const { contestid, problemid } = useParams(); // http://localhost:3001/admin/contest/1/problem/3

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/problems/${problemid}`)
      .then((response) => {
        setProblem(response.data);
        setProblemStatement(response.data.problem_statement);
        setSampleInput(response.data.sample_input);
        setSampleOutput(response.data.sample_output);
      });
  }, [problemid]);

  const [contest, setContest] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/contests/${contestid}`) // For getting contest title
      .then((response) => {
        const contest = response.data;
        setContest(contest);
      })
      .catch((error) => {
        console.error("Error fetching contest :", error);
      });
  }, [contestid]);

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(`/admin/contest/${contestid}`);
  };

  const handleSave = () => {
    axios
      .post(`http://localhost:3000/api/contests/${contestid}/problems`, {
        title: document.getElementById("problem_title").value,
        difficulty_level: document.getElementById("difficulty").value,
        problem_statement: sampleProblemStatementFile || problemStatement,
        topic: document.getElementById("topic").value,
        sample_input: sampleInputFile || sampleInput,
        sample_output: sampleOutputFile || sampleOutput,
        time_limit: document.getElementById("time_limit").value,
        category: document.getElementById("category").value,
      })
      .then((response) => {
        console.log("Problem updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating problem:", error);
      });

    navigate(`/admin/contest/${contestid}`);
  };

  return (
    <div style={{ position: "relative" }}>
      <Navbar />

      <h3 style={{ textAlign: "center", marginTop: "60px" }}>
        Contest Title: {contest.title} (Rated for Div.{contest.div})
      </h3>

      <div
        style={{
          marginLeft: "50px",
          marginLeft: "50px",
          marginRight: "50px",
          marginTop: "20px",
        }}
      >
        <div className="form-group" style={{ width: "100%" }}>
          <label for="problemTitle">
            <p style={{ fontSize: "18px" }}>Problem Title:</p>
          </label>
          <textarea
            style={{ backgroundColor: "#ccc" }}
            className="form-control"
            id="problem_title"
            rows="1"
            placeholder="Enter Problem Title here"
            //   onChange={handleSampleInputChange}
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
          <div className="form-group" style={{ width: "49%" }}>
            <label for="topic">
              <p style={{ fontSize: "18px" }}>Topic:</p>
            </label>
            <textarea
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="topic"
              rows="1"
              placeholder="Enter topic here"
              //   onChange={handleSampleOutputChange}
            ></textarea>
          </div>
          <div className="form-group" style={{ width: "49%" }}>
            <label for="difficultyLevel">
              <p style={{ fontSize: "18px" }}>Difficulty Level:</p>
            </label>
            <textarea
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="difficulty"
              rows="1"
              placeholder="Enter difficulty level here"
              //   onChange={handleSampleOutputChange}
            ></textarea>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "17px",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div className="form-group" style={{ width: "49%" }}>
            <label for="category">
              <p style={{ fontSize: "18px" }}>Category:</p>
            </label>
            <textarea
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="category"
              rows="1"
              placeholder="Enter category here"
              //   onChange={handleSampleOutputChange}
            ></textarea>
          </div>
          <div className="form-group" style={{ width: "49%" }}>
            <label for="time_limit">
              <p style={{ fontSize: "18px" }}>Time Limit: </p>
            </label>
            <textarea
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="time_limit"
              rows="1"
              placeholder="Enter time limit here"
              //   onChange={handleSampleOutputChange}
            ></textarea>
          </div>
        </div>

        <div
          className="form-group"
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          <label for="problemStatement">
            <p style={{ fontSize: "18px" }}>Problem Statement</p>
          </label>
          <textarea
            style={{ backgroundColor: "#ccc" }}
            className="form-control"
            id="problemStatement"
            rows="6"
            placeholder="Enter problem statement here"
            onChange={handleProblemStatementChange}
          ></textarea>
        </div>
        <div
          position="relative"
          style={{
            marginRight: "50px",
            marginTop: "20px",
            width: "48%",
          }}
        >
          <label for="formFileLg" class="form-label">
            Problem Statement File:{" "}
          </label>
          <input
            className="form-control form-control-me"
            id="sampleInputFile"
            type="file"
            onChange={handleProblemStatementFileChange}
          />
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
              placeholder="Enter sample input here"
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
              placeholder="Enter sample output here"
              onChange={handleSampleOutputChange}
            ></textarea>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: "17px",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div
          position="relative"
          style={{
            marginLeft: "50px",
            marginRight: "50px",
            marginTop: "20px",
            width: "48%",
          }}
        >
          <label for="formFileLg" class="form-label">
            Test Cases (Input) File:{" "}
          </label>
          <input
            className="form-control form-control-me"
            id="sampleInputFile"
            type="file"
            onChange={handleInputFileChange}
          />
        </div>

        <div
          position="relative"
          style={{
            marginTop: "20px",
            marginRight: "50px",
            width: "48%",
          }}
        >
          <label for="formFileLg" class="form-label">
            Test Cases (Output) File:{" "}
          </label>
          <input
            className="form-control form-control-me"
            id="sampleOutputFile"
            type="file"
            onChange={handleOutputFileChange}
          />
        </div>
      </div>

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