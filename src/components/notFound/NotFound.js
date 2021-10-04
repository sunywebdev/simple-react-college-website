import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    const button = {
        backgroundColor: '#2C3E50',
        color: 'white',
        border: '0'
    }
    const navbar = {
        textDecoration: 'none',
        color: 'white',
        padding: '7px 21px',
    }
    return (
        <div className='text-center py-5 my-5' style={{ minHeight: '45vh', color: '#2C3E50'}}>
            <h1 className='fw-bold'>404 Not Found !</h1>
            <p className='fw-bold'>Make sure you have entred correct url</p>
            <div class="text-center">
                <Button style={button} class="mt-auto"><NavLink style={navbar} exact to="/">Back To Home</NavLink></Button>
            </div>
        </div>
    );
};

export default NotFound;