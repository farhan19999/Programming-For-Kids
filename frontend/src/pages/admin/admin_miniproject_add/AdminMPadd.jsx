import React, { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import DatePicker from "../../../components/datePicker/DatePicker";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AceEditor from "react-ace";

export default function AdminMPadd() {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [startingCode, setStartingCode] = useState("");
  const [startingTime, setStartingTime] = useState(""); // Add startingTime state

  const navigate = useNavigate();
  const handleCodeChange = (newCode) => {
    setStartingCode(newCode);
  };

  const server_url = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleSave = () => {
    axios
      .post(`${server_url}/api/mini-projects`, {
        title: projectTitle,
        project_description: projectDescription,
        starting_code: startingCode,
        starting_time: startingTime, // Use startingTime from state
      })
      .then((response) => {
        console.log("Mini Project added:", response.data);
      })
      .catch((error) => {
        console.error("Error adding Mini Project:", error);
        console.log("Response data:", error.response.data); // Log the response data if available
      });

    navigate("/admin/miniprojects"); // Redirect to admin page after saving

  };

  const handleCancel = () => {
    navigate("/admin/miniprojects"); // Redirect to admin page
  };

  return (
    <div style={{ position: "relative" }}>
      <Navbar />

      <h3 style={{ textAlign: "center", marginTop: "20px" }}>
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
          <input
            style={{ backgroundColor: "#fff" }}
            type="text"
            className="form-control"
            id="projectTitle"
            placeholder="Enter Project Title here"
            value={projectTitle}
            onChange={(event) => setProjectTitle(event.target.value)}
          />
        </div>

        <div className="form-group" style={{ width: "100%", marginTop: "20px" }}>
          <label htmlFor="projectDescription">
            <p style={{ fontSize: "18px" }}>Project Description:</p>
          </label>
          <textarea
            style={{ backgroundColor: "#fff" }}
            className="form-control"
            id="projectDescription"
            rows="4"
            placeholder="Enter Project Description here"
            value={projectDescription}
            onChange={(event) => setProjectDescription(event.target.value)}
          ></textarea>
        </div>

        <div className="form-group" style={{ width: "100%", marginTop: "20px" }}>
          <label htmlFor="startingCode">
            <p style={{ fontSize: "18px" }}> Code Template:</p>
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
        </div>

        <div className="form-group" style={{ width: "60%", marginTop: "20px" }}>
          <DatePicker
            id={'domp'}
            value={startingTime}
            onChange={(date) => setStartingTime(date)} // Update startingTime state
          />
        </div>
      </div>

      <button
        type="button"
        className="btn btn-dark"
        style={{
          width: "120px",
          marginLeft: "80%",
          marginTop: "20px",
        }}
        onClick={handleCancel}
      >
        Cancel
      </button>

      <button
        type="button"
        className="btn btn-dark"
        style={{
          width: "120px",
          marginLeft: "89%",
          marginTop: "-66px",
        }}
        onClick={handleSave}
      >
        Save
      </button>

      <Footer />
    </div>
  );
}

const codeBoxStyle = {
  backgroundColor: "#444",
  fontSize: "17px",
  color: "white",
  padding: "20px",
  borderRadius: "5px",
  fontFamily: "monospace",
  lineHeight: "1.5",
  display: "block",
  whiteSpace: "pre-wrap",
  overflowX: "auto",
  marginRight: "30px",
  width: "800px",
};
