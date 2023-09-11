import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AdminNavbar from '../../../components/admin_navbar/AdminNavbar'
import Footer from '../../../components/footer/Footer'
import Loading from '../../../components/loading/Loading';

export default function AdminAddSolution() {
    const Navigate = useNavigate();
    const { contestid, problemid } = useParams();
    const [problem, setProblem] = useState(null);

    const [problemSolution, setProblemSolution] = useState('');

    const server_url = process.env.REACT_APP_SERVER_URL;
    useEffect(() => {
        if (!contestid || !problemid) return;
        axios.get(`${server_url}/api/contests/${contestid}/problems/${problemid}`)
            .then((response) => {
                setProblem(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log('Error fetching data', error);
            })
    }, [contestid, problemid])

    const handleCancelClick = () => {
        Navigate(`/admin/contest/${contestid}/problem/${problemid}`);
    }

    const handleSaveClick = () => {
        axios
            .post(`${server_url}/api/problems/${problemid}/solutions`,
                {
                    problemid: problemid,
                    description: document.getElementById('solution').value,
                    video_link: document.getElementById('video_link').value,
                }
            )
            .then((response) => {
                console.log('Successfully saved problem:', response.data);
                Navigate(`/admin/contest/${contestid}/problem/${problemid}`);
            })
            .catch((error) => {
                console.error('Error saving problem:', error);
            });

    }
    if (!problem) {
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
                <h4 style={{ textAlign: "center", marginTop: '20px' }}>Problem Title: {problem.title} (Add Solution)</h4>
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
                                // value={""}
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
                                // value={""}
                                // onChange={handleSolutionCodeChange}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '40px', marginLeft: '100px' }}>

                    <div className="col-md-3 mb-3" style={{ display: 'flex', alignItems: 'flex-end', marginLeft: '70%' }}>
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
            </div>
            <Footer />
        </div>
    )
}
