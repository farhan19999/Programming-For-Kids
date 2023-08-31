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

export default function AdminContestProblemDetails() {
    const defaultState = {
        puzzleid: 1,
        date: "2024-01-01T01:00:00.000Z",
        problem: "What is the output of the following code?",
        puzzle_code: "#include <stdio.h>\r\nint main() {\r\n    int x = 5;\r\n    printf(\"%d\\n\", x++);\r\n    printf(\"%d\\n\", x);\r\n    return 0;\r\n}",
        solution: "5\r\n6",
        language: "c",
    };

    const [puzzle, setPuzzle] = useState(defaultState);
    const [puzzleproblemStatement, setPuzzleProblemStatement] = useState(puzzle.problem);
    const [solution, setSolution] = useState(puzzle.solution);
    const [puzzle_code, setPuzzle_Code] = useState(puzzle.puzzle_code);


    const handlePuzzleProblemStatementChange = (event) => {
        setPuzzleProblemStatement(event.target.value);
    };
    const handleSolutionChange = (event) => {
        setSolution(event.target.value);
    };
    const handlePuzzleCodeChange = (event) => {
        setPuzzle_Code(event.target.value);
    };



    const { puzzleid } = useParams(); // http://localhost:3001/admin/puzzles/1

    const server_url = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/puzzles/${puzzleid}`)
            .then((response) => {
                setPuzzle(response.data);
                setPuzzleProblemStatement(response.data.problem);
                setSolution(response.data.solution);
                setPuzzle_Code(response.data.puzzle_code);
            });
    }, [puzzleid]);

    const navigate = useNavigate();
    const handleCancelClick = () => {
        navigate(`/admin/daily-puzzle`);
    };

    const handleDeleteClick = () => {
        axios
            .delete(
                `http://localhost:3000/api/puzzles/11`
            )
            .then((response) => {
                console.log("Problem deleted:", response.data);
            })
            .catch((error) => {
                console.error("Error deleting problem:", error);
            });
        navigate(`/admin/daily-puzzle`);
    }

    const handleSaveClick = () => {
        // const formattedDate = new Date().toLocaleString('en-US', {
        //     year: 'numeric',
        //     month: 'long',
        //     day: 'numeric',
        //     hour: 'numeric',
        //     minute: 'numeric',
        //     second: 'numeric',
        //     timeZoneName: 'short'
        // });
        axios
            .put(
                `${server_url}/api/puzzles/1`,
                {
                    problem: puzzleproblemStatement,
                    puzzle_code: puzzle_code,
                    solution: solution,
                    // date:formattedDate,
                }
            )
            .then((response) => {
                console.log("Problem updated:", response.data);
            })
            .catch((error) => {
                console.error("Error updating problem:", error);
            });

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
                                value={puzzleproblemStatement}
                                onChange={handlePuzzleProblemStatementChange}
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
                                value={solution}
                                onChange={handleSolutionChange}
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
                                value={puzzle_code}
                                onChange={handlePuzzleCodeChange}
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
                    marginLeft: "07%",
                    marginTop: "50px",
                }}
                onClick={handleDeleteClick}
            >
                Delete
            </button>

            <button
                type="button"
                className="btn btn-dark"
                style={{
                    position: "relative",
                    bottom: "0px",
                    right: "0",
                    width: "120px",
                    marginLeft: "930px",
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
