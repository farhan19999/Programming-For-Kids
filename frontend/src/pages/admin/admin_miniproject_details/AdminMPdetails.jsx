// Arif

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

export default function AdminMPDetails() {
  const defaultState = {
  };

  const { projectid } = useParams();

  const [project, setProject] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [code, setCode] = useState('');

  const server_url = process.env.REACT_APP_SERVER_URL;
  const handleProjectDetailsChange = (event) => {
    setProjectDetails(event.target.value);
  };
  
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${server_url}/api/mini-projects/${projectid}`)
      .then((response) => {
        setProject(response.data);
        setCode(response.data.starting_code);
        setProjectDetails(response.data.project_details);
        console.log(response.data);
      });
  }, [projectid]);

  const navigate = useNavigate();
  const handleCancelClick = () => {
    navigate(`/admin/miniprojects`);
  };

  const handleDeleteClick = () => {
    axios
      .delete(
        `${server_url}/api/mini-projects/${projectid}`
      )
      .then((response) => {
        console.log("Problem deleted:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting problem:", error);
      });
    navigate(`/admin/miniprojects`);
  }

  const handleSaveClick = () => {
    axios
      .put(`${server_url}/api/mini-projects/${projectid}`, {
        starting_code: code, // Pass the updated code to the backend
        title: project.title,
        project_details: projectDetails,
        starting_time: project.starting_time,
      })
      .then((response) => {
        console.log("Code saved:", response.data);
      })
      .catch((error) => {
        console.error("Error saving code:", error);
      });

    console.log("Saving code:", code);
    navigate(`/admin/miniprojects`);
  };

  const [problem, setProblem] = useState({});
  useEffect(() => {
    axios
      .get(`${server_url}/api/mini-projects/${projectid}`)
      .then((response) => {
        setProblem(response.data);
        setCode(response.data.starting_code);
        console.log(response.data);
      });
  }, [server_url,projectid]);

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <h2
        style={{
          marginTop: "95px",
          position: "relative",
          marginLeft: "45px",
        }}
      >
        Admin
      </h2>
      <h3 style={{ textAlign: "center" }}>Mini Project: {project.title}</h3>

      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{ marginTop: "20px" }}>
            <div className="form-group">
              <label htmlFor="problemStatement">
                <p style={{ fontSize: "18px" }}>Project Details:</p>
              </label>
              <textarea
                style={{ backgroundColor: "#eee", height:"" }}
                className="form-control"
                id="problemStatement"
                rows="15"
                value={projectDetails}
                onChange={handleProjectDetailsChange}
              ></textarea>
            </div>

          </div>
          <div className="col-md-6" style={{ marginTop: "18px" }}>
            <div className="form-group">
              <label htmlFor="solution">
                <p style={{ fontSize: "19px" }}>Puzzle Code :</p>
              </label>
              <textarea
                style={{ backgroundColor: "#222", color: "white" }}
                className="form-control"
                id="solution"
                rows="15"
                value={code}
                onChange={handleCodeChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-dark"
        style={{
          position: "relative",
          bottom: "0px",
          right: "0",
          width: "120px",
          marginLeft: "07%",
          marginTop: "50px",
        }}
        onClick={handleDeleteClick}
      >
        Delete
      </button>

      <button
        type="button"
        className="btn btn-dark"
        style={{
          position: "relative",
          bottom: "0px",
          right: "0",
          width: "120px",
          marginLeft: "930px",
          marginTop: "50px",
        }}
        onClick={handleCancelClick}
      >
        Cancel
      </button>
      <button
        type="button"
        className="btn btn-dark"
        style={{
          position: "relative",
          bottom: "0px",
          right: "0",
          marginRight: "50px",
          width: "120px",
          marginLeft: "10px",
          marginTop: "50px",
        }}
        onClick={handleSaveClick}
      >
        Save
      </button>

      <Footer />
    </div>
  );
}
