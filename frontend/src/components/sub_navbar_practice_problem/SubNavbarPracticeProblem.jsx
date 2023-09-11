import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink,  useLocation, useNavigate } from 'react-router-dom'; // Import NavLink and useLocation

function SubNavbarPracticeProblem() {
    const navigate = useNavigate(); // Get navigate function from useNavigate hook
    const location = useLocation(); // Get the current location
    const {userid, loggedIn} = useSelector((state) => state.user); // Get userid and loggedIn from redux store
    if(!loggedIn) navigate("/signin");
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd", marginTop: "0px" }}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto d-flex gap-5">
                        <li className={`nav-item ${location.pathname === '/practice' ? 'active' : ''}`}>
                            <NavLink className="nav-link" to={`/practice`}>Problems</NavLink>
                        </li>
                        <li className={`nav-item ${location.pathname === '/practice/problems/user/my-submissions' ? 'active' : ''}`}>
                            <NavLink className="nav-link" to={`/practice/problems/user/my-submissions`}>My Submissions</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default SubNavbarPracticeProblem;
