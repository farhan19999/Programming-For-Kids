
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

//Author: MAHBUB

function Navbar() {
    const { loggedIn, role } = useSelector(state => state.user);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid" style={{ height: "50px" }}>
                <NavLink className="navbar-brand" to="/">Programming For Kids</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {loggedIn && 
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={ (role === "user")? "/dashboard" : "/admin"}>Dashboard</NavLink>
                            </li>
                        }
                        <li className="nav-item">
                            <NavLink className="nav-link active" to={(loggedIn && role === "admin")? "/admin/contest" : "/contest"}>Contest</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to={(loggedIn && role === "admin")? "/admin" : "/practice"}>Practice</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link active" to={(loggedIn && role === "admin")? "/admin/miniprojects" : "/miniprojects"}>Mini-Project</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link active" to={(loggedIn && role === "admin")? "/admin/daily-puzzle" : "/daily-puzzle"}>Daily-Puzzle</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/code-gaming">Code-Game</NavLink>
                        </li>
                        {
                            loggedIn ?
                                <>
                                    {role === "user" && 
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to="/profile">Student-Profile</NavLink>
                                    </li>
                                    }
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to="/signout">Sign-Out</NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to="/signin">Sign-In</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to="/signup">Sign-Up</NavLink>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
