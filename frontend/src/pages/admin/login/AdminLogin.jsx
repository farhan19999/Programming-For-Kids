/**
 * @fileoverview Admin Login Page
 * @version 1.0.0
 * @author: Farhan
 */


import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../../components/loading/Loading';
import {Navigate} from 'react-router-dom';
import { loginAdmin } from '../../../redux/actions/user.action';

function AdminLogin() {
    console.log('Admin Login Page')
    const dispatch = useDispatch();
    const {loggedIn, loading, role} = useSelector(state=>state.user);
    if(loading){
        return <Loading />
    }
    if(loggedIn && role === 'admin'){
        return <Navigate to='/admin'/>;
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        const email_address = document.getElementById('email_address').value;
        const password = document.getElementById('password').value;
        if(email_address==='' || password===''){
            alert('Please fill up all the fields');
            return;
        }
        dispatch(loginAdmin(email_address, password));
        return;
    }

    return (
        <div>
            <Navbar />
            <div>
                <section className="vh-100" style={{ backgroundcolor: "#eee" }}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{ borderRadius: "25px" }}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Admin Log In</p>

                                                <form className="mx-1 mx-md-4">

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="email" id="email_address" className="form-control" />
                                                            <label className="form-label" for="email_address">Your Email</label>
                                                        </div>
                                                    </div>


                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="password" id="password" className="form-control" />
                                                            <label className="form-label" for="password">Password</label>
                                                        </div>
                                                    </div>


                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="button" className="btn btn-dark btn-lg" onClick={submitHandler}>Login</button>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                                <img src="https://cdn2.iconfinder.com/data/icons/professional-avatar-9/64/38-512.png"
                                                alt='sample' className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <Footer />
        </div>



    );
}

export default AdminLogin;