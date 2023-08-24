// Mahbub

import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminPuzzle() {
    const [puzzlesData, setPuzzlesData] = useState({ puzzles: [] }); // Initialize with an object containing an empty array
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/puzzles/`)
            .then(response => {
                const puzzleDataFromApi = response.data;
                setPuzzlesData(puzzleDataFromApi);
            })
            .catch(error => {
                console.error('Error fetching contests:', error);
            });
    }, []);

    const handleModifyClick = (puzzleid) => {
        // navigate(`/admin/contest/${contestid}`); 
    }

    const handleAddNewContestClick = () => {
        // navigate(`/admin/contest-add-new`); 
    }

    return (
        <div>
            <Navbar />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                <h3>Created Puzzles:</h3>
            </div>

            <h2 style={{ margin: "25px", marginLeft: "50px", fontWeight: "bold" }}>Admin</h2>
            <table
                className="table table-hover"
                style={{ margin: "25px", marginLeft: "50px", fontSize: "18px" }}
            >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Creation Date</th>
                        <th scope="col">Puzzle Details</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {puzzlesData.puzzles.map(puzzles => (
                        <tr key={puzzles.puzzleid}>
                            <td>{puzzles.puzzleid}</td>
                            <td>{puzzles.date}</td>
                            <td>{puzzles.problem}</td>
                            <td>
                                <button type="button" className="btn btn-dark" onClick={() => handleModifyClick(puzzles.puzzleid)}>
                                    Modify
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="4">
                            <button type="button" onClick={handleAddNewContestClick} className="btn btn-dark" style={{ width: "190px", height: "42px", marginTop: "10px", marginLeft: "38%" }}>
                                Add New Puzzle
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Footer />
        </div>
    )
}

export default AdminPuzzle;
