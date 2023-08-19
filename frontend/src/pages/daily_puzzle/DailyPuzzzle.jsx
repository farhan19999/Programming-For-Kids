//Author: MAHBUB
import React, { useState } from 'react';

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Home() {
    const [selectedOption, setSelectedOption] = useState(null);
    const correctOption = 2; // Correct option number
    const [result, setResult] = useState('');

    return (
        <div>
            <Navbar />

            <div className="mx-0 mx-sm-auto">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center">
                            <i className="far fa-file-alt fa-4x mb-3 text-primary"></i>
                            <p>
                                <h2>Daily-Puzzle</h2>
                            </p>
                            <p>
                                What does printf do?

                            </p>
                        </div>

                        <hr />

                        <form className="px-4" action="">
                            <p className="text-center"><strong>Your Answer:</strong></p>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radio2Example1" />
                                <label className="form-check-label" for="radio2Example1">
                                    aaaaaaa
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radio2Example2" />
                                <label className="form-check-label" for="radio2Example2">
                                    bbbbbb
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radio2Example3" />
                                <label className="form-check-label" for="radio2Example3">
                                    ccccccc
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radio2Example4" />
                                <label className="form-check-label" for="radio2Example4">
                                    dddddd
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radio2Example5" />
                                <label className="form-check-label" for="radio2Example5">
                                    eeeeeee
                                </label>
                            </div>

                        </form>
                    </div>
                    <div className="card-footer text-end">
                        <button type="button" className="btn btn-dark">Submit</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default Home;