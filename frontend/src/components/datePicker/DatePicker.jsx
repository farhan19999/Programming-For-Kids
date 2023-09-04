import React from 'react';
import { Form } from 'react-bootstrap';

export default function DatePicker({date,id}){
    return (
        <div>
            <div className='row'> 
                <div className='col-md-4'> 
                    <Form.Group controlId={id}> 
                        <Form.Label>Select Date</Form.Label>  
                        <Form.Control type='date' name='date' value={date}/> 
                    </Form.Group> 
                </div> 
            </div> 
        </div >
    )
}
