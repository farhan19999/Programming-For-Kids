//Author:Mahbub
import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer';
import Timer from '../../../components/time_remaining/Timer';

function AdminContestProblemsIndex() {
    return (
        <div>
            <Navbar />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                <h3>Contest Title: Array Round 1</h3>
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

                    <tr >
                        <th scope="row">1</th>
                        <td>Sum of two integers</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-dark"
                            // onClick={() => handleModifyClick(item.projectid)}
                            >
                                + Modify
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>


            <button type="button" className="btn btn-dark" style={{ position: "absolute", width: "190px", height: "42px", marginTop: "10px", marginLeft: "45%" }}>
                Add New Problem
            </button>

            <Footer />
        </div>
    )
}

export default AdminContestProblemsIndex;
