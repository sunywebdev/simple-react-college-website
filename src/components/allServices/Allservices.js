import React from 'react';
import { Card, Col, Row, Button, Spinner } from 'react-bootstrap';
import '../services/Services.css'
import LoadData from '../loadData/LoadData';

const Allservices = () => {
    const button = {
        backgroundColor: '#2C3E50',
        color: 'white',
        border: '0'
    }

    const [data] = LoadData()

    return (
        <div className='container my-5'>
            <h1 className='my-5 fw-bold text-center  display-3   text-uppercase' style={{ color: '#2C3E50' }}>Services</h1>
            {data.length === 0 ?
                <div className="py-5 text-center">
                    <Spinner animation="border" className='loading mx-2' />
                    <Spinner animation="border" className='loading mx-2' />
                    <Spinner animation="border" className='loading mx-2' />
                    <Spinner animation="border" className='loading mx-2' />
                    <Spinner animation="border" className='loading mx-2' />
                    <Spinner animation="border" className='loading mx-2' />
                    <Spinner animation="border" className='loading mx-2' />
                </div>

                :

                <Row xs={1} md={4} className="g-4">
                    {data.map(department => (
                        <Col>
                            <Card>
                                <div className="card-img">
                                    <Card.Img className='img' variant="top" src={department.photo} />
                                </div>
                                <Card.Body>
                                    <Card.Title className='text-center'>{department.dept} Technology</Card.Title>
                                    <Card.Text >
                                        <div><i class="fas fa-dollar-sign"></i> {department.fee} Tk/Semester</div>
                                        <div><i class="far fa-clock"></i> Duration: {department.duration}</div>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer class="p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><Button style={button} class="mt-auto">View options</Button></div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>}
        </div>
    );
};

export default Allservices;