// ARIF


const AdminProblemDetailsEdit = ({ problem, onEdit }) => {
  return (
    <div style={problemDetailsContainerStyle}>
      <div style={titleStyle}>
        <h5 style={{ textAlign: "center", textDecoration: "underline" }}>
          {problem.title}
        </h5>
      </div>
      <div style={sampleBoxStyle1}>
        
      <p>
        {problem.problem_statement}
        <button onClick={() => onEdit("problem_statement")}>Edit</button>
      </p>
      </div>

      <div style={sampleContainerStyle}>
        <div style={sampleBoxStyle}>
          Sample Input:
          <pre>
            {problem.sample_input}
          </pre>
          <button onClick={() => onEdit("sample_input")}>Edit</button>
        </div>
        <div style={sampleBoxStyle}>
          Sample Output:
          <pre>
            {problem.sample_output}
          </pre>
          <button onClick={() => onEdit("sample_output")}>Edit</button>
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
const sampleBoxStyle1=
{
  padding: "10px",
  border: "1px solid #aaa",
  borderRadius: "5px",
  backgroundColor: "#f8f8f8",
  width: "100%", // Adjust as needed
};
export default AdminProblemDetailsEdit;
