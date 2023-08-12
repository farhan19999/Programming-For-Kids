// Arif

import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import Navbar from "../../../components/navbar/Navbar";
import Timer from "../../../components/time_remaining/Timer";

export default function AdminMPDetails() {
  const initialCode = `#include <stdio.h>
#include <stdlib.h>
using namespace std;

int main() {
  int a, b;
  cin >> a >> b;
  cout << a + b << endl;
  return 0;
}`;

  const [isEditing, setIsEditing] = useState(false);
  const [code, setCode] = useState(initialCode);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = () => {
    // Implement your save logic here
    console.log("Saving code:", code);
    setIsEditing(false);
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <h2 style={{ marginTop: "35px", position: "relative", marginLeft: "45px", marginTop: "40px" }}>Admin</h2>
      <h4 style={{ textAlign: "center" }}>Mini Project Contest Title: Make A Calculator</h4>
      <Timer />

      <div style={projectDetailsStyle}>
          1. You are given a skeleton code. Modify this code to make a
          calculator. <br />
          2. Make sure that the button colors must be blue. <br />
          <br />
          <b style={{ fontSize: "20px" }}>Code:</b> <br />
      </div>

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
}

// Other styles remain the same

const editButtonStyle = {
  position: "relative",
  bottom: "0px",
  left: "50%",
  marginBottom: "20px",
  marginLeft: "-32px",
  width: "120px",
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
  fontSize:"125px",
  color:"white",
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


const saveButtonStyle = {
  position: "relative", 
  bottom: "0px", // Position at the bottom
  right: "0", // Position at the right
  marginRight: "50px",
  width: "120px",
  marginLeft: "730px",
  marginTop: "5px",
};
