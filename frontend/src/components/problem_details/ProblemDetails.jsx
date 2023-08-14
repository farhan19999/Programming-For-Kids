// Arif

import CodeEditor from "../code_editor/CodeEditor";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


const ProblemDetails = () => {
  const defaultState = {
    problemid: 1,
    contestid: 1,
    title: "Shopping",
    difficulty: "Easy",
    problem_statement:
`If the price of a toy is X and you paid taka Y to the shopkeeper,
calculate how much money you will get back if you buy three of them.

The first line of input is X and the second line is Y. Print the output.`,
    topic: "Array",
    sample_input: 
`15
50`,
    sample_output: "5",
    time_limit: "45",
  };

  const { problemid } = useParams();
  const [problem, setProblem] = useState(defaultState);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/problems/${problemid}`).then((response) => {
      // setProblem(defaultState);
      setProblem(response.data);
      console.log(response.data);
    });
  }, [problemid]);

  return (
    <div style={problemDetailsContainerStyle}>
      <div style={titleStyle}>
        <h5 style={{ textAlign: "center", textDecoration: "underline" }}>
          {problem.title}
        </h5>
      </div>
      <p>
        {problem.problem_statement}
        
      </p>

      <div style={sampleContainerStyle}>
        <div style={sampleBoxStyle}>
          Sample Input:
          <pre>
            {problem.sample_input}
          </pre>
        </div>
        <div style={sampleBoxStyle}>
          Sample Output:
          <pre>
            {problem.sample_output}
          </pre>
        </div>
      </div>
    </div>
  );
};

const problemDetailsContainerStyle = {
  marginTop: "25px", // Adjust as needed for spacing
  marginLeft: "50px", // Adjust as needed for spacing
  width: "44%", // Limiting the width to prevent crossing the middle portion
  fontSize: "18px",
};

const titleStyle = {
  marginBottom: "16px", // Add some spacing between the title and details
};

const sampleContainerStyle = {
  display: "flex",
  fontSize: "17px",
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
