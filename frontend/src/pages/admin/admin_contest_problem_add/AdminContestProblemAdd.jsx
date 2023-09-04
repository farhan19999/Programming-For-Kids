/*
 *   Author: Arif
 */
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Loading from "../../../components/loading/Loading";
import { useNavigate } from "react-router-dom";
import storage from "../../../utils/firebase";
import { ref, uploadBytes } from "firebase/storage";

export default function AdminContestProblemDetails() {

  const handleProblemStatementFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const psContent = event.target.result;
  
        // Set the content of the textarea with id "problemStatement"
        const problemStatementTextarea = document.getElementById("problemStatement");
        if (problemStatementTextarea) {
          problemStatementTextarea.value = psContent;
        }
      };
      reader.readAsText(file);
    }
  };
  

  const server_url = process.env.REACT_APP_SERVER_URL;

  const { contestid} = useParams();



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
  }, [server_url, contestid]);

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(`/admin/contest/${contestid}`);
  };

  const handleSave = () => {
    axios
      .post(`${server_url}/api/contests/${contestid}/problems`, {
        title: document.getElementById("problem_title").value,
        difficulty_level: document.getElementById("difficulty").value,
        problem_statement: document.getElementById("problemStatement").value,
        topic: document.getElementById("topic").value,
        sample_input: document.getElementById("sampleInput").value,
        sample_output: document.getElementById("sampleOutput").value,
        time_limit: document.getElementById("time_limit").value,
        category: document.getElementById("category").value,
      })
      .then((response) => {
        console.log("Problem updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating problem:", error);
      });

    navigate(`/admin/contest/${contestid}`);
  };
  if (!contest) {
    return (
      <div>
        <Navbar />
        <Loading />
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <Navbar />

      <h3 style={{ textAlign: "center", marginTop: "60px" }}>
        Contest Title: {contest.title} (Rated for Div.{contest.div})
      </h3>

      <div
        style={{
          marginLeft: "50px",
          // marginLeft: "50px",
          marginRight: "50px",
          marginTop: "20px",
        }}
      >
        <div className="form-group" style={{ width: "100%" }}>
          <label for="problemTitle">
            <p style={{ fontSize: "18px" }}>Problem Title:</p>
          </label>
          <textarea
            style={{ backgroundColor: "#ccc" }}
            className="form-control"
            id="problem_title"
            rows="1"
            placeholder="Enter Problem Title here"
          //   onChange={handleSampleInputChange}
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
          <div className="form-group" style={{ width: "49%" }}>
            <label for="topic">
              <p style={{ fontSize: "18px" }}>Topic:</p>
            </label>
            <textarea
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="topic"
              rows="1"
              placeholder="Enter topic here"
            //   onChange={handleSampleOutputChange}
            ></textarea>
          </div>
          <div className="form-group" style={{ width: "49%" }}>
            <label for="difficultyLevel">
              <p style={{ fontSize: "18px" }}>Difficulty Level:</p>
            </label>
            <textarea
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="difficulty"
              rows="1"
              placeholder="Enter difficulty level here"
            //   onChange={handleSampleOutputChange}
            ></textarea>
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
          <div className="form-group" style={{ width: "49%" }}>
            <label for="category">
              <p style={{ fontSize: "18px" }}>Category:</p>
            </label>
            <textarea
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="category"
              rows="1"
              placeholder="Enter category here"
            //   onChange={handleSampleOutputChange}
            ></textarea>
          </div>
          <div className="form-group" style={{ width: "49%" }}>
            <label for="time_limit">
              <p style={{ fontSize: "18px" }}>Time Limit: </p>
            </label>
            <textarea
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="time_limit"
              rows="1"
              placeholder="Enter time limit here"
            //   onChange={handleSampleOutputChange}
            ></textarea>
          </div>
        </div>

        <div
          className="form-group"
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          <label for="problemStatement">
            <p style={{ fontSize: "18px" }}>Problem Statement</p>
          </label>
          <textarea
            style={{ backgroundColor: "#ccc" }}
            className="form-control"
            id="problemStatement"
            rows="6"
            placeholder="Enter problem statement here"
          ></textarea>
        </div>
        <div
          position="relative"
          style={{
            marginRight: "50px",
            marginTop: "20px",
            width: "48%",
          }}
        >
          <label for="formFileLg" class="form-label">
            Problem Statement File:{" "}
          </label>
          <input
            className="form-control form-control-me"
            id="sampleInputFile"
            type="file"
            onChange={handleProblemStatementFileChange}
          />
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
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="sampleInput"
              rows="3"
              placeholder="Enter sample input here"
              // onChange={handleSampleInputChange}
            ></textarea>
          </div>

          <div className="form-group" style={{ width: "48%" }}>
            <label for="sampleOutput">
              <p style={{ fontSize: "18px" }}>Sample Output:</p>
            </label>
            <textarea
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="sampleOutput"
              rows="3"
              placeholder="Enter sample output here"
              // onChange={handleSampleOutputChange}
            ></textarea>
          </div>
        </div>
      </div>

      {/* <div
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
      </div> */}

      <button
        type="button"
        className="btn btn-dark"
        style={{
          position: "relative",
          bottom: "0px",
          right: "0",
          width: "120px",
          marginLeft: "80%",
          marginTop: "50px",
        }}
        onClick={handleSave}
      >
        Save
      </button>
      <button
        type="button"
        className="btn btn-dark"
        style={{
          position: "relative",
          bottom: "0px",
          right: "0",
          marginRight: "50px",
          width: "120px",
          marginLeft: "10px",
          marginTop: "50px",
        }}
        onClick={handleCancel}
      >
        Cancel
      </button>

      <Footer />
    </div>
  );
}
