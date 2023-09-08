import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar'
import SubNavbarPracticeProblem from '../../../components/sub_navbar_practice_problem/SubNavbarPracticeProblem'
import Footer from '../../../components/footer/Footer'

export default function PracticeProblemSolution() {
    const {problemid} = useParams();
    const Navigate = useNavigate();
    const handleGoBackClick = () => {
      Navigate(`/practice/problem/${problemid}`);
    }
    return (
        <div>
            <Navbar />
            <SubNavbarPracticeProblem />

            <div style={{ marginLeft: '45%', marginTop: "20px", fontSize: "18px" }}>Practice Problem </div>

            <div style={{ margin: '20px', marginLeft: '10%', padding: "10px", border: "1px solid #aaa", borderRadius: "5px", backgroundColor: "#f8f8f8", width: "80%", height: "200px" }}>
                Solution
            </div>


            <div style={{ marginLeft: '15%' }} >
                <button onClick={handleGoBackClick} type="button" className="btn btn-dark btn-me" style={{ width: '150px' }}>
                    Go Back
                </button>
            </div>
            <Footer />
        </div>
    )
}