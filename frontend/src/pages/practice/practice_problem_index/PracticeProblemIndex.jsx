import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBTable } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import Navbar from '../../../components/navbar/Navbar';

import './PracticeProblemIndex.css';
import SubNavbarPracticeProblem from '../../../components/sub_navbar_practice_problem/SubNavbarPracticeProblem';
import Loading from '../../../components/loading/Loading';

export default function PracticeProblemIndex() {
    const [data, setData] = useState(null);

    // const fetchData = async () => {

    //     try {
    //         const response = await axios.get(`${server_url}/api/problems`);
    //         setData(response.data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };
    
    const server_url = process.env.REACT_APP_SERVER_URL;
    useEffect(() => {
        axios.get(`${server_url}/api/problems`)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log("Error fetching problem :", error);
        });
    }, [server_url]);
    
    

    const columns = ['#', 'Problem', 'Topic', 'Difficulty'];
    if(!data) return (<>
                        <Navbar/>
                        <SubNavbarPracticeProblem/>
                        <div style={{marginLeft:'45%', marginTop:'20px', fontSize:'18px'}}>Practice Problems</div>
                        <div style={{alignContent:'center'}}><Loading/></div></>);
    return (
        <div>
            <Navbar />
            <SubNavbarPracticeProblem />
            <div style={{ fontSize: '24px', marginLeft: '45%' }}><b>Practice Problems</b></div>
            <MDBContainer className='mt-5'>

                <input type="text" id="myInput" style={{ marginLeft: '85%', marginBottom: '5px', borderRadius: '5px', height: '35px' }} onKeyUp={myFunction} placeholder="Search By Topic.." />
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
