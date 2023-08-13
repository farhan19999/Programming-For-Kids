// Arif

import {useState,useEffect} from 'react';
import axios from 'axios';
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Timer from "../../components/time_remaining/Timer";

export default function MiniProject() {

  const defaultState = {
    "projectid": 1,
    "title": "To-Do List Application",
    "project_details": "Create a simple to-do list application that allows users to add, edit, and delete tasks.",
    "starting_code": `
    #include <stdio.h>
    #include <stdlib.h>
    #include <math.h>
    #include <string.h>
    #include <ctype.h>
    using namespace std; 
    int main() 
    {
        int a, b; 
        cin >> a >> b; 
        cout << a + b << endl; 
        cin >> a >> b; 
        cout << a + b << endl;
        // ... rest of the code ...
        return 0; 
    }`,
    "starting_time": "2023-08-05T10:00:00.000Z"
  }


  const [problem, setProblem] = useState(defaultState);
  useEffect(() => {
    axios.get('http://localhost:3000/api/mini-projects/1').then((response) => {
      setProblem(response.data);
      console.log(response.data);
  });
  }, []);



  return (
    <div style={containerStyle}>
      <Navbar />
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
            {/* #include &lt;stdio.h&gt; <br />
            #include &lt;stdlib.h&gt; <br />
            #include &lt;math.h&gt; <br />
            #include &lt;string.h&gt; <br />
            #include &lt;ctype.h&gt; <br />
            using namespace std; <br />
            int main() <br />
            &#123; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;int a, b; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;cin &gt;&gt; a &gt;&gt; b; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; a + b &lt;&lt; endl; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;int a, b; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;cin &gt;&gt; a &gt;&gt; b; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; a + b &lt;&lt; endl; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;int a, b; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;cin &gt;&gt; a &gt;&gt; b; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; a + b &lt;&lt; endl; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;int a, b; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;cin &gt;&gt; a &gt;&gt; b; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; a + b &lt;&lt; endl; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return 0; <br />
            &#125; <br /> */}
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
