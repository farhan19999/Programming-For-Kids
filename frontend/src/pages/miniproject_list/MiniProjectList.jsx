// Arif

import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function MiniProjectList() {
  const [project, setProject] = useState([]);
  const server_url = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    axios.get(`${server_url}/api/mini-projects`).then((response) => {
      setProject(response.data.mini_projects); // Update to access the 'mini_projects' array in response
      console.log(response.data);
    });
  }, []);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleModifyClick = (projectid) => {
    // Navigate to the specific project details page
    navigate(`/miniproject/${projectid}`);
  };

  return (
    <div>
      <Navbar />
      <h3 style={{ margin: '25px', fontWeight: 'bold', padding:'25px' }}>Mini Project Contest</h3>

      <table className="table table-hover" style={{ margin: '25px', fontSize: '18px' }}>
        <thead>
          <tr>
            <th scope="col"> # </th>
            <th scope="col">Title</th>
            <th scope="col">Action </th>
          </tr>
        </thead>
        <tbody>
          {project.map((item, index) => (
            <tr key={item.projectid}>
              <th scope="row">{index + 1}</th>
              <td>{item.title}</td>
              <td>
                <button type="button" className="btn btn-dark" onClick={() => handleModifyClick(item.projectid)}>
                  Enter 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  
}
