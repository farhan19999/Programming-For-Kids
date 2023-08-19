// ARIF

import React, { useState } from "react";
import AceEditor from "react-ace";
import { useParams } from "react-router-dom";
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
  const { problemid } = useParams();
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
    const contestid = 1;

    const userid = 1;

    axios
      .post(
        `http://localhost:3000/api/contests/${contestid}/submissions/${problemid}/${userid}`,
        {
          submitted_code: null,
          submitted_time:  new Date().toISOString().slice(0, 19).replace('T', ' '),
          language: selectedLanguage, 
          score: null,
          submission_filename: "a.cpp",
        }
      )
      .then((response) => {
        console.log("Code submitted:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting code:", error);
      });

    try {
      const accessToken =
        "sl.BkW5zdaED8f20HjtPlIdfSrr68VBoWZAqSkWjZx71Z8LGTj3hFps30pLOe0WusVsbYAwBfMDv_bFFFT7Hz070Wt3MIxSUzZD2sQZJkP0sS5NXyS046Bnkvtyz1SZhT83DjMqIoYNAV4Cx5A1DJ508ZI";
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
              path: "/a.cpp", // Specify the path and filename : /contest/contestid/userid/A_timestamp.cpp
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
            <option value={"C++"}>C++</option> {/* Added C++ option */}
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
