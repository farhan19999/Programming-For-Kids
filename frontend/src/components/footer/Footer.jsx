import React from 'react';
function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start" style={{marginTop:"100px"}}>
      <div className="container p-4">
        <div className="row">
          
          <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
            <h5 className="text-light text-uppercase mb-3">HELP</h5>

            <ul className="list-unstyled">
              <li>
                <a href="" className="text-light"></a>
              </li>
              <li>
                <a href="mailto:farhanfahim79@gmail.com" className="text-light">farhanfahim79@gmail.com</a>
              </li>
              <li>
                <a href="mailto:ariffaisal18.19@gmail.com" className="text-light">ariffaisal18.19@gmail.com</a>
              </li>
              <li>
                <a href="mailto:mahbub.buet.cse18@gmail.com" className="text-light">mahbub.buet.cse18@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-light text-uppercase mb-3">Explore</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="/contest" className="text-light">Contests</a>
              </li>
              <li>
                <a href="/miniproject" className="text-light">Mini-Projects</a>
              </li>
              <li>
                <a href="/practice" className="text-light">Practice</a>
              </li>
              <li>
                <a href="/daily-puzzle" className="text-light">Daily Puzzles</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-light text-uppercase mb-3">Get in touch</h5>

            <ul className="list-unstyled">
              <li>
                <a href="https://www.buet.ac.bd/" className="text-light">Bangladesh University of Engineering and Technology</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-light text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: Programming for kids
      </div>
    </footer>

  );
};

export default Footer;
