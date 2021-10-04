import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeactiveStyle = {
        fontWeight: "bold",
        borderRadius: '11px',
        color: 'white',
        backgroundColor: '#1ABC9C'
    }
    const navbar = {
        textDecoration: 'none',
        color: 'white',
        padding: '7px 14px',
    }

    return (
        <div className=' pb-2 ' style={{ backgroundColor: '#2C3E50' }}>
            <div>
                <h1 className="text-center mb-2 fw-bold  text-light">National Institute Of Technology</h1>
            </div>
            <div className="text-center">
                <Navbar>
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav " className="justify-content-center">
                            <Nav>
                                <NavLink activeStyle={activeactiveStyle} style={navbar} exact to="/">Home</NavLink>
                                <NavLink activeStyle={activeactiveStyle} style={navbar} to="/AllServices">Services</NavLink>
                                <NavLink activeStyle={activeactiveStyle} style={navbar} to="/AboutUs">About us</NavLink>
                                <NavLink activeStyle={activeactiveStyle} style={navbar} to="/Conatct">Conatct</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;