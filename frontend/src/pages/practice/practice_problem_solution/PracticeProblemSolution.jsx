import React, { useEffect, useState } from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar'
import SubNavbarPracticeProblem from '../../../components/sub_navbar_practice_problem/SubNavbarPracticeProblem'
import Footer from '../../../components/footer/Footer'
import axios from 'axios'
import Loading from '../../../components/loading/Loading'
import { Paper } from '@mui/material'

export default function PracticeProblemSolution() {
    const { problemid } = useParams();
    const Navigate = useNavigate();

    const handleGoBackClick = () => {
      Navigate(`/practice/problems/${problemid}`);
    }

    const [solutions, setSolutions] = useState(null);
    const server_url = process.env.REACT_APP_SERVER_URL;
    useEffect(() => {
        if(!problemid) return;
        axios.get(`${server_url}/api/problems/${problemid}/solutions`)
        .then((response) => {
            setSolutions(response.data.solutions);
        })
        .catch((error) => {
            console.log("Error fetching problem :", error);
        });
    }, [server_url, problemid]);

    if(!solutions) return (<><Navbar/><Loading></Loading><Footer></Footer></>);

    return (
        <>
            <Navbar />
            <SubNavbarPracticeProblem />

            <div style={{ marginLeft: '45%', marginTop: "20px", fontSize: "18px" }}>Practice Problem Solutions</div>
            {solutions.map((solution, index) => (
                
                <Paper key={index} style={{ marginLeft: '10%', marginTop: "20px", fontSize: "15px", marginRight:'10%' }}>
                    <pre>{solution.description}</pre>
                    <Link to={solution.video_link}>Watch to learn more</Link>
                </Paper>
            ))}
            

            {/* <MDBContainer>
                <video
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={videoRef}
                    src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
                    type="video/mp4"
                    loop
                    className="w-100"
                ></video>
            </MDBContainer> */}

            <div style={{ marginLeft: '15%' }} >
                <button onClick={handleGoBackClick} type="button" className="btn btn-dark btn-me" style={{ width: '150px' }}>
                    Go Back
                </button>
            </div>

            <Footer />
        </>
    )
}
