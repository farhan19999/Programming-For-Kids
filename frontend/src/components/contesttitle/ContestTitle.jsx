import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useSelector } from 'react-redux';


function ContestTitle() {
  const default_rc = {
    'registered-contests': [], // Initialize with an empty array
  };

  const [rc, setRc] = useState(default_rc);

  const { userid } = useSelector((state) => state.user);

  const [ac, setAc] = useState({ contests: [] });
  const server_url = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    axios.get(`${server_url}/api/users/${userid}/registered-contests`).then((response) => {
      setRc(response.data);
      console.log(response.data);
      axios.get(`${server_url}/api/contests`).then((response) => {
        setAc(response.data);
        console.log(response.data);
      })
    })
  }, [userid]);


  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegisterButton = (contestid) => {
    navigate(`/contest/${contestid}/Registration`);

  }
  const handleTitleClick = (contestid) => {
    navigate(`/contest/${contestid}`);

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{ margin: "20px" }}>
          <h4>Registered Contests:</h4>
          {rc['registered-contests'] ? (
            rc['registered-contests'].map((item) => (
              <div className='d-flex justify-content-center align-items-center shadow-sm p-3 mb-5 bg-body-tertiary rounded' style={{ width: '100%' }} key={item.id}>
                <button onClick={() => handleTitleClick(item.contestid)} style={{ fontSize: '20px', width: '80%', color: 'black' }}>Contest Title: {item.title} div-{item.div} </button>
              </div>
            ))
          ) : (
            <div className='d-flex justify-content-center align-items-center shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
              No registered Contests.
            </div>
          )}
        </div>

        <div className="col" style={{ margin: "20px" }}>
          <h4>Upcoming Contests:</h4>
          {ac['contests'] ? (
            ac['contests'].map((item) => (
              <div className='d-flex justify-content-center align-items-center shadow-sm p-3 mb-5 bg-body-tertiary rounded' style={{ width: '100%' }} key={item.id}>
                <div style={{ fontSize: '20px', width: '80%', color: 'black' }}> Contest Title: {item.title} div-{item.div}</div>
                <div className="card-footer text-end">
                  <button type="button" onClick={() => handleRegisterButton(item.contestid)} className="btn btn-dark">Register</button>
                </div>
              </div>
            ))
          ) : (
            <div className='d-flex justify-content-center align-items-center shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
              No Contests.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContestTitle;
