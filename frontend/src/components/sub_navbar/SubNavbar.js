import React from 'react';
function SubNavbar(){
  return (
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto d-flex gap-5">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/problems">Problems</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/my-submissions">My Submissions</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/standings">Standings</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default SubNavbar;
