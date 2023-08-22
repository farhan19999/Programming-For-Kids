import React,{useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
//Author: MAHBUB
//TODO #5 : after successfull signup redirect to dashboard

function SignUpPage() {

  const [userData, setUserData] = useState({
    username: '',
    password: '',
    rating: 0,
    ranking: '',
    phone_no: '',
    email_address: ''
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const username=document.getElementById("name").value;
    const password=document.getElementById("password").value;
    const phone_no=document.getElementById("phone").value;
    const email_address=document.getElementById("email").value;
    const rating =0;
    const ranking=null;
    console.log(email_address);
    try {
      // Handle validations
      axios
        .post("http://localhost:3000/api/users", { username,password,phone_no,email_address, rating, ranking })
        .then(response => {
          console.log(response);
          window.location.href = "/";
        });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };


  return (
    <div>
      <Navbar />
      <div>
        <section class="vh-100" style={{ backgroundcolor: "#eee" }}>
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{ borderRadius: "25px" }}>
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form class="mx-1 mx-md-4">

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="text" id="name" class="form-control"/>
                              <label class="form-label" for="form3Example1c">Your Name</label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="email" id="email" class="form-control"/>
                              <label class="form-label" for="form3Example3c">Your Email</label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="tel" id="phone" class="form-control"/>
                              <label class="form-label" for="form3Example4c">Phone</label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="password" id="password" class="form-control"/>
                              <label class="form-label" for="form3Example4c">Password</label>
                            </div>
                          </div>


                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" class="btn btn-dark btn-lg" onClick={handleFormSubmit}>Register</button>
                          </div>

                        </form>

                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="https://cdn2.iconfinder.com/data/icons/professional-avatar-9/64/38-512.png"
                          class="img-fluid" alt="Sample image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div />

      <Footer />
    </div>
  );
}

export default SignUpPage;