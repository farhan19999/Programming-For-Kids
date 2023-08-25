// Arif

import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function AdminMPindex() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/mini-projects").then((response) => {
      setProject(response.data.mini_projects); // Update to access the 'mini_projects' array in response
      console.log(response.data);
    });
  }, []);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleModifyClick = (projectid) => {
    // Navigate to the specific project details page
    navigate(`/admin/miniprojects/${projectid}`);
  };

  const handleAddBtnClick = () => {
    // Navigate to the specific project details page
    navigate(`/admin/miniprojects/add`);
  };

  return (
    <div>
      <Navbar />
      <h2 style={{ margin: "25px", marginLeft:"50px", fontWeight: "bold" }}>Admin</h2>
      <table
        className="table table-hover"
        style={{ margin: "25px", marginLeft:"50px" ,fontSize: "18px" }}
      >
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
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => handleModifyClick(item.projectid)}
                >
                  + Modify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" onClick={() => handleAddBtnClick()} className="btn btn-dark" style={{position:"absolute" ,width:"190px", height:"42px",marginTop:"10px" ,marginLeft:"50px"}}>
        Add New Project
      </button>


    </div>
  );
}
