import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink and useLocation

function SubNavbar() {
  const location = useLocation(); // Get the current location

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd", marginTop:"18px" }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto d-flex gap-5">
            <li className={`nav-item ${location.pathname === '/contest/1' ? 'active' : ''}`}>
              <NavLink className="nav-link" to="/contest/1">Problems</NavLink>
            </li>
            <li className={`nav-item ${location.pathname === '/my-submissions' ? 'active' : ''}`}>
              <NavLink className="nav-link" to="/my-submissions">My Submissions</NavLink>
            </li>
            <li className={`nav-item ${location.pathname === '/standings' ? 'active' : ''}`}>
              <NavLink className="nav-link" to="/standings">Standings</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SubNavbar;
