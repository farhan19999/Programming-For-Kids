// Arif

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import Navbar from "../../../components/navbar/Navbar";
import Timer from "../../../components/time_remaining/Timer";
import axios from "axios";

const AdminMPDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [code, setCode] = useState("");

  const { projectid } = useParams();

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = () => {
    // Implement save logic here
    axios
      .put(`http://localhost:3000/api/mini-projects/${projectid}`, {
        starting_code: code, // Pass the updated code to the backend
        title: problem.title,
        project_details: problem.project_details,
        starting_time: problem.starting_time,
      })
      .then((response) => {
        console.log("Code saved:", response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error saving code:", error);
      });

    console.log("Saving code:", code);
    setIsEditing(false);
  };

  const [problem, setProblem] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/mini-projects/${projectid}`)
      .then((response) => {
        setProblem(response.data);
        setCode(response.data.starting_code);
        console.log(response.data);
      });
  }, [projectid]);

  return (
    <div style={containerStyle}>
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
      <h3 style={{ textAlign: "center" }}>Mini Project: {problem.title}</h3>
      <Timer />

      <div style={projectDetailsStyle}>
        {problem.project_details}
        <br /> <br />
      </div>
      <p style={{ marginLeft: "50px", fontWeight: "bold" }}>Code:</p>
      {isEditing ? (
        <AceEditor
          mode="c_cpp"
          theme="monokai"
          name="code-editor"
          fontSize={16}
          value={code}
          onChange={handleCodeChange}
          editorProps={{ $blockScrolling: true }}
          style={codeBoxStyle}
        />
      ) : (
        <pre style={codeBoxStyle}>{code}</pre>
      )}

      {!isEditing && (
        <button
          type="button"
          className="btn btn-dark"
          style={editButtonStyle}
          onClick={handleEditButtonClick}
        >
          Edit
        </button>
      )}

      {isEditing && (
        <button
          type="button"
          className="btn btn-dark"
          style={saveButtonStyle}
          onClick={handleSaveButtonClick}
        >
          Save
        </button>
      )}
    </div>
  );
};

const containerStyle = {
  marginBottom: "60px",
  display: "flex",
  flexDirection: "column",
  position: "relative", // Add position relative to the container
};

const projectDetailsStyle = {
  textAlign: "left",
  marginTop: "20px",
  marginLeft: "50px",
  marginRight: "20px",
  marginBottom: "20px",
  fontSize: "18px",
};

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
  marginLeft: "50px",
  width: "800px",
};

const editButtonStyle = {
  position: "relative",
  bottom: "0px",
  left: "50%",
  marginBottom: "20px",
  marginLeft: "-32px",
  width: "120px",
};

const saveButtonStyle = {
  position: "relative",
  bottom: "0px",
  right: "0",
  marginRight: "50px",
  width: "120px",
  marginLeft: "730px",
  marginTop: "5px",
};

export default AdminMPDetails;
