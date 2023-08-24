/*
 *
 *   Author: Mahbub
 *
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import storage from "../../../utils/firebase";
import { ref, uploadBytes } from "firebase/storage";

export default function AdminContestProblemDetails() {
    //   const defaultState = {
    //     problemid: 1,
    //     contestid: 1,
    //     title: "Shopping",
    //     difficulty: "Easy",
    //     problem_statement: `If the price of a toy is X and you paid taka Y to the shopkeeper,
    //     calculate how much money you will get back if you buy three of them.

    //     The first line of input is X and the second line is Y. Print the output.`,
    //     topic: "Array",
    //     sample_input: `15
    // 50`,
    //     sample_output: "5",
    //     time_limit: "45",
    //   };

    //   const [problem, setProblem] = useState(defaultState);

    //   const [problemStatement, setProblemStatement] = useState(
    //     problem.problem_statement
    //   );
    //   const [sampleInput, setSampleInput] = useState(problem.sample_input);
    //   const [sampleOutput, setSampleOutput] = useState(problem.sample_output);

    const handleProblemStatementChange = (event) => {
        // setProblemStatement(event.target.value);
    };
    //   const handleSampleInputChange = (event) => {
    //     setSampleInput(event.target.value);
    //   };

    //   const handleSampleOutputChange = (event) => {
    //     setSampleOutput(event.target.value);
    //   };
    //   const [sampleProblemStatementFile, setSampleProblemStatementFile] =
    //     useState(null);
    //   const handleProblemStatementFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //       const reader = new FileReader();
    //       reader.onload = (event) => {
    //         const psContent = event.target.result;
    //         setSampleProblemStatementFile(psContent);
    //       };
    //       reader.readAsText(file);
    //     }
    //   };

    //   const { contestid, problemid } = useParams(); // http://localhost:3001/admin/contest/1/problem/3

    //   useEffect(() => {
    //     axios
    //       .get(`http://localhost:3000/api/problems/${problemid}`)
    //       .then((response) => {
    //         setProblem(response.data);
    //         setProblemStatement(response.data.problem_statement);
    //         setSampleInput(response.data.sample_input);
    //         setSampleOutput(response.data.sample_output);
    //       });
    //   }, [problemid]);

    //   const [contest, setContest] = useState("");
    //   useEffect(() => {
    //     axios
    //       .get(`http://localhost:3000/api/contests/${contestid}`) // For getting contest title
    //       .then((response) => {
    //         const contest = response.data;
    //         setContest(contest);
    //       })
    //       .catch((error) => {
    //         console.error("Error fetching contest :", error);
    //       });
    //   }, [contestid]);

    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate(`/admin/daily-puzzle`);
    };

    const handleSaveClick = () => {
        // axios
        //   .post(`http://localhost:3000/api/contests/${contestid}/problems`, {
        //     title: document.getElementById("problem_title").value,
        //     difficulty_level: document.getElementById("difficulty").value,
        //     problem_statement: sampleProblemStatementFile || problemStatement,
        //     topic: document.getElementById("topic").value,
        //     sample_input: sampleInput,
        //     sample_output: sampleOutput,
        //     time_limit: document.getElementById("time_limit").value,
        //     category: document.getElementById("category").value,
        //   })
        //   .then((response) => {
        //     console.log("Problem updated:", response.data);
        //   })
        //   .catch((error) => {
        //     console.error("Error updating problem:", error);
        //   });

        navigate(`/admin/daily-puzzle`);
    };

    return (
        <div style={{ position: "relative" }}>
            <Navbar />

            <h3 style={{ textAlign: "center", marginTop: "20px" }}>
                Create Daily Puzzle
            </h3>

            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ marginTop: "18px" }}>
                        <div className="form-group">
                            <label htmlFor="problemStatement">
                                <p style={{ fontSize: "18px" }}>Problem Statement :</p>
                            </label>
                            <textarea
                                style={{ backgroundColor: "#eee" }}
                                className="form-control"
                                id="problemStatement"
                                rows="8"
                                placeholder="Enter Problem Statement Here...."
                                onChange={handleProblemStatementChange}
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="problemStatement">
                                <p style={{ fontSize: "18px", marginTop: '20px' }}>Problem Solution :</p>
                            </label>
                            <textarea
                                style={{ backgroundColor: "#eee" }}
                                className="form-control"
                                id="problemStatement"
                                rows="4"
                                placeholder="Enter Problem Solution Here...."
                                onChange={handleProblemStatementChange}
                            ></textarea>
                        </div>

                    </div>
                    <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group">
                            <label htmlFor="solution">
                                <p style={{ fontSize: "19px" }}>Puzzle Code :</p>
                            </label>
                            <textarea
                                style={{ backgroundColor: "#222", color: "white" }}
                                className="form-control"
                                id="solution"
                                rows="15"
                                onChange={handleProblemStatementChange}
                            ></textarea>
                        </div>
                    </div>
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
                    marginLeft: "76%",
                    marginTop: "50px",
                }}
                onClick={handleCancelClick}
            >
                Cancel
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
                onClick={handleSaveClick}
            >
                Save
            </button>

            <Footer />
        </div>
    );
}
