// ARIF

import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import AceEditor from "react-ace";

export default function AdminMPadd() {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [startingCode, setStartingCode] = useState("");
  const [startingTime, setStartingTime] = useState("");

  const navigate = useNavigate();
  const handleCodeChange = (newCode) => {
    setStartingCode(newCode);
  };
  const server_url = process.env.REACT_APP_SERVER_URL;

  const handleSave = () => {
    // Perform saving logic here using the values of projectTitle, projectDescription, startingCode, startingTime
    // For example: make an API request to save the data to the backend
    axios
      .post(`${server_url}/api/mini-projects`, {
        title: projectTitle,
        project_description: projectDescription,
        starting_code: startingCode,
        starting_time: startingTime,
      })
      .then((response) => {
        console.log("Mini Project added:", response.data);
      })
      .catch((error) => {
        console.error("Error adding Mini Project:", error);
      });

    navigate("/admin/miniprojects"); // Redirect to admin page after saving
  };

  const handleCancel = () => {
    navigate("/admin/miniprojects"); // Redirect to admin page
  };

  const handleStartingCodeFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const codeContent = event.target.result;
        setStartingCode(codeContent);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Navbar />

      <h3 style={{ textAlign: "center", marginTop: "90px" }}>
        Add Mini Project
      </h3>

      <div
        style={{
          marginLeft: "50px",
          marginRight: "50px",
          marginTop: "20px",
        }}
      >
        <div className="form-group" style={{ width: "100%" }}>
          <label htmlFor="projectTitle">
            <p style={{ fontSize: "18px" }}>Project Title:</p>
          </label>
          <textarea
            style={{ backgroundColor: "#ccc" }}
            className="form-control"
            id="projectTitle"
            rows="1"
            placeholder="Enter Project Title here"
            value={projectTitle}
            onChange={(event) => setProjectTitle(event.target.value)}
          ></textarea>
        </div>

        <div
          className="form-group"
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          <label htmlFor="projectDescription">
            <p style={{ fontSize: "18px" }}>Project Description:</p>
          </label>
          <textarea
            style={{ backgroundColor: "#ccc" }}
            className="form-control"
            id="projectDescription"
            rows="4"
            placeholder="Enter Project Description here"
            value={projectDescription}
            onChange={(event) => setProjectDescription(event.target.value)}
          ></textarea>
        </div>

        <div
          className="form-group"
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          <label htmlFor="startingCode">
            <p style={{ fontSize: "18px" }}>Starting Code:</p>
          </label>
          <div
            className="form-group"
            style={{
              width: "100%",
              marginTop: "20px",
            }}
          >
            <label htmlFor="startingCode">
              <p style={{ fontSize: "18px" }}>Starting Code:</p>
            </label>
            <AceEditor
              mode="c_cpp"
              theme="monokai"
              name="code-editor"
              fontSize={16}
              value={startingCode}
              onChange={handleCodeChange}
              editorProps={{ $blockScrolling: true }}
              style={codeBoxStyle}
            />
            <label htmlFor="startingCodeFile">
              <p style={{ fontSize: "18px" }}>Upload Starting Code File:</p>
            </label>
            <input
              className="form-control form-control-me"
              id="startingCodeFile"
              type="file"
              // accept=".cpp,.c" // Accept only certain file types
              onChange={handleStartingCodeFileChange}
            />
          </div>
        </div>

        <div
          className="form-group"
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          <label htmlFor="startingTime">
            <p style={{ fontSize: "18px" }}>Starting Time:</p>
          </label>
          <textarea
            style={{ backgroundColor: "#ccc" }}
            className="form-control"
            id="startingTime"
            rows="1"
            placeholder="Enter Starting Time here"
            value={startingTime}
            onChange={(event) => setStartingTime(event.target.value)}
          ></textarea>
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
          marginLeft: "80%",
          marginTop: "50px",
        }}
        onClick={handleSave}
      >
        Save
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
        onClick={handleCancel}
      >
        Cancel
      </button>

      <Footer />
    </div>
  );
}

const codeBoxStyle = {
  backgroundColor: "#444",
  fontSize: "125px",
  color: "white",
  padding: "20px",
  borderRadius: "5px",
  fontSize: "17px",
  fontFamily: "monospace",
  lineHeight: "1.5",
  display: "block",
  whiteSpace: "pre-wrap",
  overflowX: "auto",
  marginRight: "30px",
  // marginLeft: "50px",
  width: "800px",
};
