//Author: ARIF

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";


function AdminContestAddNew() {
  const navigate = useNavigate(); // Initialize useNavigate

  
  const handleAddContestClick = () => {
    // make a post request to the backend to add a new contest on '/api/contests/'
    axios.post(`http://localhost:3000/api/contests/`, {
        title: document.getElementById("title").value,
        div: document.getElementById("division").value,
        start_time: document.getElementById("start_time").value,
        duration: document.getElementById("duration").value,
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error adding contest:', error);
    });
    // after adding the contest, navigate to the contest problems adding page
    navigate(`/admin-contest-problem-add/`);
  };

  return (
    <div>
      <Navbar />
      <div>
        <section className="vh-100" style={{ backgroundcolor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Create New Contest
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              {/* <label className="form-label" for="form3Example3c">Div</label> */}

                              <input
                                type="text"
                                id="title"
                                className="form-control"
                                placeholder="Enter Contest Title"
                                style={{ width: "450px", height: "50px" }}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              {/* <label className="form-label" for="form3Example3c">start time</label> */}

                              <input
                                type="text"
                                id="division"
                                className="form-control"
                                placeholder="Enter Contest Division"
                                style={{ width: "450px", height: "50px" }}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              {/* <label className="form-label" for="form3Example3c">Contest Title:</label> */}

                              <input
                                type="text"
                                id="start_time"
                                className="form-control"
                                placeholder="Enter Contest Start Time"
                                style={{ width: "450px", height: "50px" }}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              {/* <label className="form-label" for="form3Example3c">Contest Title:</label> */}

                              <input
                                type="text"
                                id="duration"
                                className="form-control"
                                placeholder="Enter Contest Duration (Hours)"
                                style={{ width: "450px", height: "50px" }}
                              />
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              onClick={() => handleAddContestClick()}
                              className="btn btn-dark btn-lg"
                            >
                              Create New Contest
                            </button>
                          </div>
                        </form>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default AdminContestAddNew;
