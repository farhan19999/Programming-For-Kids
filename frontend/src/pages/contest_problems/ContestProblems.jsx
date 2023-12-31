// Arif
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SubNavbar from '../../components/sub_navbar/SubNavbar';
import Loading from '../../components/loading/Loading';


const ContestProblems = () => {
  const { contestid } = useParams();
  const [problems, setProblems] = useState([]);
  const [contest, setContest] = useState('');
  const server_url = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    axios.get(`${server_url}/api/contests/${contestid}`)   // For getting contest title
      .then(response => {
        const contest = response.data;
        setContest(contest);
      })
      .catch(error => {
        console.error('Error fetching contest :', error);
      });
  }, [server_url,contestid]);



  useEffect(() => {
    axios.get(`${server_url}/api/contests/${contestid}/problems`)
      .then(response => {
        const contestProblems = response.data.filter(problem => problem.contestid === parseInt(contestid));
        setProblems(contestProblems);

      })
      .catch(error => {
        console.error('Error fetching contest problems:', error);
      });
  }, [server_url,contestid]);

  const navigate = useNavigate(); // Initialize useNavigate
  const handleEnterClick = (problemid) => {
    // Navigate to the specific project details page
    navigate(`/contest/${contestid}/problem/${problemid}`);
  };

  if(!contest || !problems) return (<Loading />);

  return (
    <div>
      <Navbar />
      <SubNavbar contestid={contestid}/>
      <h3 style={{ margin: '25px', padding:'2px' }}>Contest Title: {contest.title} (Rated for Div.{contest.div})</h3>
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
              <td>{problem.category}</td>
              <td>{problem.title}</td>
              <td><button type="button" className="btn btn-dark" onClick={() => handleEnterClick(problem.problemid)}>
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
