//Author: Mahbub

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";

const AdminContestProblemAdd = ({ problem, onEdit }) => {

    // const [problem,setproblem]=useState('');
	//   useEffect(()=>{
	// 	axios.get("http://localhost:3000/api/").then((response)=>{
    //         setproblem(response.data)
	// 	  console.log(response);
	// 	})
	//   },[]);


    return (

        <div>
            <Navbar/>
            <form>

                <div className="form-group" style={{ margin: "40px",fontSize:'20px' }}>
                    <label for="exampleFormControlTextarea1">Problem Statement:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>

                <div className="form-group" style={{ margin: "40px", width: "20%",fontSize:'20px' }}>
                    <label for="exampleFormControlTextarea1">Sample Input:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="form-group" style={{ margin: "40px", width: "20%",fontSize:'20px' }}>
                    <label for="exampleFormControlTextarea1">Sample Ouput:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div style={{ margin: "40px", width: "20%",fontSize:'20px' }}>

                    <label for="formFileLg" className="form-label">Test Cases (Input) File: </label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file" />


                    <label for="formFileLg" className="form-label">Test Cases (Output) File: </label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file" />
                    
                </div>
            </form>
            <button type="button" className="btn btn-dark" style={{width:"7%",marginLeft:'90%'}}>Save</button>
            <Footer/>
        </div>


    );
};

export default AdminContestProblemAdd;
