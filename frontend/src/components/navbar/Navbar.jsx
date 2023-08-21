import React from 'react';
//Author: MAHBUB

function Navbar() {
const {userid} = 1;
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Programming For Kids</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/user/1/contests/">Contest</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/#">Practice</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="/miniproject">Mini-Project</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="/daily-puzzle">Daily-Puzzle</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/#">Code-Game</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/profile">Student-Profile</a>
                        </li>

                            <li className="nav-item">
                                <a className="nav-link active" href="/signin">Sign-In</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" href="/signup">Sign-Up</a>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
