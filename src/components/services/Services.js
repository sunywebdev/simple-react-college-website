import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LoadData from '../loadData/LoadData';
import './Services.css'

const Services = () => {
    const activeactiveStyle = {
        fontWeight: "bold",
        color: "red"
    }
    const navbar = {
        padding: ' 5px 0',
        textDecoration: 'none',
        color: 'white'
    }
    const button = {
        backgroundColor: '#2C3E50',
        color: 'white',
        border: '0'
    }
    const [data] = LoadData()


    return (
        <div className='container mt-5' style={{ color: '#2C3E50' }}>
            <h1 className='my-5 fw-bold text-center'>Popular Services</h1>
            <Row xs={1} md={4} className="g-4">
                {data.slice(0, 4).map(department => (
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
            </Row>
            <Button variant="primary" size="md" className='fw-bold mt-4' style={button}>
                <NavLink activeStyle={activeactiveStyle} style={navbar} to="/AllServices">
                    View More  <i class="ms-2 fas fa-arrow-right"></i>
                </NavLink>

            </Button>
        </div>
    );
};

export default Services;