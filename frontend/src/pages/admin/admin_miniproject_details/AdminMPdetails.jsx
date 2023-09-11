// Arif

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import DatePicker from "../../../components/datePicker/DatePicker";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/loading/Loading";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { Button } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import storage from "../../../utils/firebase";
import { ref, getDownloadURL, deleteObject, uploadBytes, getBytes } from "firebase/storage";

export default function AdminMPDetails() {


  const { projectid } = useParams();

  const [project, setProject] = useState(null);
  const [startCode, setStartCode] = useState(null);
  const [testCode, setTestCode] = useState(null);
  const [stFile, setStFile] = useState(null); // To store starting code file
  const [tsFile, setTsFile] = useState(null); // To store testing code file
  const [stChanged, setStChanged] = useState(false); // To check if starting code has changed
  const [tsChanged, setTsChanged] = useState(false); // To check if testing code has changed


  const server_url = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    axios
      .get(`${server_url}/api/mini-projects/${projectid}`)
      .then((response) => {
        setProject(response.data);
        setStartCode(response.data.starting_code);
        setTestCode(response.data.test_code);
        let r = ref(storage, `/projects/templates/${response.data.starting_code}`);
        getBytes(r)
          .then((buffer) => {
            setStFile(new File([buffer], { type: "text/plain" }));
            //console.log("Template file loaded")
            r = ref(storage, `/projects/tester/${response.data.test_code}`);
            getBytes(r)
              .then((buffer) => {
                setTsFile(new File([buffer], { type: "text/plain" }));
                //console.log("Test file loaded")
              })
              .catch((error) => { throw error; });
          })
          .catch((error) => { throw error; });
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [projectid]);

  const navigate = useNavigate();
  const handleCancelClick = () => {
    navigate(`/admin/miniprojects`);
  };

  const handleDeleteClick = () => {
    axios
      .delete(
        `${server_url}/api/mini-projects/${projectid}`
      )
      .then((response) => {
        console.log("Problem deleted:", response.data);
        let r = ref(storage,`/projects/templates/${startCode}`);
        deleteObject(r)
          .then(() => {
            r = ref(storage,`/projects/tester/${testCode}`);
            deleteObject(r)
              .then(() => {
                console.log("Files deleted");
              }
              ).catch((error) => { throw error; });
          })
          .catch((error) => {
            console.error("Error deleting files:", error);
          })
      })
      .catch((error) => {
        console.error("Error deleting problem:", error);
      });
    navigate(`/admin/miniprojects`);
  }

  const handleSaveClick = () => {
    if (stChanged === true) {
 
      let r = ref(storage,`/projects/templates/${startCode}`);
      uploadBytes(r, stFile)
        .then(() => {}).catch((error) => { console.error("Error uploading file:", error); });
    }
    if(tsChanged === true) {
      let r = ref(storage,`/projects/tester/${testCode}`);
      uploadBytes(r, tsFile)
        .then(() => {}
        ).catch((error) => { console.error("Error uploading file:", error); });
    }
    axios
      .put(`${server_url}/api/mini-projects/${projectid}`, project)
      .then((response) => {
        console.log("Code saved:", response.data);
      })
      .catch((error) => {
        console.error("Error saving code:", error);
      });
    navigate(`/admin/miniprojects`);
  };

  if (!project) return <Loading />;

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-justify-content-md-center-6">
            <p className="text-center-6">Update Project </p>
          </div>
        </div>
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
            <textarea
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="projectTitle"
              rows="1"
              placeholder="Enter Project Title here"
              value={project.title}
              onChange={(event) => setProject({ ...project, title: event.target.value })}
            ></textarea>
          </div>

          <div
            className="form-group"
            style={{
              width: "100%",
              marginTop: "20px",
            }}
          >
            <label htmlFor="projectDescription">
              <p style={{ fontSize: "18px" }}>Project Description:</p>
            </label>
            <textarea
              style={{ backgroundColor: "#ccc" }}
              className="form-control"
              id="projectDescription"
              rows="4"
              placeholder="Enter Project Description here"
              value={project.project_details}
              onChange={(event) => setProject({ ...project, project_details: event.target.value })}
            ></textarea>
          </div>

          <div
            className="form-group"
            style={{
              width: "100%",
              marginTop: "20px",
            }}
          >
            <div
              className="form-group"
              style={{
                width: "100%",
                marginTop: "20px",
              }}
            >
              <label htmlFor="startingCodeFile">
                Upload Starting Code File:
              </label>
              <input
                className="form-control form-control-me"
                id="startingCodeFile"
                type="file"
                onChange={(event) => {
                  setStFile(event.target.files[0])
                  setStChanged(true);
                }}
              />
              {
                stFile &&
                <Link to={URL.createObjectURL(stFile)} download={project.starting_code} target="_blank" rel="noreferrer">
                  <Button
                    variant={"contained"}
                    color={"primary"}
                    size={"large"}
                    startIcon={<GetAppIcon />}
                  >
                    Download Start Code File
                  </Button>
                </Link>
              }
            </div>
            <div>
              <label htmlFor="Testing Code File">
                Upload Testing Code File:
              </label>
              <input
                className="form-control form-control-me"
                id="testCodeFile"
                type="file"
                onChange={(event) => {
                  setTsFile(event.target.files[0])
                  setTsChanged(true);
                }}
              />
              {
                tsFile &&
                <Link to={URL.createObjectURL(tsFile)} download={project.test_code} target="_blank" rel="noreferrer" >
                  <Button
                    variant={"contained"}
                    color={"primary"}
                    size={"large"}
                    startIcon={<GetAppIcon />}
                  >  Download Test Code Files
                  </Button>
                </Link>
              }


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
                defaultValue={moment(project.starting_time)}
                onChange={(newValue) => {
                  setProject({ ...project, starting_time: moment(newValue).format() });
                }}
              />
            </LocalizationProvider>
            <label htmlFor="duration">Project Contest Duration</label>
            <input type="number" min={"1"} max={"7"} id="duration" defaultValue={project.duration}
             placeholder="Duration in days(1-7)" onChange={(event)=>{setProject({...project, duration : event.target.value})}}/>
            <label htmlFor="max_score">Maximum Score</label>
            <input type="number" min={"50"} max={"100"} id="max_score" defaultValue={project.max_score}
             placeholder="Maximum Score(50-100)" onChange={(event)=>{setProject({...project, max_score : event.target.value})}}/>
          </div>
        </div>

        <Button
          variant={"contained"}
          color={"secondary"}
          onClick={handleDeleteClick}
        >
          Delete
        </Button>

        <Button
          variant={"contained"}
          color={"primary"}
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
        <Button
          variant={"contained"}
          color={"primary"}
          onClick={()=>{handleSaveClick()}}
        >
          Save
        </Button>
        <Footer />
      </div>
    </div>
  );
}
