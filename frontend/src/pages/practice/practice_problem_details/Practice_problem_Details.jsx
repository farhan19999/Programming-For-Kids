import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import ProblemDetails from "../../../components/problem_details/ProblemDetails";
import CodeEditor from "../../../components/code_editor/CodeEditor";
import Footer from "../../../components/footer/Footer";
import Loading from "../../../components/loading/Loading";

export default function PracticeProblemDetails() {

    const { problemid } = useParams();
    const [problem, setProblem] = useState(null);
    const server_url = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        axios
            .get(`${server_url}/api/problems/${problemid}`)
            .then((response) => {
                setProblem(response.data);
                console.log(response.data);
            });
    }, [problemid]);

    if (!problem) {
        return (
            <div>
                <Navbar />
                <Loading />
                <Footer />
            </div>
        );
    }


    return (
        <div style={{ position: "relative" }}>
            <Navbar />
            {/* <SubNavbar contestid={contestid} /> */}

            <h4 style={{ textAlign: "center", marginTop: "20px" }}>
                Practice Problem
            </h4>

            <div style={{ display: "flex" }}>
                <ProblemDetails problem={problem} />
                <div style={{ marginLeft: "22px", marginTop: "26px", flex: "1" }}>
                    <CodeEditor />
                </div>
            </div>
            <Footer />
        </div>
    );
}
