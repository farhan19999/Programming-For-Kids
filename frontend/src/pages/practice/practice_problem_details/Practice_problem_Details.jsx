import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import ProblemDetails from "../../../components/problem_details/ProblemDetails";
import CodeEditor from "../../../components/code_editor/CodeEditor";
import Footer from "../../../components/footer/Footer";
import Loading from "../../../components/loading/Loading";
import SubNavbarPracticeProblem from "../../../components/sub_navbar_practice_problem/SubNavbarPracticeProblem";

export default function PracticeProblemDetails() {


    const { problemid } = useParams();
    const [problem, setProblem] = useState(null);
    const server_url = process.env.REACT_APP_SERVER_URL;
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${server_url}/api/problems/${problemid}`)
            .then((response) => {
                setProblem(response.data);
                console.log(response.data);
            });
    }, [server_url,problemid]);

    if (!problem) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <div style={{ flex: '1' }}>
                    <Navbar />
                    <Loading />
                    <Footer />
                </div>
            </div>)
    }

    const handleDiscussionClick = () => {
        navigate(`/practice/problems/${problemid}/discussion`);

    }

    const handleSolutionClick = () => {
        navigate(`/practice/problems/${problemid}/solution`);
    }


    return (
        <div style={{ position: "relative" }}>
            <Navbar />
            <SubNavbarPracticeProblem/>
            {/* <SubNavbar userid={userid}/> */}

            <h4 style={{ textAlign: "center", marginTop: "20px" }}>
                Practice Problem
            </h4>

            <div style={{ display: "flex" }}>
                <ProblemDetails problem={problem} />
                <div style={{ marginLeft: "22px", marginTop: "26px", flex: "1" }}>
                    <CodeEditor />
                </div>
            </div>
            <div style={{ marginLeft: '15%' }} >
                {/* <button onClick={handleDiscussionClick} type="button" className="btn btn-dark btn-me" style={{ width: '150px' }}>
                    Discussion
                </button> */}

                <button onClick={handleSolutionClick} type="button" className="btn btn-dark btn-me" style={{ width: '150px', marginLeft: '20px' }}>
                    Solution
                </button>


            </div>
            <Footer />
        </div>
    );
}
