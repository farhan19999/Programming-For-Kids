//Author:Mahbub
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function AdminContestProblemsIndex() {
    
    const default_contestid=1;
    const { contestid,problemid } = useParams();
    if(!contestid)contestid = default_contestid;
    const [problems, setProblems] = useState([]);
    const [contest, setContest] = useState('');
    const server_url = process.env.REACT_APP_SERVER_URL;
    useEffect(() => {
        axios.get(`${server_url}/api/contests/${contestid}`)
            .then(response => {
                const contest = response.data;
                setContest(contest);

            })
            .catch(error => {
                console.error('Error fetching contest :', error);
            });
    }, [contestid]);

    useEffect(() => {
        axios.get(`${server_url}/api/contests/${contestid}/problems`)
            .then(response => {
                const contestProblems = response.data.filter(problem => problem.contestid === parseInt(contestid));
                setProblems(contestProblems);

            })
            .catch(error => {
                console.error('Error fetching contest problems:', error);
            });
    }, [contestid]);

    const navigate = useNavigate(); // Initialize useNavigate
    const handleModifyClick = (problemid) => {
        // Navigate to the specific project details page
        navigate(`/admin/contest/${contestid}/problem/${problemid}`);
    };
    const handleAddProblemClick = () => {
        navigate(`/admin/contest/${contestid}/problem-add`); //navigate(`/admin-contest-problem-add`);
    }

    const handleSaveClick = () => {
        navigate(`/admin/contests/`);
    }
    const handleDeleteClick=()=>{
        axios
        .delete(
            `${server_url}/api/contests/${contestid}`
        )
        .then((response) => {
            console.log("Problem deleted:", response.data);
        })
        .catch((error) => {
            console.error("Error deleting problem:", error);
        });
        navigate(`/admin/contests/`);
    }
    return (
        <div>
            <Navbar />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                <h3>Contest Title: {contest.title} (Rated for Div.{contest.div})</h3>
            </div>

            <h2 style={{ margin: "25px", marginLeft: "50px", fontWeight: "bold" }}>Admin</h2>
            <table
                className="table table-hover"
                style={{ margin: "25px", marginLeft: "50px", fontSize: "18px" }}
            >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Problem Title</th>
                        <th scope='col'> </th>
                        <th scope='col'> </th>
                        <th scope='col'> </th>
                        <th scope='col'> </th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {problems.map(problem => (
                        <tr key={problem.problemid}>
                            <td>{problem.category}</td>
                            <td>{problem.title}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button type="button" className="btn btn-dark" onClick={() => handleModifyClick(problem.problemid)}>
                                Modify
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <button type="button" className="btn btn-dark" onClick={() => handleDeleteClick()} style={{ position: "absolute", width: "120px", height: "42px", marginTop: "10px", marginLeft: "5%" }}>
                Delete
            </button>

            <button type="button" className="btn btn-dark" onClick={() => handleAddProblemClick()} style={{ position: "absolute", width: "190px", height: "42px", marginTop: "10px", marginLeft: "73%" }}>
                Add New Problem
            </button>
            <button type="button" className="btn btn-dark" onClick={() => handleSaveClick()} style={{ position: "absolute", width: "120px", height: "42px", marginTop: "10px", marginLeft: "88%" }}>
                Save
            </button>

            <Footer />
        </div>
    )
}

export default AdminContestProblemsIndex;
