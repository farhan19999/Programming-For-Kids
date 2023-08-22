//Author: MAHBUB
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function ShowTermsOfAgreements({ userid, contestid }) {

    const navigate = useNavigate(); // Initialize useNavigate
    userid=1;
    const handleRegisterButton = () => {
        axios.post(`http://localhost:3000/api/users/${userid}/registered-contests`,
            {
                userid: userid,
                contestid: contestid,
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        navigate(`/user/${userid}/contests/`);

    }
    return (
        
        <div className="row">
            <div className="d-flex justify-content-center align-items-center shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                Do not copy
                <br />
                Please submit on time
                <br />
                Do not search on chatgpt
            </div>
            <button className="btn btn-dark ml-auto rounded-pill px-2 py-2" onClick={() => handleRegisterButton()} type="button">Register Now</button>
        </div>
    );
};

export default ShowTermsOfAgreements;
