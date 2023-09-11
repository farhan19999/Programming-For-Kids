/*
 *
 *   Author: Arif
 *
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import TimeRemaining from "../../../components/time_remaining/Timer";
import Footer from "../../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import storage from "../../../utils/firebase";
import { ref, uploadBytes } from "firebase/storage";
import AdminNavbar from "../../../components/admin_navbar/AdminNavbar";
import Loading from "../../../components/loading/Loading";

export default function AdminContestProblemDetails() {
  let outputfilename = null;
  let inputfilename = null;
  const [problem, setProblem] = useState(null);

  // const [problemStatement, setProblemStatement] = useState(
  //   null
  // );
  // const [sampleInput, setSampleInput] = useState(null);
  // const [sampleOutput, setSampleOutput] = useState(n);

  // const handleProblemStatementChange = (event) => {
  //   setProblemStatement(event.target.value);
  // };
  // const handleSampleInputChange = (event) => {
  //   setSampleInput(event.target.value);
  // };

  // const handleSampleOutputChange = (event) => {
  //   setSampleOutput(event.target.value);
  // };

  const handleInputFileChange = (event) => {         ///// path : /problems/problemid/testcases/input_timestamp.txt
    const file = event.target.files[0];
    if (file) {
      // create new file in path ./src/files/input.txt and copy the inputContent into it
      // get current timestamp and append it to the filename
      const timestamp = Date.now();
      inputfilename = `input_${timestamp}.txt`;
      const storageRef = ref(storage, `problems/${problemid}/testcases/${inputfilename}`);
      uploadBytes(storageRef, file).then(() => {
        console.log('Uploaded the input test cases file!');
      });
    }
  };

  const handleOutputFileChange = (event) => {         ///// path : /problems/problemid/testcases/output_timestamp.txt
    const file = event.target.files[0];
    if (file) {
      const timestamp = Date.now();
      outputfilename = `output_${timestamp}.txt`;
      const storageRef = ref(storage, `problems/${problemid}/testcases/${outputfilename}`);
      uploadBytes(storageRef, file).then(() => {
        console.log('Uploaded the output test cases file!');
      });
    }
  };

  const { contestid, problemid } = useParams();
  const server_url = process.env.REACT_APP_SERVER_URL;
  const [problemSolution, setProblemSolution] = useState(null);
  useEffect(() => {
    axios
      .get(`${server_url}/api/problems/${problemid}`)
      .then((response) => {
        setProblem(response.data);
        console.log('here problem is : ', problem);
        // setProblemStatement(response.data.problem_statement);
        // setSampleInput(response.data.sample_input);
        // setSampleOutput(response.data.sample_output);
        axios.get(`${server_url}/api/problems/${problemid}/solutions`)
          .then((response) => {
            setProblemSolution(response.data.solutions[0])
            console.log(response.data)
          }
          )
          .catch((error) => {
            console.log('Error fetching data', error);
          }
          )
      });
  }, [problemid]);

  const [contest, setContest] = useState(null);
  useEffect(() => {
    axios
      .get(`${server_url}/api/contests/${contestid}`) // For getting contest title
      .then((response) => {
        const contest = response.data;
        setContest(contest);
      })
      .catch((error) => {
        console.error("Error fetching contest :", error);
      });
  }, [contestid]);

  const navigate = useNavigate();
  const handleCancelClick = () => {
    navigate(`/admin/contest/${contestid}`);
  };
  const handleDeleteClick = () => {
    axios.delete(`${server_url}/api/contests/${contestid}/problems/${problemid}`);
    navigate(`/admin/contest/${contestid}`);
  }


  const handleAddSolutionClick = () => {
    navigate(`/admin/contest/${contestid}/problem/${problemid}/add-solution`);
  }
  const handleModifySolutionClick = () => {
    navigate(`/admin/contest/${contestid}/problem/${problemid}/modify-solution`);
  }

  const handleSaveClick = () => {
    axios
      .put(
        `${server_url}/api/contests/${contestid}/problems/${problemid}`,
        {
          title: problem.title,
          difficulty_level: problem.difficulty_level,
          problem_statement: problem.problemStatement,
          topic: problem.topic,
          sample_input: problem.sampleInput,
          sample_output: problem.sampleOutput,
          time_limit: problem.time_limit,
          category: problem.category,
        }
      )
      .then((response) => {
        console.log("Problem updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating problem:", error);
      });
    if (inputfilename && outputfilename) {
      axios.post(
        `${server_url}/api/contests/${contestid}/problems/${problemid}/testcases`,
        {
          input_file: inputfilename,
          output_file: outputfilename,

        }
      )
        .then((response) => {
          console.log("file updated:", response.data);
        })
        .catch((error) => {
          console.error("Error updating file:", error);
        });
    }


    navigate(`/admin/contest/${contestid}`);
  };

  if (!problem || !contest) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: '1' }}>
          <AdminNavbar />
          <Loading />
          <Footer />
        </div>
      </div>)
  }

  return (
    <div style={{ position: "relative" }}>
      <AdminNavbar />

      <h4 style={{ textAlign: "center", marginTop: "20px" }}>
        Contest Title: {contest.title} (Rated for Div.{contest.div})
      </h4>

      <div style={{ marginTop: "20px" }}>
        <h4 style={{ textAlign: "center" }}>
          Problem Title: <span style={{ textDecoration: "underline" }}>{problem.title}</span>
        </h4>
      </div>


      {/* <TimeRemaining /> */}

      <div
        style={{
          marginLeft: "50px",
          marginLeft: "50px",
          marginRight: "50px",
          marginTop: "20px",
        }}
      >
        <div
          className="form-group"
          style={{
            width: "100%",
          }}
        >
          <label for="problemStatement">
            <p style={{ fontSize: "18px" }}>Problem Statement</p>
          </label>
          <textarea
            style={{ backgroundColor: "#fff" }}
            className="form-control"
            id="problemStatement"
            rows="6"
            value={problem.problem_statement}
            onChange={(e) => problem.problemStatement = e.target.value}
          ></textarea>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "17px",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div className="form-group" style={{ width: "48%" }}>
            <label for="sampleInput">
              <p style={{ fontSize: "18px" }}>Sample Input:</p>
            </label>
            <textarea
              style={{ backgroundColor: "#fff" }}
              className="form-control"
              id="sampleInput"
              rows="3"
              value={problem.sample_input}
              onChange={(e) => problem.sampleInput = e.target.value}
            ></textarea>
          </div>

          <div className="form-group" style={{ width: "48%" }}>
            <label for="sampleOutput">
              <p style={{ fontSize: "18px" }}>Sample Output:</p>
            </label>
            <textarea
              style={{ backgroundColor: "#fff" }}
              className="form-control"
              id="sampleOutput"
              rows="3"
              value={problem.sample_output}
              onChange={(e) => problem.sampleOutput = e.target.value}
            ></textarea>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: "17px",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div
          position="relative"
          style={{
            marginLeft: "50px",
            marginRight: "50px",
            marginTop: "20px",
            width: "48%",
          }}
        >
          <label for="formFileLg" class="form-label">
            Test Cases (Input) File:{" "}
          </label>
          <input
            className="form-control form-control-me"
            id="sampleInputFile"
            type="file"
            onChange={handleInputFileChange}
          />
        </div>
        <div
          position="relative"
          style={{
            marginTop: "20px",
            marginRight: "50px",
            width: "48%",
          }}
        >
          <label for="formFileLg" class="form-label">
            Test Cases (Output) File:{" "}
          </label>
          <input
            className="form-control form-control-me"
            id="sampleOutputFile"
            type="file"
            onChange={handleOutputFileChange}
          />
        </div>
      </div>

      <div className="row" style={{ marginTop: '40px', marginLeft: '40px' }}>
        <div className="col-md-3 mb-3">
          <button
            type="button"
            className="btn btn-dark btn-block"
            style={{ width: '150px' }}
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
        <div className="col-md-6 mb-3 d-flex justify-content-center">

          {
            !problemSolution ?
              (<button
                type="button"
                className="btn btn-dark"
                style={{ width: '140px', marginLeft: '-60px' }}
                onClick={handleAddSolutionClick}
              >
                Add Solution
              </button>):
            (<button
            type="button"
            className="btn btn-dark"
            style={{ width: '140px', marginLeft: '10px' }}
            onClick={handleModifySolutionClick}
          >
            Modify Solution
          </button>)
          }

        </div>
        <div className="col-md-3 mb-3" style={{ display: 'flex', alignItems: 'flex-end' }}>
          <button
            type="button"
            className="btn btn-dark"
            style={{ width: '140px' }}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-dark"
            style={{ width: '140px', marginLeft: '10px' }}
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      </div>




      <Footer />
    </div>
  );
}
