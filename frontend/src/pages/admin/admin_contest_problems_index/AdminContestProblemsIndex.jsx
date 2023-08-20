//Author:Mahbub
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer';
import Timer from '../../../components/time_remaining/Timer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import DateTimePicker from '../../../components/date_time_picker/DateTimerPicker';


function AdminContestProblemsIndex() {

    // const { contestid } = useParams();
    const contestid = 1;
    const [problems, setProblems] = useState([]);
    const [contest, setContest] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:3000/api/contests/${contestid}`)
            .then(response => {
                const contest = response.data;
                setContest(contest);

            })
            .catch(error => {
                console.error('Error fetching contest :', error);
            });
    }, [contestid]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/contests/${contestid}/problems`)
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
        navigate(`/admin-contest-problem-add`);
    }

    const handleSaveClick = () => {
        navigate(`/admin-contest-add`);
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
                            <td>{problem.problemid}</td>
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


            <button type="button" className="btn btn-dark" onClick={() => handleAddProblemClick()} style={{ position: "absolute", width: "190px", height: "42px", marginTop: "10px", marginLeft: "73%" }}>
                Add New Problem
            </button>
            <button type="button" className="btn btn-dark" onClick={() => handleSaveClick()} style={{ position: "absolute", width: "120px", height: "42px", marginTop: "10px", marginLeft: "88%" }}>
                Save
            </button>
            <div>
                <DateTimePicker />
            </div>
            {/* <div>
                <input-duration id="bob"></input-duration><br />

                <script type="module">
                    import id from 'https://cdn.jsdelivr.net/npm/input-duration/+esm'
                </script>
            </div> */}

            <Footer />
        </div>
    )
}

export default AdminContestProblemsIndex;
