// Arif
 
import React, { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminContestAdd() {
  const [contestData, setContestData] = useState({ contests: [] }); // Initialize with an object containing an empty array
  const navigate = useNavigate();
  const server_url = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    axios
      .get(`${server_url}/api/contests/`)
      .then((response) => {
        const contestDataFromApi = response.data;
        setContestData(contestDataFromApi);
      })
      .catch((error) => {
        console.error("Error fetching contests:", error);
      });
  }, []);

  const handleModifyClick = (contestid) => {
    navigate(`/admin/contest/${contestid}`);
  };

  const handleAddNewContestClick = () => {
    navigate(`/admin/contest-add-new`);
  };
  const calculateRemainingTime = (startTime) => {
    const now = new Date();
    const startTimeMs = new Date(startTime);
    const remainingTimeMs = Math.max(startTimeMs - now, 0);

    const days = Math.floor(remainingTimeMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTimeMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTimeMs % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTimeMs % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <h3>Created Contests:</h3>
      </div>

      <h2 style={{ margin: "25px", marginLeft: "50px", fontWeight: "bold" }}>
        Admin
      </h2>
      <table
        className="table table-hover"
        style={{ margin: "25px", marginLeft: "50px", fontSize: "18px" }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Contest Title</th>
            <th scope="col">Remaining Time</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contestData.contests.map((contest) => (
            <tr key={contest.contestid}>
              <td>{contest.contestid}</td>
              <td>{contest.title}</td>
              <td>{calculateRemainingTime(contest.start_time)} </td>
              <td>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => handleModifyClick(contest.contestid)}
                >
                  Modify
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="4">
              <button
                type="button"
                onClick={handleAddNewContestClick}
                className="btn btn-dark"
                style={{
                  width: "190px",
                  height: "42px",
                  marginTop: "10px",
                  marginLeft: "38%",
                }}
              >
                Add New Contest
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default AdminContestAdd;
