import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink and useLocation

function SubNavbar({contestid}) {
  const location = useLocation(); // Get the current location
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd", marginTop:"0px" }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto d-flex gap-5">
            <li className={`nav-item ${location.pathname === '/contest/1' ? 'active' : ''}`}>
              <NavLink className="nav-link" to={`/contest/${contestid}`}>Problems</NavLink>
            </li>
            <li className={`nav-item ${location.pathname === '/my-submissions' ? 'active' : ''}`}>
              <NavLink className="nav-link" to={`/contest/${contestid}/my-submissions`}>My Submissions</NavLink>
            </li>
            <li className={`nav-item ${location.pathname === `/contest/${contestid}/standings` ? 'active' : ''}`}>
              <NavLink className="nav-link" to={`/contest/${contestid}/standings`}>Standings</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SubNavbar;
