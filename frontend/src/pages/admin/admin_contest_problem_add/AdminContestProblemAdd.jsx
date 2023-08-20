//Author: Mahbub

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";

const AdminContestProblemAdd = ({ problem, onEdit }) => {

  const navigate = useNavigate(); // Initialize useNavigate

  const { contestid } = useParams();
  const handleSaveClick = () => {
    navigate(`/admin/contest/${contestid}`);
  };

  return (
    <div>
      <Navbar />

      <div style={{ marginTop: "50px" }}>
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
                        <p className="text-center h1 fw-semibold mb-5 mx-1 mx-md-4 mt-4">
                          Create New Problem
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              {/* <label className="form-label" for="form3Example3c">Contest Title:</label> */}

                              <input
                                type="text"
                                id="title"
                                className="form-control"
                                placeholder="Enter Problem Title Here..."
                                style={{ width: "450px", height: "50px" }}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-left mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              {/* <label className="form-label" for="form3Example3c">Contest Title:</label> */}

                              <input
                                type="text"
                                id="contest"
                                className="form-control"
                                placeholder="Enter Problem Description Here..."
                                style={{
                                  width: "150%",
                                  height: "300px",
                                  textAlign: "left",
                                }}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              {/* <label className="form-label" for="form3Example3c">Contest Title:</label> */}

                              <input
                                type="text"
                                id="contest"
                                className="form-control"
                                placeholder="Enter Sample Input Here..."
                                style={{ width: "250px", height: "100px" }}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              {/* <label className="form-label" for="form3Example3c">Contest Title:</label> */}

                              <input
                                type="text"
                                id="contest"
                                className="form-control"
                                placeholder="Enter Sample Output Here..."
                                style={{ width: "250px", height: "100px" }}
                              />
                            </div>
                          </div>
                          <div>
                            <label for="formFileLg" className="form-label">
                              Test Cases (Input) File:{" "}
                            </label>
                            <input
                              className="form-control form-control-lg"
                              id="formFileLg"
                              type="file"
                            />

                            <label for="formFileLg" className="form-label">
                              Test Cases (Output) File:{" "}
                            </label>
                            <input
                              className="form-control form-control-lg"
                              id="formFileLg"
                              type="file"
                            />
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              onClick={() => handleSaveClick()}
                              className="btn btn-dark btn-lg"
                              style={{ marginTop: "20px" }}
                            >
                              Save
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
};

export default AdminContestProblemAdd;
