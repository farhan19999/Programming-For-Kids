import React from 'react';
import "./profile.css"
//Author: MAHBUB

function Footer() {
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
									<h5 className="user-name">Arif Faisal</h5>
									<h6 className="user-email">ariffaisal18.19@gmail.com</h6>
								</div>
								<div className="about">
									<h5>About</h5>
									<p>I'm Arif. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
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
										<label for="fullName">Full Name</label>
										<input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="eMail">Email</label>
										<input type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="phone">Phone</label>
										<input type="text" className="form-control" id="phone" placeholder="Enter phone number" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="website">Birth Date</label>
										<input type="date" className="form-control" id="website" placeholder="Birth Date" />
									</div>
								</div>
							</div>
							<div className="row gutters">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<h6 className="mt-3 mb-2 text-primary">Address</h6>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="Street">Street</label>
										<input type="name" className="form-control" id="Street" placeholder="Enter Street" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="ciTy">City</label>
										<input type="name" className="form-control" id="ciTy" placeholder="Enter City" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="sTate">State</label>
										<input type="text" className="form-control" id="sTate" placeholder="Enter State" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="zIp">Zip Code</label>
										<input type="text" className="form-control" id="zIp" placeholder="Zip Code" />
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
										<input type="password" className="form-control" id="password" placeholder="Enter Old Password" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="eMail">New Password</label>
										<input type="email" className="form-control" id="eMail" placeholder="Enter New Password" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="phone">Confirm New Password</label>
										<input type="text" className="form-control" id="phone" placeholder="Confirm New Password" />
									</div>
								</div>
							</div>


							<br />

							<div className="row gutters">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<div className="text-right">
										<button type="button" id="submit" name="submit" className="btn btn-dark">Cancel</button>
										<button type="button" id="submit" name="submit" className="btn btn-dark">Update</button>
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

export default Footer;
