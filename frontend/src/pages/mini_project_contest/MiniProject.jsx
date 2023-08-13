// Arif

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Timer from "../../components/time_remaining/Timer";

export default function MiniProject() {
  return (
    <div style={containerStyle}>
      <Navbar />
      <h4 style={{ textAlign: "center", marginTop: "35px" }}>
        Mini Project Contest Title: Make A Calculator
      </h4>
      <Timer />

      <div style={projectDetailsStyle}>
        <b style={{ fontSize: "20px" }}>Project Details:</b> <br />
        <p style={{ marginTop: "25px" }}>
          1. You are given a skeleton code. Modify this code to make a
          calculator. <br />
          2. Make sure that the button colors must be blue. <br />
          <br />
          <b style={{ fontSize: "20px" }}>Code:</b> <br />
          <br />
          <samp style={codeBoxStyle}>
            #include &lt;stdio.h&gt; <br />
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
            &#125; <br />
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
