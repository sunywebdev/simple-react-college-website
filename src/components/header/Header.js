import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeactiveStyle = {
        fontWeight: "bold",
        color: "red"
    }
    const navbar = {
        padding: '0 5px',
        textDecoration: 'none',
        color:'white'
    }

    return (
        <div className='sticky-top pb-2 ' style={{ backgroundColor: '#2C3E50',}}>
            <h1 className="text-center mb-2 fw-bold  text-light">National Institute Of Technology</h1>
            <div className="text-center">
            </div>
            <Navbar>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav " className="justify-content-center">
                        <Nav>
                            <NavLink activeStyle={activeactiveStyle} style={navbar} to="/Home">Home</NavLink>
                            <NavLink activeStyle={activeactiveStyle} style={navbar} to="/AllServices">Services</NavLink>
                            <NavLink activeStyle={activeactiveStyle} style={navbar} to="/AboutUs">About us</NavLink>
                            <NavLink activeStyle={activeactiveStyle} style={navbar} to="/Conatct">Conatct</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;