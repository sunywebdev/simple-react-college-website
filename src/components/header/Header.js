import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeactiveStyle = {
        fontWeight: "bold",
        color: "red"
    }
    const navbar = {
        padding: '0 5px',
        textDecoration:'none'
    }

    return (
        <div className='sticky-top bg-light'>
            <h1 className="text-center mb-2 fw-bold text-primary">XYZ College</h1>
            <div className="text-center">

                <NavLink activeStyle={activeactiveStyle} style={navbar} to="/Home">Home</NavLink>

                <NavLink activeStyle={activeactiveStyle} style={navbar} to="/AllServices">Services</NavLink>

                <NavLink activeStyle={activeactiveStyle} style={navbar} to="/AboutUs">About us</NavLink>

                <NavLink activeStyle={activeactiveStyle} style={navbar} to="/Conatct">Conatct</NavLink>
            </div>


        </div>
    );
};

export default Header;