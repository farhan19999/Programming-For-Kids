// Mahbub

import React, { useState, useEffect } from 'react'; 
import Navbar from '../../../components/navbar/Navbar' 
import Footer from '../../../components/footer/Footer'; 
import Timer from '../../../components/time_remaining/Timer'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
 
function AdminContestAdd() { 
    const [contestData, setContestData] = useState({ contests: [] }); // Initialize with an object containing an empty array
    const navigate = useNavigate(); 
  
    useEffect(() => { 
        axios.get(`http://localhost:3000/api/contests/`) 
            .then(response => { 
                const contestDataFromApi = response.data; 
                setContestData(contestDataFromApi); 
            }) 
            .catch(error => { 
                console.error('Error fetching contests:', error); 
            });  
    }, []); 
 
    const handleModifyClick = (contestid) => { 
        navigate(`/admin/contest/${contestid}`); 
    } 
 
    const handleAddNewContestClick = () => {
        navigate(`/admin-contest-add-new`); 
    } 
 
    return ( 
        <div> 
            <Navbar /> 
 
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}> 
                <h3>Created Contests:</h3> 
            </div>   
 
            <h2 style={{ margin: "25px", marginLeft: "50px", fontWeight: "bold" }}>Admin</h2> 
            <table 
                className="table table-hover" 
                style={{ margin: "25px", marginLeft: "50px", fontSize: "18px" }}   
            > 
                <thead> 
                    <tr> 
                        <th scope="col">#</th> 
                        <th scope="col">Contest Title</th> 
                        <th scope='col'>Remaining Time</th> 
                        <th scope="col">Actions</th> 
                    </tr> 
                </thead> 
                <tbody> 
                    {contestData.contests.map(contest => (
                        <tr key={contest.contestid}>
                            <td>{contest.contestid}</td>
                            <td>{contest.title}</td>
                            <td></td>
                            <td>
                                <button type="button" className="btn btn-dark" onClick={() => handleModifyClick(contest.contestid)}>
                                    Modify 
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr> 
                        <td colSpan="4">
                            <button type="button" onClick={handleAddNewContestClick} className="btn btn-dark" style={{ width: "190px", height: "42px", marginTop: "10px", marginLeft: "38%" }}>
                                Add New Contest
                            </button>
                        </td>
                    </tr> 
                </tbody> 
            </table> 
            <Footer /> 
        </div> 
    ) 
} 
 
export default AdminContestAdd; 
 