import React from 'react';
import Services from '../services/Services';
import TopSection from '../topSection/TopSection';

const Home = () => {
    return (
        <div className='conatiner-flex overflow-hidden'>
            <TopSection></TopSection>
            <Services></Services>
        </div>
    );
};

export default Home;