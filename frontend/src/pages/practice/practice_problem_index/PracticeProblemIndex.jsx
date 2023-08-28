import React from 'react';
import { MDBContainer, MDBTable } from 'mdb-react-ui-kit';
import Navbar from '../../../components/navbar/Navbar';

import './PracticeProblemIndex.css'; // Import your CSS file for styling (if needed)

export default function PracticeProblemIndex() {
    const basicData = {
        columns: ['#', 'Problem', 'Topic', 'Submissions'],
        rows: [
            ['1', 'Sum Array', 'Array', 16],
            // ... add more rows here ...
            ['2', 'Max Element', 'Array', 12],
            ['3', 'Palindrome Check', 'String', 8],
            ['4', 'Prime Numbers', 'Math', 22],
            ['5', 'Fibonacci Sequence', 'Math', 10],
            ['6', 'Factorial', 'Math', 18],
            ['7', 'Binary Search', 'Algorithm', 15],
            ['8', 'Linear Search', 'Algorithm', 14],
            ['9', 'Sorting Array', 'Array', 20],
            ['10', 'String Reversal', 'String', 11],
            // ... add more rows as needed ...
        ],
    };

    return (
        <div>
            <Navbar />
            <MDBContainer className='mt-5'>
                <input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search By Topic.." />

                <MDBTable id="myTable" className="table-bordered"> {/* Add the 'table-bordered' class */}
                    <thead>
                        <tr className="header">
                            {basicData.columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {basicData.rows.map((row, index) => (
                            <tr key={index}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
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
