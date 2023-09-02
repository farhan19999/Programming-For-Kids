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
import DatePicker from "../../../components/datePicker/DatePicker";
import { useNavigate } from "react-router-dom";
import storage from "../../../utils/firebase";
import moment from "moment";
export default function AdminContestProblemDetails() {

    const server_url = process.env.REACT_APP_SERVER_URL;
    const [puzzle, setPuzzle] = useState(null);

    const handlePuzzleProblemStatementChange = (event) => {
        setPuzzle({
            ...puzzle,
            problem: event.target.value,
        });
    };

    const handleSolutionChange = (event) => {
        setPuzzle({
            ...puzzle,
            solution: event.target.value,
        });
    };

    const handlePuzzleCodeChange = (event) => {
        setPuzzle({
            ...puzzle,
            puzzle_code: event.target.value,
        });
    };

    const handleDateChange = (event) => {
        setPuzzle({
            ...puzzle,
            date: event.target.value,
        });
    }

    const { puzzleid } = useParams();
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate(`/admin/daily-puzzle`);
    };

    const handleSaveClick = () => {

        const date = document.getElementById('dop').value;
        let res;
        axios.get(`${server_url}/api/puzzles/date/${date}`)
            .then((reponse) => {
                res = reponse;
                alert(` Puzzle Already exits for this date`);
                // console.log(reponse.data);
            }
            )
            .catch((error) => {
                res = error;
                console.error("Error is: ", error);

                axios
                    .post(`${server_url}/api/puzzles/`, {
                        problem: document.getElementById("problemStatement").value,
                        solution: document.getElementById("problemSolution").value,
                        puzzle_code: document.getElementById("puzzle_code").value,
                        date: document.getElementById("dop").value,

                    })
                    .then((response) => {
                        console.log("Problem updated:", response.data);
                    })
                    .catch((error) => {
                        console.error("Error updating problem:", error);
                    });
            }
            )
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
                                onChange={handlePuzzleProblemStatementChange}
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="problemSolution">
                                <p style={{ fontSize: "18px", marginTop: '20px' }}>Problem Solution :</p>
                            </label>
                            <textarea
                                style={{ backgroundColor: "#eee" }}
                                className="form-control"
                                id="problemSolution"
                                rows="4"
                                placeholder="Enter Problem Solution Here...."
                                onChange={handleSolutionChange}
                            ></textarea>
                        </div>

                    </div>
                    <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group">
                            <label htmlFor="puzzleCode">
                                <p style={{ fontSize: "19px" }}>Puzzle Code :</p>
                            </label>
                            <textarea
                                style={{ backgroundColor: "#222", color: "white" }}
                                className="form-control"
                                id="puzzle_code"
                                rows="15"
                                onChange={handlePuzzleCodeChange}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div onChange={handleDateChange} style={{ marginTop: '20px', marginLeft: '110px', fontSize: "18px" }}><DatePicker id={'dop'} /></div>

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
        </div >
    );
}