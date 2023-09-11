import React, { useCallback, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';
import Navbar from '../../../components/navbar/Navbar';
import SubNavbarPracticeProblem from '../../../components/sub_navbar_practice_problem/SubNavbarPracticeProblem';
import Footer from '../../../components/footer/Footer';

export default function PracticeProblemSolution() {
    const { problemid } = useParams();
    const Navigate = useNavigate();

    const handleGoBackClick = () => {
        Navigate(`/practice/problem/${problemid}`);
    }

    const videoRef = useRef(null);

    const handleMouseEnter = useCallback(() => {
        videoRef.current.play();
    }, []);

    const handleMouseLeave = useCallback(() => {
        videoRef.current.pause();
    }, []);

    return (
        <>
            <Navbar />
            <SubNavbarPracticeProblem />

            <div style={{ marginLeft: '45%', marginTop: "20px", fontSize: "18px" }}>Practice Problem </div>

            <div style={{ margin: '20px', marginLeft: '10%', padding: "10px", border: "1px solid #aaa", borderRadius: "5px", backgroundColor: "#f8f8f8", width: "80%", height: "200px" }}>
                Solution
            </div>

            <MDBContainer>
                <video
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={videoRef}
                    src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
                    type="video/mp4"
                    loop
                    className="w-100"
                ></video>
            </MDBContainer>

            <div style={{ marginLeft: '15%' }} >
                <button onClick={handleGoBackClick} type="button" className="btn btn-dark btn-me" style={{ width: '150px' }}>
                    Go Back
                </button>
            </div>

            <Footer />
        </>
    )
}
