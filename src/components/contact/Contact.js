import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const Contact = () => {
    const button = {
        backgroundColor: '#2C3E50',
        color: 'white',
        border: '0'
    }
    return (
        <div className='container my-5' style={{ color: '#2C3E50' }}>
            <h1 className='my-5 fw-bold text-center'>Contact Us</h1>
            <Form>
                <div className="row">
                    <div className="col-md-6">
                        <FloatingLabel className='my-3' label="First Name">
                            <Form.Control type="text" placeholder="First Name" />
                        </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                        <FloatingLabel className='my-3' label="Last Name">
                            <Form.Control type="text" placeholder="Last Name" />
                        </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                        <FloatingLabel className='my-3' label="Email">
                            <Form.Control type="email" placeholder="Email" />
                        </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                        <FloatingLabel className='my-3' label="Mobile Number">
                            <Form.Control type="number" placeholder="Mobile Number" />
                        </FloatingLabel>
                    </div>
                    <div className="col-md-12">
                        <FloatingLabel className='my-3' controlId="floatingTextarea2" label="Message">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a Message here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </div>
                </div>
                <Button style={button} size="md" className='fw-bold my-2'>
                    Submit Your Quries  <i class="ms-2 fas fa-arrow-right"></i>
                </Button>

            </Form >
        </div >
    );
};

export default Contact;