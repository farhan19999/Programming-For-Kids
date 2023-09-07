import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBTable } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import Navbar from '../../../components/navbar/Navbar';

import './PracticeProblemIndex.css';

export default function PracticeProblemIndex() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const server_url = process.env.REACT_APP_SERVER_URL;
    const fetchData = async () => {
        try {
            const response = await axios.get(`${server_url}/api/problems`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const columns = ['#', 'Problem', 'Topic', 'Difficulty'];

    return (
        <div>
            <Navbar />
            <MDBContainer className='mt-5'>
                <input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search By Topic.." />

                <MDBTable id="myTable" className="table-bordered">
                    <thead>
                        <tr className="header">
                            {columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.problemid}</td>
                                <td>
                                    <Link to={`/practice/problems/${row.problemid}`}>
                                        {row.title}
                                    </Link>
                                </td>
                                <td>{row.topic}</td>
                                <td>{row.difficulty_level}</td>
                            </tr>
                        ))}
                    </tbody>
                </MDBTable>
            </MDBContainer>
        </div>
    );
}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2]; // Use [2] for the 'Topic' column
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
