import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import SubNavbar from "../../../components/sub_navbar/SubNavbar";
import TimeRemaining from "../../../components/time_remaining/Timer";
import CodeEditor from "../../../components/code_editor/CodeEditor";
import Footer from "../../../components/footer/Footer";
import AdminProblemDetailsEdit from "../../../components/admin_problem_details_edit/AdminProblemDetailsEdit";

export default function AdminContestProblemDetails() {
  const defaultState = {
    problemid: 1,
    contestid: 1,
    title: "Shopping",
    difficulty: "Easy",
    problem_statement: `If the price of a toy is X and you paid taka Y to the shopkeeper,
    calculate how much money you will get back if you buy three of them.
    
    The first line of input is X and the second line is Y. Print the output.`,
    topic: "Array",
    sample_input: `15
    50`,
    sample_output: "5",
    time_limit: "45",
  };

  const [problem, setProblem] = useState(defaultState);
  const [editingField, setEditingField] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  const { problemid } = useParams();
  const contestid = 1;

  useEffect(() => {
    axios.get(`http://localhost:3000/api/problems/${problemid}`).then((response) => {
      setProblem(response.data);
      console.log(response.data);
    });
  }, [problemid]);

  const handleEdit = (field) => {
    setEditingField(field);
    setEditedValue(problem[field]);
  };

  const handleSave = () => {
    if (editingField && editedValue !== problem[editingField]) {
      const updatedProblem = {
        ...problem,
        [editingField]: editedValue,
      };

      axios
        .put(
          `http://localhost:3000/api/contests/${contestid}/problems/${problemid}`,
          updatedProblem
        )
        .then((response) => {
          setProblem(updatedProblem);
          console.log("Problem updated:", response.data);
          setEditingField(null);
        })
        .catch((error) => {
          console.error("Error updating problem:", error);
        });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <SubNavbar />

      <h4 style={{ textAlign: "center", marginTop: "20px" }}>
        Contest Title: Array Round 1 (Rated for Div. 3)
      </h4>

      <TimeRemaining />

      <div style={{ display: "flex", justifyContent: "left", width: "200%" }}>
        <AdminProblemDetailsEdit
          problem={problem}
          editingField={editingField}
          editedValue={editedValue}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={() => {
            setEditingField(null);
            setEditedValue("");
          }}
        />
      </div>

      <label for="formFileLg" class="form-label">Test Cases (Input) File: </label>
        <input className="form-control form-control-lg" id="formFileLg" type="file" />


        <label for="formFileLg" class="form-label">Test Cases (Output) File: </label>
        <input className="form-control form-control-lg" id="formFileLg" type="file" />

      <Footer />
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 16a49a2ff23b0600c35dc92d40a0793e2324c616
