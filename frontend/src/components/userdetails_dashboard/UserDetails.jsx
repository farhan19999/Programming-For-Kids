import {useState,useEffect} from 'react';
//Author: MAHBUB
import axios from 'axios';

function UserDetails() {
  
  const default_user = {
    name: 'Arif Faisal',
    rank: 1,
    rating: 1500,
  };
  const [user,setUser]=useState(default_user);
  useEffect(()=>{
    axios.get("http://localhost:3000/api/users/1").then((response)=>{
      setUser(response.data)
      console.log(response);
    })
  },[]);

  return (

    <div className="card" style={{ borderradius: "15px" }}>
      <div id="profile_card" className="card-body p-4">
        <div className="d-flex text-black">
          <div className="flex-shrink-0">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="Generic placeholder image" className="img-fluid"
              style={{ width: "180px", borderradius: "10px" }} />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5 className="mb-1">{user.username}</h5>
            <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>Grand Master</p>
            <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
              style={{ backgroundcolor: "#efefef" }}>
              <div className="px-3">
                <p className="medium text-muted mb-1 ">Rank</p>
                <p className="mb-0">{user.ranking}</p>
              </div>
              <div>
                <p className="medium text-muted mb-1">Rating</p>
                <p className="mb-0">{user.rating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
