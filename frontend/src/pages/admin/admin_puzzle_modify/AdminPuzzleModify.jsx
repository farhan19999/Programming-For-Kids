/*
 *
 *   Author: Mahbub
 *
 */
//TODO #9:Need to show date in the date picker value.

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import DatePicker from "../../../components/datePicker/DatePicker";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/loading/Loading";
import moment from "moment";
import AdminNavbar from "../../../components/admin_navbar/AdminNavbar";

export default function AdminPuzzleModify() {

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

    const server_url = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        axios
            .get(`${server_url}/api/puzzles/${puzzleid}`)
            .then((response) => {
                setPuzzle(response.data);
            });
    }, [puzzleid]);

    const formattedDate = puzzle ? moment(puzzle.date).format('YYYY-MM-DD') : '';



    const navigate = useNavigate();
    const handleCancelClick = () => {
        navigate(`/admin/daily-puzzle`);
    };

    const handleDeleteClick = () => {
        axios
            .delete(
                `${server_url}/api/puzzles/${puzzleid}`
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
        axios
            .put(
                `${server_url}/api/puzzles/${puzzle.puzzleid}`,
                {
                    problem: puzzle.problem,
                    puzzle_code: puzzle.puzzle_code,
                    solution: puzzle.solution,
                    date: puzzle.date,
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

    if (!puzzle) {
        return (
            <div>
                <AdminNavbar />
                <Loading />
                <Footer />
            </div>

        );
    }

    return (
        <div style={{ position: "relative" }}>
            <AdminNavbar />
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>
                Modify Daily Puzzle
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
                                value={puzzle.problem}
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
                                id="solution"
                                rows="4"
                                value={puzzle.solution}
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
                                id="puzzle_code"
                                rows="15"
                                value={puzzle.puzzle_code}
                                onChange={handlePuzzleCodeChange}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>


            <div onChange={handleDateChange} style={{ marginTop: '20px', marginLeft: '110px', fontSize: "18px" }}><DatePicker label={"Select Puzzle Date"} date={puzzle.date} id={'dop'} /></div>


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
