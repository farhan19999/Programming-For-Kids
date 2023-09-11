import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from '../../../components/admin_navbar/AdminNavbar'
import Footer from '../../../components/footer/Footer'
import Loading from '../../../components/loading/Loading';

export default function AdminModifySolution() {

    const Navigate = useNavigate();
    const { contestid, problemid } = useParams();
    const [problem, setProblem] = useState(null);
    const [problemSolution, setProblemSolution] = useState(null);

    const server_url = process.env.REACT_APP_SERVER_URL;
    useEffect(() => {
        if (!contestid || !problemid) return;
        axios.get(`${server_url}/api/contests/${contestid}/problems/${problemid}`)
            .then((response) => {
                setProblem(response.data)
                console.log(response.data)
                axios.get(`${server_url}/api/problems/${problemid}/solutions`)
                    .then((response) => {
                        setProblemSolution(response.data.solutions[0])
                        console.log(response.data)
                    }
                    )
                    .catch((error) => {
                        console.log('Error fetching data', error);
                    }
                    )

            })
            .catch((error) => {
                console.log('Error fetching data', error);
            })
    }, [contestid, problemid])


    const handleSolutionCodeChange = (event) => {
        setProblemSolution({
            ...problemSolution,
            description: event.target.value,
        });
    };
    const handleSolutionVideoChange = (event) => {
        setProblemSolution({
            ...problemSolution,
            video_link: event.target.value,
        });
    };

    const handleDeleteClick = () => {
        axios
            .delete(`${server_url}/api/problems/${problemid}/solutions/${problemSolution.solutionid}`)
            .then((response) => {
                console.log(response.data);
                Navigate(`/admin/contest/${contestid}/problem/${problemid}`);
            })
            .catch((error) => {
                console.error('Error deleting problem:', error);
            });
    }

    const handleCancelClick = () => {
        Navigate(`/admin/contest/${contestid}/problem/${problemid}`);
    }

    const handleSaveClick = () => {

        axios
            .put(`${server_url}/api/problems/${problemid}/solutions/${problemSolution.solutionid}`, problemSolution)
            .then((response) => {
                console.log('Successfully saved problem:', response.data);
                Navigate(`/admin/contest/${contestid}/problem/${problemid}`);
            })
            .catch((error) => {
                console.error('Error saving problem:', error);
            });

    }
    if (!problem || !problemSolution) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <div style={{ flex: '1' }}>
                    <AdminNavbar />
                    <Loading />
                    <Footer />
                </div>
            </div>)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AdminNavbar />
            <div style={{ flex: '1' }}>
                <h4 style={{ textAlign: "center", marginTop: '20px' }}>Problem Title: {problem.title} (Modify Solution) </h4>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" style={{ marginTop: "20px" }}>
                            <div className="form-group">
                                <label htmlFor="problemStatement">
                                    <p style={{ fontSize: "18px" }}>Video Link:</p>
                                </label>
                                <textarea
                                    style={{ backgroundColor: "#fff", height: "" }}
                                    className="form-control"
                                    id="video_link"
                                    rows="4"
                                    value={problemSolution.video_link}
                                    onChange={handleSolutionVideoChange}
                                ></textarea>
                            </div>

                        </div>
                        <div className="col-md-8" style={{ marginTop: "18px" }}>
                            <div className="form-group">
                                <label htmlFor="solution">
                                    <p style={{ fontSize: "19px" }}>Solution:</p>
                                </label>
                                <textarea
                                    style={{ backgroundColor: "#222", color: "white" }}
                                    className="form-control"
                                    id="solution"
                                    rows="20"
                                    value={problemSolution.description}
                                    onChange={handleSolutionCodeChange}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '40px', marginLeft: '100px' }}>
                    <div className="col-md-3 mb-3">
                        <button
                            type="button"
                            className="btn btn-dark btn-block"
                            style={{ width: '150px' }}
                            onClick={handleDeleteClick}
                        >
                            Delete
                        </button>
                    </div>

                    <div className="col-md-3 mb-3" style={{ display: 'flex', alignItems: 'flex-end', marginLeft: '650px' }}>
                        <button
                            type="button"
                            className="btn btn-dark"
                            style={{ width: '140px' }}
                            onClick={handleCancelClick}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-dark"
                            style={{ width: '140px', marginLeft: '10px' }}
                            onClick={handleSaveClick}
                        >
                            Save
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}