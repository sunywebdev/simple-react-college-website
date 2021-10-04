import React from 'react';
import './TopSection.css'
import { Button } from 'react-bootstrap';
import image from './1.jpg'

const TopSection = () => {
    const button = {
        backgroundColor: '#2C3E50',
        color: 'white',
        border:'0'
    }
    return (
        <div className="container px-4 px-lg-5 mt-4" style={{ color: '#2C3E50' }}>
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                    <img className="card-img-top mb-5 mb-md-0" src={image} alt="..." />
                </div>
                <div className="col-md-6">
                    <h1 className="display-5 fw-bolder">National Institute Of Technology</h1>
                    <h3>Muradpur, Chittagong</h3>
                    <p className="lead">The first Private Polytechnic Institute of Chittagong, established in 1999 by some honorable persons who dedicate their life's to spread the lights of education. To develop a modern country there is no alternate of Technical Education. </p>
                    <div className="d-flex">
                        <Button style={button} className="btn btn-outline-dark flex-shrink-0" type="button">
                            <i className="bi-cart-fill me-1"></i>
                            Get Admitted
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSection;