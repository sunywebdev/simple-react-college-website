import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../services/Services.css'

const Allservices = () => {
    return (
        <div className='container my-5'>
            <h1 className='my-4 fw-bold text-center'>Services</h1>
            <Row xs={2} md={4} className="g-4">
                {Array.from({ length: 12 }).map((_, idx) => (
                    <Col>
                        <Card  className='card'>
                            <Card.Img className='img' variant="top" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/108280695_185762499635208_829379171781371104_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=b9115d&_nc_ohc=_78whioxSp4AX85VPYS&_nc_ht=scontent.fcgp7-1.fna&oh=0d105df2da5e66e0e736faf514f88535&oe=617F4744" />
                            <Card.ImgOverlay className=' d-flex flex-column justify-content-end text-light'>
                                <Card.Title>Compute Department</Card.Title>
                                <Card.Text>
                                    12000 Tk / Semester
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Allservices;