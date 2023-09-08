// ARIF

import React, { useState } from "react";
import AceEditor from "react-ace";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import storage from "../../utils/firebase";
import { ref, uploadBytes } from "firebase/storage";

// Import ace themes and modes here if needed
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";

const CodeEditor = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("c_cpp"); // Default language
  const [submissionStatus, setSubmissionStatus] = useState("Pending"); // Submission status
  const [codeContent, setCodeContent] = useState(""); // Store the code content
  const { contestid, problemid } = useParams();
  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const handleCodeChange = (newCode) => {
    setCodeContent(newCode);
  };

  const handleSubmit = async () => {
    // Simulate submission logic here
    const isCorrect = false;
    // Replace with actual submission logic
    setSubmissionStatus(isCorrect ? "Pending" : "Pending");
    const userid = 1;

    try {
      const content = new Blob([codeContent], { type: "text/plain" });

      // Upload the code content to FIREBASE
      const timestamp = Date.now();
      const filename = `${userid}_${problemid}_${timestamp}.c`;
      const storageRef = ref(storage, `/contests/${contestid}/submissions/${userid}/${filename}`);
      await uploadBytes(storageRef, content);

      console.log("Code uploaded to Firebase Storage");
      console.log("Code content:", codeContent); // since code upload successful, now do post request to backend
      const server_url = process.env.REACT_APP_SERVER_URL;
      axios
        .post(
          `${server_url}/api/contests/${contestid}/submissions/${problemid}/${userid}`,
          {
            submitted_code: null,
            submitted_time: new Date()
              .toISOString()
              .slice(0, 19)
              .replace("T", " "),
            language: selectedLanguage,
            submission_filename: filename,
          }
        )
        .then((response) => {
          console.log("Code submitted:", response.data);
        })
        .catch((error) => {
          console.error("Error submitting code:", error);
        });
    } catch (error) {
      console.error("Error uploading to Firebase:", error);
    }

    navigate(`/contest/${contestid}/my-submissions`);

    // navigate(`/contest/${contestid}/problem/${problemid}/submission-status`);
    // navigate(`/online`);

  };

  return (
    <div>
      <div style={editorHeaderStyle}>
        <div style={editorTitleStyle}>Editor:</div>
        <div style={languageSelectContainerStyle}>
          <label htmlFor="languageSelect">Select Language:</label>
          <select
            id="languageSelect"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value={"c_cpp"}>C</option> 
            <option value={"java"}>Java</option>
            <option value={"python"}>Python</option>
            {/* Add more language options here */}
          </select>
        </div>
      </div>

      <div style={editorContainerStyle}>
        <div style={editorStyle}>
          <AceEditor
            mode={selectedLanguage}
            theme="monokai"
            width="300%"
            height="396px"
            fontSize={14}
            fontColor="#666"
            style={{ backgroundColor: "#555" }} //  background color
            onChange={handleCodeChange}
          />
        </div>
      </div>

      {/* Add a submit button */}
      <div style={submitButtonContainerStyle} class="d-flex ">
        <button
          onClick={handleSubmit}
          type="button"
          class="btn btn-dark btn-me"
        >
          Submit
        </button>
      </div>
      {submissionStatus && (
        <div style={statusBoxStyle}>
          <span>Status: </span>
          <span
            style={{
              color:
                submissionStatus === "Accepted"
                  ? "green"
                  : submissionStatus === "Pending"
                  ? "blue"
                  : "red",
            }}
          >
            {submissionStatus}
          </span>
        </div>
      )}
    </div>
  );
};

const statusBoxStyle = {
  marginTop: "10px",
  display: "flex",
  alignItems: "center",
  color: "#333",
  marginBottom: "20px",
};

const submitButtonContainerStyle = {
  display: "flex",
  justifyContent: "flex-start", // Align button to the right
  marginTop: "10px",
};

const editorContainerStyle = {
  display: "flex",
  justifyContent: "flex-right", // Place editor on the right side
  marginTop: "2px", // Adjust as needed for spacing
  width: "32.6%",
  flexDirection: "column",
};

const editorHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
};

const languageSelectContainerStyle = {
  display: "flex",
  alignItems: "center",
  marginRight: "18px", // Add some spacing between the label and select
};

const editorTitleStyle = {
  fontWeight: "bold",
};

const editorStyle = {
  flex: "1 1 auto", // Allow to grow and shrink, take remaining space
};

export default CodeEditor;
