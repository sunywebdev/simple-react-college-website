import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './TopSection.css'

const TopSection = () => {

    return (
        <div className='container'>
            <div className= 'top py-5 row justify-content-start ms-5 px-md-5' >
                <Card
                    className="col col-md-6 mb-2"
                >
                    <Card.Body>
                        <div className='fs-3 fw-bold bg-light py-2'>Admission Open!</div>
                        <Card.Title> December 20th, 2021 </Card.Title>
                        <Card.Text>
                            We start to receive regestration in our Institute from december 20th 2021 to January 30th 2022
                        </Card.Text>
                    </Card.Body>
                    <div className="me-3 ms-3">
                        <Button className='me-3 px-3 py-1 mb-3'>Apply Now  <i class="ms-2 fas fa-arrow-right"></i></Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default TopSection;