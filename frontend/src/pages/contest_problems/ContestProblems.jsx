// Arif


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SubNavbar from '../../components/sub_navbar/SubNavbar';


const ContestProblems = () => {
  const { contestid } = useParams();
  const [problems, setProblems] = useState([]);
  const [contestTitle, setContestTitle] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/api/problems`)
      .then(response => {
        const contestProblems = response.data.filter(problem => problem.contestid === parseInt(contestid));
        setProblems(contestProblems);

        // Assuming the contest title is available in the first problem's title
        if (contestProblems.length > 0) {
        //   setContestTitle(contestProblems[0].title);
            setContestTitle(`Contest Title: Array Round 1 (Rated for Div. 3)`);
        }
      })
      .catch(error => {
        console.error('Error fetching contest problems:', error);
      });
  }, [contestid]);

  const navigate = useNavigate(); // Initialize useNavigate
  const handleModifyClick = (problemid) => {
    // Navigate to the specific project details page
    navigate(`/contest-problem-details/${problemid}`);
  };



  return (
    <div>
      <Navbar />
      <SubNavbar />
      <h3 style={{ margin: '25px', padding:'25px' }}>{contestTitle}</h3>
      <table className="table table-hover" style={{ margin: '25px', fontSize: '18px' }}>
        <thead>
          <tr>
            <th> </th>
            <th>Title</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {problems.map(problem => (
            <tr key={problem.problemid}>
              <td>{problem.problemid}</td>
              <td>{problem.title}</td>
              <td><button type="button" className="btn btn-dark" onClick={() => handleModifyClick(problem.problemid)}>
                  Enter 
                </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContestProblems;
