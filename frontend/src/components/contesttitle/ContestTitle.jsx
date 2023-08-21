import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ContestTitle() {
  const default_rc = {
    'registered-contests': [], // Initialize with an empty array
  };

  const [rc, setRc] = useState(default_rc);

  const [ac, setAc] = useState({ contests: [] });

  useEffect(() => {
    axios.get("http://localhost:3000/api/users/6/registered-contests").then((response) => {
      setRc(response.data);
      console.log(response.data);
    })
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/api/contests").then((response) => {
      setAc(response.data);
      console.log(response.data);
    })
  }, []);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegisterButton=(contestid)=>{
    navigate(`/contest/${contestid}/Registration`); 

  }

  return (
    <div className="row" >
      <h4>Registered Contests:</h4>
      {rc['registered-contests'] ? (
        rc['registered-contests'].map((item) => (
          <div className='d-flex justify-content-center align-items-center shadow-sm p-3 mb-5 bg-body-tertiary rounded' style={{ width: '51%' }} key={item.id}>
            <a href='/contest/1' style={{ fontSize: '20px', width: '80%', color: 'black' }}>Contest Title: {item.title} div-{item.div} </a>
          </div>
        ))
      ) : (
        <div className='d-flex justify-content-center align-items-center shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
          No registered Contests.
        </div>
      )}
      <div />

      <div className='row'>
        <h4>All Contests:</h4>
        {ac['contests'] ? (
          ac['contests'].map((item) => (
            <div className='d-flex justify-content-center align-items-center shadow-sm p-3 mb-5 bg-body-tertiary rounded' style={{ width: '51%' }} key={item.id}>
              <a href='/contest/1' style={{ fontSize: '20px', width: '80%', color: 'black' }}>Contest Title: {item.title} div-{item.div} </a>
              <div className="card-footer text-end">
                <button type="button" onClick={()=>handleRegisterButton(item.contestid)} className="btn btn-dark">Register</button>
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
  );
};

export default ContestTitle;
