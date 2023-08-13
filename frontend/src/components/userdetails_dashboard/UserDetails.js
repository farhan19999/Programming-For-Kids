import React from 'react';
import profile_pic from '..//..//assets//images//blank_image.webp'
//Author: MAHBUB

function UserDetails(){
    const user = {
        name: 'Mahbubul Faisal',
        rank: 1,
        rating:1500,
      };
  return (
    <section className="vh-100" style={{backgroundcolor: "#9de2ff"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-md-9 col-lg-7 col-xl-5">
        <div className="card" style={{borderradius: "15px"}}>
          <div className="card-body p-4">
            <div className="d-flex text-black">
              <div className="flex-shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" className="img-fluid"
                  style={{width: "180px", borderradius: "10px"}}/>
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="mb-1">{user.name}</h5>
                <p className="mb-2 pb-1" style={{color: "#2b2a2a"}}>Master</p>
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style={{backgroundcolor: "#efefef"}}>
                  <div>
                    <p className="small text-muted mb-1">Articles</p>
                    <p className="mb-0">41</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Rank</p>
                    <p className="mb-0">{user.rank}</p>
                  </div>
                  <div>
                    <p className="small text-muted mb-1">Rating</p>
                    <p className="mb-0">{user.rating}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default UserDetails;
