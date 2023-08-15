//Author:Mahbub
import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer';
import Timer from '../../../components/time_remaining/Timer';

function AdminContestAdd() {
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
                        <th scope="col">Title</th>
                        <th scope='col'>Remaining Time</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                        <tr >
                            <th scope="row">1</th>
                            <td>Array Round-1</td>
                            <td>time</td>
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

            <button type="button"  className="btn btn-dark" style={{ position: "absolute", width: "190px", height: "42px", marginTop: "10px", marginLeft: "650px" }}>
                Add New Contest
            </button>
            
            <Footer />
        </div>
    )
}

export default AdminContestAdd;
