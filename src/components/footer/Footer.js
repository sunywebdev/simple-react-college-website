import React from 'react';
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
        <footer class="text-center mt-5">
            <div class="container-fluid py-3" style={{ backgroundColor: '#2C3E50' }}>
                <div class="row  text-light">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0  text-light">
                        <h4 class="text-uppercase mb-4">Usefull Links</h4>
                        <NavLink activeStyle={activeactiveStyle} style={navbar} to="/Home">Home</NavLink> <br />
                        <NavLink activeStyle={activeactiveStyle} style={navbar} to="/AllServices">Services</NavLink> <br />
                        <NavLink activeStyle={activeactiveStyle} style={navbar} to="/AboutUs">About us</NavLink> <br />
                        <NavLink activeStyle={activeactiveStyle} style={navbar} to="/Conatct">Conatct</NavLink> <br />
                    </div>
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">About Freelancer</h4>
                        <p class="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>
                            .
                        </p>
                    </div>
                </div>
            </div>
            <div class="copyright py-4 text-center text-light" style={{ backgroundColor: '#1A252F' }}>
                <div class="container"><small>Copyright &copy; Shoyeb Mohammed Suny 2021</small></div>
            </div>
        </footer>



    );
};

export default Footer;