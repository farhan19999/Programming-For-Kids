import React from 'react'
// import axios from 'axios';
// import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import Subnavbar from '../../components/sub_navbar/SubNavbar'
import Footer from '../../components/footer/Footer'

export default function SubmissionStatus() {

    const { problemid, userid, contestid } = useParams();
    // const server_url = process.env.REACT_APP_SERVER_URL;
    // const [testcase, settestcase] = useState(null);

    // useEffect(() => {
    //     axios.get(`${server_url}/api/contests/1/problems/5/testcases`)
    //         .then((response) => {
    //             settestcase(response.data);
    //         })
    // }, []);

    return (
        <div>
            <Navbar />
            <Subnavbar />
            <div style={{ margin: "35%", fontSize: "30px", marginTop: "30px", textAlign: "center" }}>
                <b >Your Code is Submitted.</b>
            </div>
            <div className="container" style={{ marginTop: "-540px" }}>
                <div className="row">
                    <div className="col-md-6" style={{ marginTop: "18px" }}>
                        <div className="form-group">
                            <label htmlFor="problemStatement">
                                <p style={{ fontSize: "19px" }}>Passed Test Cases:</p>
                            </label>
                            <textarea
                                style={{ backgroundColor: "#eee", borderRadius: "8px" }}
                                className="form-control"
                                id="passedTestsCases"
                                rows="15"
                                value={""}
                                readOnly={true}
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group">
                            <label htmlFor="solution">
                                <p style={{ fontSize: "19px" }}>Failed Test Cases:</p>
                            </label>
                            <textarea
                                style={{ backgroundColor: "#eee", borderRadius: "8px" }}
                                className="form-control"
                                id="passedTestsCases"
                                rows="15"
                                value={""}
                                readOnly={true}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-6" style={{ marginTop: "20px",marginLeft:'40%' }}>
                <div className="form-group">
                    <label htmlFor="solution">
                        <p style={{ fontSize: "19px" }}>Status:</p>
                    </label>
                    <textarea
                        style={{ backgroundColor: "#eee", borderRadius: "8px",width:'40%' }}
                        className="form-control"
                        id="passedTestsCases"
                        rows="2"
                        value={""}
                        readOnly={true}
                    ></textarea>
                </div>
            </div>

            <Footer />
        </div >
    )
}
