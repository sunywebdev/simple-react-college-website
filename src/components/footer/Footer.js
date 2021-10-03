import React from 'react';
import { FormControl, InputGroup, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const activeactiveStyle = {
        fontWeight: "bold",
        color: "red"
    }
    const navbar = {
        padding: ' 5px 0',
        textDecoration: 'none',
        color: 'white'
    }
    return (
        <div className="container mx-auto">
            <div className='row bg-primary mt-5 g-5'>
                <div className='col-md-3 text-center'>
                    <img src="https://demo.web3canvas.com/themeforest/unisco/images/footer-logo.png" alt="" className='w-50' />
                    <h5>2021 © copyright<br />
                        All rights reserved.</h5>
                </div>
                <div className='col-md-3'>
                    <h4>Quick Links</h4>
                    <Nav className="flex-column ">
                        <NavLink activeStyle={activeactiveStyle} style={navbar} to="/Home">Home</NavLink>

                        <NavLink activeStyle={activeactiveStyle} style={navbar} to="/AllServices">Services</NavLink>

                        <NavLink activeStyle={activeactiveStyle} style={navbar} to="/AboutUs">About us</NavLink>

                        <NavLink activeStyle={activeactiveStyle} style={navbar} to="/Conatct">Conatct</NavLink>
                    </Nav>
                </div>
                <div className='col-md-3 ps-0 ps-sm-3'>
                    <h4>Contact Us</h4>
                    Address: Unisco university Albany, NY, USA. 11001
                    Email : info@unisco.com
                    Phone : +91 555 668 986
                </div>
                <div className='col-md-3'>
                    <h4>Subscribe</h4>
                    <p>Subscribe to get the latest news, update and offer information. Don't worry, we won't send spam!</p>
                    <InputGroup>
                        <FormControl id="inlineFormInputGroupUsername" placeholder="name@email.com" />
                        <InputGroup.Text>Subscribe</InputGroup.Text>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default Footer;