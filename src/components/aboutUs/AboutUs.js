import React from 'react';

const AboutUs = () => {
    return (
        <div className='container my-5' style={{ color: '#2C3E50' }}>
            <h1 className='my-5 fw-bold text-center  display-3   text-uppercase'>About Us</h1>
            <div className='col-10 mx-auto'>
                <h6>The first Private Polytechnic Institute of Chittagong, established in 1999 by some honorable persons who dedicate their life's to spread the lights of education. To develop a modern country there is no alternate of Technical Education. NIT takes the necessary steps to spread the knowledge of technical education in Bangladesh. As a Pioneer of Private Poly-Technic Institute, NIT always takes the step to stay ahead of the bunch. Here at NIT we apply the modern teaching styles, for effective studies.</h6>

                <h3 className='py-3'>Our Specialties:</h3>
                <ul>
                    <li>Easiest means of transport</li>
                    <li>We have well qualified dynamic and professional teachers panel</li>
                    <li> 24 hours Generator support</li>
                    <li> Well furnished and rich library support</li>
                    <li> Electrical, Electronics, Computer, Physics and Chemistry Lab with modern equipment facilities</li>
                    <li>Internet Facilities</li>
                    <li>Special care to the weakest students</li>
                    <li> Scholarship facilities</li>
                    <li> Study tours, sports and cultural programs</li>
                    <li> Installment payment system for tuition fee</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;