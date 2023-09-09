// ARIF

import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import AceEditor from "react-ace";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { ref, uploadBytes } from "firebase/storage";
import storage from "../../../utils/firebase";
import { TextField } from "@mui/material";

function removeExtension(filename) {
  return (
    filename.substring(0, filename.lastIndexOf('.')) || filename
  );
}

function getFileExtension(filename) {
  return filename.split(".").pop();
}


export default function AdminMPadd() {
  const [startingCode, setStartingCode] = useState(null);
  const [testCode, setTestCode] = useState(null);
  const [startingTime, setStartingTime] = useState("");

  const navigate = useNavigate();

  const server_url = process.env.REACT_APP_SERVER_URL;

  const handleSave = async () => {
    const timestamp = Date.now();
    const template_file = startingCode;
    let ext = getFileExtension(template_file.name);
    let template_file_name = removeExtension(template_file.name) + "_" + timestamp;
    if (ext) {
      template_file_name += "." + ext;
    }
    const test_code_file = testCode;
    let test_code_file_name = removeExtension(test_code_file.name) + "_" + timestamp;
    ext = getFileExtension(test_code_file.name);
    if (ext) {
      test_code_file_name += "." + ext;
    }

    let storageRef = ref(storage, `/projects/templates/${template_file_name}`);
    await uploadBytes(storageRef, template_file);
    storageRef = ref(storage, `/projects/tester/${test_code_file_name}`);
    await uploadBytes(storageRef, test_code_file);
    axios
      .post(`${server_url}/api/mini-projects`, {
        title: document.getElementById("projectTitle").value,
        project_detils: document.getElementById("projectDescription").value,
        starting_code: template_file_name,
        starting_time: startingTime.format(),
        test_code: test_code_file_name,
        duration: document.getElementById("duration").value,
        max_score: document.getElementById("max_score").value,
      })
      .then((response) => {
        console.log("Mini Project added:", response.data);
      })
      .catch((error) => {
        console.error("Error adding Mini Project:", error);
      });
    navigate("/admin/miniprojects"); // Redirect to admin page after saving

  };

  const handleCancel = () => {
    navigate("/admin/miniprojects"); // Redirect to admin page
  };


  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <h3 className="mt-5 text-center">
        Add Mini Project
      </h3>
      <div className="container">
        <div className="row  my-3">
          <TextField
            id="projectTitle"
            label="Project Title"
            rows="1"
            placeholder="Enter Project Title here"
            defaultValue={""}
          />
        </div>
        <div className="row  my-3">
          <TextField
            id="projectDescription"
            label="Project Description"
            rows="4"
            placeholder="Enter Project Description here"
            defaultValue={""}
            multiline
            size="large"
          ></TextField>
        </div>

        <div className="row  my-3">
          <div className="col-sm-2">
            <label htmlFor="startingCodeFile">
              Upload Starting Code File:
            </label>
          </div>
          <div className="col">
            <input
              className="form-control form-control-me"
              id="startingCodeFile"
              type="file"
              onChange={(event) => setStartingCode(event.target.files[0])}
            />
          </div>
        </div>
        <div className="row  my-3">
          <div className="col-sm-2">
            <label htmlFor="Testing Code File">
              Upload Testing Code File:
            </label>
          </div>
          <div className="col">
            <input
              className="form-control form-control-me"
              id="testCodeFile"
              type="file"
              onChange={(event) => setTestCode(event.target.files[0])}
            />
          </div>
        </div>
        <div className="row  my-3">
          <div className="col-5">
            <div className="form-group">
              <label htmlFor="duration">Project Contest Duration :</label>
              <input className="form-control" type="number" min={"1"} max={"7"} id="duration" placeholder="Duration in days(1-7)" />
            </div>
          </div>
          <div className="col-5">
            <div className="form-group">
              <label htmlFor="max_score">Maximum Score :</label>
              <input className="form-control" type="number" min={"50"} max={"100"} id="max_score" placeholder="Maximum Score(50-100)" />
            </div>
          </div>
        </div>
        <div className="row  my-3">
          <div className="col-sm-4">
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateTimePicker
                variant="inline"
                label="Starting Time"
                value={moment(startingTime)}
                onChange={(newValue) => setStartingTime(newValue)}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>

      <div className="row  my-3 justify-content-right">
        <div className="col-sm-2 text-right">
          <button type="button" className="btn btn-dark" onClick={handleSave}>
            Save
          </button>
        </div>
        <div className="col-sm-2 text-right">
          <button
            type="button" className="btn btn-dark" onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>


      <Footer />
    </div >
  );
}

