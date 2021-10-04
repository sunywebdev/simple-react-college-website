import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button, InputGroup, FormControl } from 'react-bootstrap';

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
    const button = {
        backgroundColor: '#1ABC9C',
        color: 'white',
        border: '0'
    }
    return (
        <footer class="text-center mt-5">
            <div class="container-fluid py-3" style={{ backgroundColor: '#2C3E50' }}>
                <div class="row gy-4 text-light">
                    <div class="col-md-4 col-sm-4 ">
                        <h4 class="text-uppercase mb-1 mb-md-3">Location</h4>
                        <p class="lead mb-0">
                            224/329 Muradpur,  <br />
                            Chittagong, Bangladesh
                        </p>
                    </div>
                    <div class="col-md-4 col-sm-4  text-light">
                        <h4 class="text-uppercase mb-1 mb-md-3">Usefull Links</h4>
                        <NavLink activeStyle={activeactiveStyle} style={navbar} exact to="/">Home</NavLink> <br />
                        <NavLink activeStyle={activeactiveStyle} style={navbar} to="/AllServices">Services</NavLink> <br />
                        <NavLink activeStyle={activeactiveStyle} style={navbar} to="/AboutUs">About us</NavLink> <br />
                        <NavLink activeStyle={activeactiveStyle} style={navbar} to="/Conatct">Conatct</NavLink> <br />
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <h4 class="text-uppercase mb-2 mb-md-3">Subscribe Newsletter</h4>
                        <p class="mb-0">
                            <InputGroup className="mb-3 w-75 mx-auto">
                                <FormControl
                                    placeholder="Email To Subscribe"
                                    aria-label="Email"
                                    aria-describedby="basic-addon2"
                                />
                                <Button style={button} variant="outline-secondary" id="button-addon2">
                                    Subscribe
                                </Button>
                            </InputGroup>
                        </p>
                    </div>
                </div>
            </div>
            <div class="copyright py-4 text-center text-light" style={{ backgroundColor: '#1A252F' }}>
                <div class="container"><small>Copyright  2021 &copy; Shoyeb Mohammed Suny</small></div>
            </div>
        </footer>



    );
};

export default Footer;