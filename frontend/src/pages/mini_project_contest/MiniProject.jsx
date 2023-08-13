// Arif

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import Navbar from "../../components/navbar/Navbar";
import Timer from "../../components/time_remaining/Timer";
import SubNavbar from '../../components/sub_navbar/SubNavbar';
import axios from 'axios';

export default function MiniProject() {

  // const defaultState = {
  //   "projectid": 1,
  //   "title": "To-Do List Application",
  //   "project_details": "Create a simple to-do list application that allows users to add, edit, and delete tasks.",
  //   "starting_code": `
  //   #include <stdio.h>
  //   #include <stdlib.h>
  //   #include <math.h>
  //   #include <string.h>
  //   #include <ctype.h>
  //   using namespace std; 
  //   int main() 
  //   {
  //       int a, b; 
  //       cin >> a >> b; 
  //       cout << a + b << endl; 
  //       cin >> a >> b; 
  //       cout << a + b << endl;
  //       // ... rest of the code ...
  //       return 0; 
  //   }`,
  //   "starting_time": "2023-08-05T10:00:00.000Z"
  // }


  const [code, setCode] = useState('');
  const { projectid } = useParams();

  const [problem, setProblem] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3000/api/mini-projects/${projectid}`).then((response) => {
      setProblem(response.data);
      setCode(response.data.starting_code);
      console.log(response.data);
    });
  }, [projectid]);



  return (
    <div style={containerStyle}>
      <Navbar />
      <SubNavbar />
      <h4 style={{ textAlign: "center", marginTop: "35px" }}>
        Mini Project Contest Title: {problem.title}
      </h4>
      <Timer />

      <div style={projectDetailsStyle}>
        <b style={{ fontSize: "20px" }}>Project Details:</b> <br />
        <p style={{ marginTop: "25px" }}>
          {problem.project_details}
          <br /> <br />
          <b style={{ fontSize: "20px" }}>Code:</b> <br />
          <br />
          <samp style={codeBoxStyle}>  
            {problem.starting_code}
          </samp>
        </p>
      </div>

      <div class="file-upload-wrapper" style={fileUploadWrapperStyle}>
        <label htmlFor="input-file-now" class="file-upload-label">
          Upload File: &nbsp;
        </label>
        <input type="file" id="input-file-now" class="file-upload" />
      </div>

      <button type="button" id="submit" name="submit" class="btn btn-dark" style={submitButtonStyle}>
        Submit
      </button>

    </div>
  );
}

const containerStyle = {
  marginBottom:"60px",
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
  fontSize: "17px",
};

const codeBoxStyle = {
  backgroundColor: "#bbb",
  padding: "20px",
  borderRadius: "5px",
  fontSize: "15px",
  fontFamily: "monospace",
  lineHeight: "1.5",
  display: "block",
  whiteSpace: "pre-wrap",
  overflowX: "auto",
  marginRight: "30px",
};

const fileUploadWrapperStyle = {
  marginBottom: "40px",
  marginLeft: "50px",
  color: "white",
  textAlign: "center",
  backgroundColor: "#bbb",
  padding: "16px 16px",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  color: "black",
  marginLeft: "50px",
  cursor: "pointer",
  borderRadius: "5px",
  width: "400px",
};


const submitButtonStyle = {
    
  position: "absolute", // Set position to absolute
  bottom: "50px", // Position at the bottom
  right: "0", // Position at the right
  marginRight: "50px",
  width: "120px",
};
