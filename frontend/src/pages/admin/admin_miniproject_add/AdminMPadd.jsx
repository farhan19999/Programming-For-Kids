import React, { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import DatePicker from "../../../components/datePicker/DatePicker";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AceEditor from "react-ace";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { ref, uploadBytes } from "firebase/storage";
import storage from "../../../utils/firebase";
import AdminNavbar from "../../../components/navbar/AdminNavbar";

export default function AdminMPadd() {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [startingCode, setStartingCode] = useState(null);
  const [testCode, setTestCode] = useState(null);
  const [startingTime, setStartingTime] = useState("");

  const navigate = useNavigate();
  const handleCodeChange = (newCode) => {
    setStartingCode(newCode);
  };

  const server_url = process.env.REACT_APP_SERVER_URL;

  const handleSave = async () => {
    const template_file = startingCode;
    const test_code_file = testCode;
    const timestamp = Date.now();
    let storageRef = ref(storage, `/projects/templates/${template_file}_${timestamp}`);
    await uploadBytes(storageRef, template_file);
    storageRef = ref(storage, `/projects/tester/${test_code_file}_${timestamp}`);
    await uploadBytes(storageRef, test_code_file);
    axios
      .post(`${server_url}/api/mini-projects`, {
        title: projectTitle,
        project_description: projectDescription,
        starting_code: template_file.name+"_"+timestamp,
        starting_time: startingTime.format(),
        test_code: test_code_file.name+"_"+timestamp,
        duration: document.getElementById("duration").value,
        max_score: document.getElementById("max_score").value,
      })
      .then((response) => {
        console.log("Mini Project added:", response.data);
      })
      .catch((error) => {
        console.error("Error adding Mini Project:", error);
        console.log("Response data:", error.response.data); // Log the response data if available
      });
    navigate("/admin/miniprojects"); // Redirect to admin page after saving
    // console.log({
    //   title: projectTitle,
    //   project_description: projectDescription,
    //   starting_code: template_file.name + "_" + timestamp,
    //   starting_time: startingTime.format(),
    //   test_code: test_code_file.name + "_" + timestamp,
    //   duration: document.getElementById("duration").value,
    //   max_score: document.getElementById("max_score").value,
    // });

  };

  const handleCancel = () => {
    navigate("/admin/miniprojects"); // Redirect to admin page
  };

  return (
    <div style={{ position: "relative" }}>
      <AdminNavbar />

      <h3 style={{ textAlign: "center", marginTop: "20px" }}>
        Add Mini Project
      </h3>

      <div
        style={{
          marginLeft: "50px",
          marginRight: "50px",
          marginTop: "20px",
        }}
      >
        <div className="form-group" style={{ width: "100%" }}>
          <label htmlFor="projectTitle">
            <p style={{ fontSize: "18px" }}>Project Title:</p>
          </label>
          <input
            style={{ backgroundColor: "#fff" }}
            type="text"
            className="form-control"
            id="projectTitle"
            placeholder="Enter Project Title here"
            value={projectTitle}
            onChange={(event) => setProjectTitle(event.target.value)}
          />
        </div>

        <div className="form-group" style={{ width: "100%", marginTop: "20px" }}>
          <label htmlFor="projectDescription">
            <p style={{ fontSize: "18px" }}>Project Description:</p>
          </label>
          <textarea
            style={{ backgroundColor: "#fff" }}
            className="form-control"
            id="projectDescription"
            rows="4"
            placeholder="Enter Project Description here"
            value={projectDescription}
            onChange={(event) => setProjectDescription(event.target.value)}
          ></textarea>
        </div>

        <div className="form-group" style={{ width: "100%", marginTop: "20px" }}>
          <label htmlFor="startingCode">
            <p style={{ fontSize: "18px" }}> Code Template:</p>
          </label>
          <div
            className="form-group"
            style={{
              width: "100%",
              marginTop: "20px",
            }}
          >
            {/* <AceEditor
              mode="c_cpp"
              theme="monokai"
              name="code-editor"
              fontSize={16}
              value={startingCode}
              onChange={handleCodeChange}
              editorProps={{ $blockScrolling: true }}
              style={codeBoxStyle}
            /> */}
            <label htmlFor="startingCodeFile">
              <p style={{ fontSize: "18px" }}>Upload Starting Code File:</p>
            </label>
            <input
              className="form-control form-control-me"
              id="startingCodeFile"
              type="file"
              onChange={(event) => setStartingCode(event.target.files[0])}
            />
          </div>
          <div>
            <label htmlFor="Testing Code File">
              <p style={{ fontSize: "18px" }}>Upload Testing Code File:</p>
            </label>
            <input
              className="form-control form-control-me"
              id="testCodeFile"
              type="file"
              onChange={(event) => setTestCode(event.target.files[0])}
            />
          </div>
        </div>

        <div
          className="form-group"
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateTimePicker
              label="Starting Time"
              value={moment(startingTime)}
              onChange={(newValue) => setStartingTime(newValue)}
            />
          </LocalizationProvider>
          <label htmlFor="duration"><p style={{ fontSize: "18px" }}>Project Contest Duration</p></label>
          <input type="number" min={"1"} max={"7"}id="duration" placeholder="Duration in days(1-7)" />
          <label htmlFor="max_score"><p style={{ fontSize: "18px" }}>Maximum Score</p></label>
          <input type="number" min={"50"} max={"100"} id="max_score" placeholder="Maximum Score(50-100)" />
        </div>
      </div>

      <button
        type="button"
        className="btn btn-dark"
        style={{
          width: "120px",
          marginLeft: "80%",
          marginTop: "20px",
        }}
        onClick={handleCancel}
      >
        Cancel
      </button>

      <button
        type="button"
        className="btn btn-dark"
        style={{
          width: "120px",
          marginLeft: "89%",
          marginTop: "-66px",
        }}
        onClick={handleSave}
      >
        Save
      </button>

      <Footer />
    </div>
  );
}

const codeBoxStyle = {
  backgroundColor: "#444",
  fontSize: "17px",
  color: "white",
  padding: "20px",
  borderRadius: "5px",
  fontFamily: "monospace",
  lineHeight: "1.5",
  display: "block",
  whiteSpace: "pre-wrap",
  overflowX: "auto",
  marginRight: "30px",
  width: "800px",
};
