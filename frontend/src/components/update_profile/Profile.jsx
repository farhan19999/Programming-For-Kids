import {useState,useEffect} from 'react';
import "./profile.css"
import axios from 'axios';

//Author: MAHBUB
//TODO #7: Hide Old password 

function Profile() {

	const default_user = {
		name: 'Arif Faisal',
		rank: 1,
		rating: 1500,
	  };
	  const [user,setUser]=useState(default_user);
	  const server_url = process.env.REACT_APP_SERVER_URL;
	  useEffect(()=>{
		axios.get(`${server_url}/api/users`).then((response)=>{
		  setUser(response.data)
		  console.log(response);
		})
	  },[server_url]);

	
	  const handleFormSubmit = async (e) => {
		e.preventDefault();
		const password=document.getElementById("password").value;
		const phone_no=document.getElementById("phone").value;
		const email_address=document.getElementById("email").value;
		console.log(email_address);
		try {
		  // Handle validations
		  axios
			.put(`${server_url}/api/users/${user.userid}`, { password,phone_no,email_address})
			.then(response => {
			  console.log(response);
			  window.location.href = "/";
			});
		} catch (error) {
		  console.error('Error creating user:', error);
		}
	  };

	return (
		<div className="container" style={{marginTop:"25px"}}>
			<div className="row gutters">
				<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
					<div className="card h-100">
						<div className="card-body">
							<div className="account-settings">
								<div className="user-profile">
									<div className="user-avatar">
										<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
									</div>
									<h5 className="user-name">{user.username}</h5>
									<h6 className="user-email">{user.email_address}</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
					<div className="card h-100">
						<div className="card-body">
							<div className="row gutters">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<h6 className="mb-2 text-primary">Personal Details</h6>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="userName">UserName</label>
										<input type="text" className="form-control" id="userName" value={user.username} readOnly={true} />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="email">Email</label>
										<input type="email" className="form-control" id="email" value={user.email_address} />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="phone">Phone</label>
										<input type="text" className="form-control" id="phone" value={user.phone_no} />
									</div>
								</div>
							</div>
							<br />

							<div className="row gutters">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<h6 className="mb-2 text-primary">Password</h6>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="password">Old Password</label>
										<input type="password" className="form-control" id="password1" placeholder="Enter Old Password" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="eMail">New Password</label>
										<input type="email" className="form-control" id="password" placeholder="Enter New Password" />
									</div>
								</div>
							</div>


							<br />

							<div className="row gutters">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<div className="text-right">
										<button type="button" id="submit" name="submit" className="btn btn-dark">Cancel</button>
										<button type="button" id="submit" name="submit" className="btn btn-dark"  onClick={handleFormSubmit}>Update</button>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Profile;
