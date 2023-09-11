// Arif

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import Navbar from "../../components/navbar/Navbar";
import Timer from "../../components/time_remaining/Timer";
import SubNavbar from '../../components/sub_navbar/SubNavbar';
import axios from 'axios';
import dayjs from 'dayjs';
import { Paper } from '@mui/material';
import storage from '../../utils/firebase';
import { getBytes, ref, uploadBytes } from 'firebase/storage';
import Loading from '../../components/loading/Loading';
import Footer from '../../components/footer/Footer';
import { useSelector } from 'react-redux';
import MiniProjectNavbar from '../../components/mini_project_navbar/MiniProjectNavbar';


const removeExtension = (filename) => {
  return (
    filename.substring(0, filename.lastIndexOf('.')) || filename
  );
}

export default function MiniProject() {
  const server_url = process.env.REACT_APP_SERVER_URL;
  const [code, setCode] = useState('');
  const { projectid } = useParams();
  const { loggedIn, userid, role } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [project, setProject] = useState({});
  useEffect(() => {
    if (!projectid) {
      return;
    }
    axios.get(`${server_url}/api/mini-projects/${projectid}`)
      .then((response) => {
        setProject(response.data);
        const r = ref(storage, `/projects/templates/${response.data.starting_code}`)
        getBytes(r)
          .then((bytes) => {
            setCode(new TextDecoder('utf-8').decode(bytes));
          })
          .catch((error) => {
            throw error;
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }, [server_url, projectid]);


  if (!project) {
    return (<><Navbar /><Loading /><Footer /></>)
  }


  const fileUploadHandler = () => {
    if (!loggedIn || role !== "user") {
      navigate("/signin");
    }
    const file = document.getElementById("input-file-now").files[0];
    if (!file) {
      alert("Please select a file to upload")
      return;
    }
    let ext = file.name.split(".").pop();
    let filename = removeExtension(file.name);
    let sub_file_name = filename + "_" + Date.now();
    if(ext) {
      sub_file_name += "." + ext;
    }
    
    axios.get(`${server_url}/api/mini-projects/${projectid}/submissions/${userid}`)
      .then((response) => {
        console.log("previous submission :",response.data)
        if (response.data.projsubmissionid) {
          console.log("Already submitted :",response.data.submitted_code)
          const storageRef = ref(storage, `/projects/submissions/${projectid}/${response.data.submitted_code}`);
          uploadBytes(storageRef, file)
            .then((snapshot) => {
              axios.put(`${server_url}/api/mini-projects/${projectid}/submissions/${userid}`, {
                ...response.data,
                submitted_time: dayjs().toISOString(),
              })
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  throw error;
                })
            })
            .catch((error) => {
              console.log(error);
            })     
        }
        else {
          const storageRef = ref(storage, `/projects/submissions/${projectid}/${sub_file_name}`);
          console.log("New submission :",sub_file_name)
          uploadBytes(storageRef, file)
            .then((snapshot) => {
              axios.post(`${server_url}/api/mini-projects/${projectid}/submissions`, {
                userid: userid,
                submitted_code: sub_file_name,
                submitted_time: dayjs().format(),
              })
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  throw error;
                })
            })
            .catch((error) => {
              console.log(error);
            })
        }
      })
      .catch((error) => {
        console.log(error);
      })
      navigate("/miniprojects");
  }


  return (
    <div style={containerStyle}>
      <Navbar />
      <MiniProjectNavbar projectid={projectid}/>
      <h4 style={{ textAlign: "center", marginTop: "35px" }}>
        Mini Project Contest Title: {project.title}
      </h4>
      {
        dayjs().isAfter(dayjs(project.starting_time))
        && dayjs(project.starting_time).add(project.duration, 'day').isAfter(dayjs(), 'seconds') > 0 &&
        <Timer start_time={dayjs(project.starting_time).add(project.duration, 'day').diff(dayjs(), 'seconds')} />
      }
      <div style={projectDetailsStyle}>
        <b style={{ fontSize: "20px" }}>Project Details:</b> <br />
        <Paper>
          {project.project_details}
          <br /> <br />
        </Paper>
        <b style={{ fontSize: "20px" }}>Code:</b> <br />
        <br />
        <samp style={codeBoxStyle}>
          {code}
        </samp>
      </div>

      <div className="file-upload-wrapper" style={fileUploadWrapperStyle}>
        <label htmlFor="input-file-now" className="file-upload-label">
          Upload File: &nbsp;
        </label>
        <input type="file" id="input-file-now" className="file-upload" />
      </div>

      <button type="button" id="submit" name="submit" className="btn btn-dark" style={submitButtonStyle} onClick={() => { fileUploadHandler() }}>
        Submit
      </button>

    </div>
  );
}

const containerStyle = {
  marginBottom: "60px",
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
