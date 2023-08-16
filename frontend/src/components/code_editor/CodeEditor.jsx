// ARIF

import React, { useState } from "react";
import AceEditor from "react-ace";
import axios from "axios";

// Import ace themes and modes here if needed
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";

const CodeEditor = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("java"); // Default language
  const [submissionStatus, setSubmissionStatus] = useState("Pending"); // Submission status
  const [codeContent, setCodeContent] = useState(""); // Store the code content

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
    setSubmissionStatus(isCorrect ? "Accepted" : "Wrong Answer");
    

    try {
      const accessToken = "sl.BkMBX6FaxcXuZIt1oUu_wufKB635Ph8WRyWdT9c3i49Bzl42NDU0kxmu5zY4fg_3gdh7O8dP61JOXFiWz46ltGLer3ZW8R0LvvnPM5rSEf0GUUZAwFwpYNrzjfVlL2K2N7OqoHrguuzW"; // Replace with your Dropbox access token
      const content = new Blob([codeContent], { type: "text/plain" });

      // Upload the code content to Dropbox
      await axios.post(
        "https://content.dropboxapi.com/2/files/upload",
        content,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/octet-stream",
            "Dropbox-API-Arg": JSON.stringify({
              path: "/a.cpp", // Specify the path and filename
              mode: "overwrite",
            }),
          },
        }
      );

      console.log("Code uploaded to Dropbox");
      console.log("Code content:", codeContent);
    } catch (error) {
      console.error("Error uploading to Dropbox:", error);
      
    }
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
            <option value="c_cpp">C++</option> {/* Added C++ option */}
            <option value="java">Java</option>
            <option value="python">Python</option>
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
