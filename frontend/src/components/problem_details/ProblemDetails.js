// Arif

import React from 'react';
import CodeEditor from '../code_editor/CodeEditor';

const ProblemDetails = () => {
  return (
    <div style={problemDetailsContainerStyle}>
      <div style={titleStyle}>
        <h5 style={{ textAlign: "center", textDecoration: "underline" }}>A. Shopping</h5>
      </div>
      <p>
        If the price of a toy is X and you paid taka Y to the shopkeeper, calculate how much money you will get back if you buy three of them.
        <br />The first line of input is X and the second line is Y.
        Print the output.
      </p>
      
      <div style={sampleContainerStyle}>
        <div style={sampleBoxStyle}>
          Sample Input:
          <pre>15<br />
            50</pre>
        </div>
        <div style={sampleBoxStyle}>
          Sample Output:
          <pre>5</pre>
        </div>
      </div>

    </div>
  );
};

const problemDetailsContainerStyle = {
  marginTop: "25px", // Adjust as needed for spacing
  marginLeft: "50px", // Adjust as needed for spacing
  maxWidth: "44%", // Limiting the width to prevent crossing the middle portion
  fontSize: "18px",
};

const titleStyle = {
  marginBottom: "16px", // Add some spacing between the title and details
};

const sampleContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px", // Add spacing between problem description and sample boxes
};

const sampleBoxStyle = {
  padding: "10px",
  border: "1px solid #aaa",
  borderRadius: "5px",
  backgroundColor: "#f8f8f8",
  width: "48%", // Adjust as needed
};

export default ProblemDetails;
