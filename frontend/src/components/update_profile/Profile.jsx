import {useState,useEffect} from 'react';
import "./profile.css"
import axios from 'axios';
import { useSelector } from 'react-redux';

//Author: MAHBUB
//TODO #7: Hide Old password 

function Profile() {

	const default_user = {
		name: 'Arif Faisal',
		rank: 1,
		rating: 1500,
	};
	
	
	const [user, setUser] = useState(default_user);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phone, setPhone] = useState('');
	const {userid}=useSelector(state=>state.user);
	
	const server_url = process.env.REACT_APP_SERVER_URL;

	useEffect(() => {
		axios.get(`${server_url}/api/users/${userid}`).then((response) => {
			setUser(response.data)
			setUsername(response.data.username)
			setPhone(response.data.phone_no)
			setPassword(response.data.password)
			setEmail(response.data.email_address)
			console.log(response);
		})
	}, []);



	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange=(event)=>
	{
		setPassword(event.target.value);
	}
	const handlePhoneChange=(event)=>
	{
		setPhone(event.target.value);
	}
	const [userData, setUserData] = useState({
		userid: user.userid,
		username: user.username,
		password: '',
		rating: user.rating,
		ranking: user.ranking,
		phone_no: '',
		email_address: email
	});


	const handleFormSubmit = async (e) => {
		e.preventDefault();
		// const password = document.getElementById("password").value;
		// const phone_no = document.getElementById("phone").value;
		// const email_address = document.getElementById("email").value;
		console.log(userData.email_address);
		try {
			// Handle validations
			axios
				.put(`${server_url}/api/users/` + user.userid, 
				{
					password:password, 
					phone_no:phone, 
					email_address:email,
				})
				.then(response => {
					console.log(response);
					window.location.href = "/";
				});
		} catch (error) {
			console.error('Error creating user:', error);
		}
	};

	return (
		<div className="container" style={{ marginTop: "25px" }}>
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
										<input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="phone">Phone</label>
										<input type="text" className="form-control" id="phone" value={phone} onChange={handlePhoneChange} />
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
										<label for="password">New Password</label>
										<input type="password" className="form-control" id="password" placeholder="Enter New Password" onChange={handlePasswordChange} />
									</div>
								</div>
							</div>


							<br />

							<div className="row gutters">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<div className="text-right">
										<button type="button" id="submit" name="submit" className="btn btn-dark">Cancel</button>
										<button type="button" id="submit" name="submit" className="btn btn-dark" onClick={handleFormSubmit}>Update</button>
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
