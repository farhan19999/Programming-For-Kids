// Arif

import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function AdminMPindex() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/mini-projects').then((response) => {
      setProject(response.data.mini_projects); // Update to access the 'mini_projects' array in response
      console.log(response.data);
    });
  }, []);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleModifyClick = () => {
    // Navigate to the general details page
    navigate('/admin-miniproject-details');
  };

  return (
    <div>
      <Navbar />
      <h2 style={{ margin: '25px', fontWeight: 'bold' }}>Admin</h2>
      <table className="table table-hover" style={{ margin: '25px', fontSize: '18px' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {project.map((item, index) => (
            <tr key={item.projectid}>
              <th scope="row">{index + 1}</th>
              <td>{item.title}</td>
              <td>
                <button type="button" className="btn btn-dark" onClick={handleModifyClick}>
                  + Modify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  
}
