import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
//Author: MAHBUB
import axios from 'axios';
import Loading from '../loading/Loading';

function UserDetails() {
  
  const [user,setUser]=useState(null);

  const server_url = process.env.REACT_APP_SERVER_URL;
  const {loading,loggedIn, userid, error } = useSelector(state=>state.user);
  console.log(loading,loggedIn,userid, error);
  useEffect(()=>{
    if(loggedIn && userid){
      axios.get(`${server_url}/api/users/${userid}`).then((response)=>{
        setUser(response.data);
        console.log(response);
      }).catch((err)=>{
        console.log(err);
      })
    }
    
  },[server_url,loggedIn,userid]);

  if(!user || loading){
    return <Loading/>
  }

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
            {/* <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}></p> */}
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
