import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='container my-5'>
            <h1 className='my-4 fw-bold text-center'>Contact Us</h1>
            <Form>
                <div className="row">
                    <div className="col-md-6">
                        <FloatingLabel className='my-3' controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                        <FloatingLabel className='my-3' controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                        <FloatingLabel className='my-3' controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                        <FloatingLabel className='my-3' controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                        <FloatingLabel className='my-3' controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                        <FloatingLabel className='my-3' controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                    </div>
                    <div className="col-12">
                        <FloatingLabel className='my-3' controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                    </div>
                </div>
                <Button variant="primary" size="md" className='fw-bold my-2'>
                    Submit Your Quries  <i class="ms-2 fas fa-arrow-right"></i>
                </Button>

            </Form>
        </div>
    );
};

export default Contact;