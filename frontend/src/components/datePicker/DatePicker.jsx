import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export default function DatePicker({id}){
    return (
        <div>
            <div className='row'>
                <div className='col-md-4'>
                    <Form.Group controlId={id}>
                        <Form.Label>Select Puzzle Date</Form.Label>
                        <Form.Control type='date' name='date' value={"10/10/2023"} placeholder='2023-10-10' />
                    </Form.Group>
                </div>
            </div>
        </div >
    )
}
