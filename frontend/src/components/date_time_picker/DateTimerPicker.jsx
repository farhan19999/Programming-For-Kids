//Author: MAHBUB
import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';
import 'bootstrap'; // Import Bootstrap JavaScript (make sure this comes after jQuery)
import 'eonasdan-bootstrap-datetimepicker'; // Import DateTimePicker JavaScript

export default function DateTimePicker() {
    useEffect(() => {
        $('#dtpickerdemo').datetimepicker(); // Make sure you have the correct selector (#dtpickerdemo)
    }, []);
    return (
        <div>
            <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
            <link href="//cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/e8bddc60e73c1ec2475f827be36e1957af72e2ea/build/css/bootstrap-datetimepicker.css" rel="stylesheet" />


            <script type="text/javascript" src="//code.jquery.com/jquery-2.1.1.min.js"></script>
            <script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment-with-locales.js"></script>
            <script src="//cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/e8bddc60e73c1ec2475f827be36e1957af72e2ea/src/js/bootstrap-datetimepicker.js"></script>

            <div className="container">
                <div className="row">
                    <div className='col-lg-9'>
                        <div className="form-group">
                            <h4><label for="dtpickerdemo" className="col-sm-2 control-label">Starting date and time:</label></h4>
                            <div className='col-sm-4 input-group date' id='dtpickerdemo'>
                                <input type='text' className="form-control" />
                                <span className="input-group-addon">
                                    <span className="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}