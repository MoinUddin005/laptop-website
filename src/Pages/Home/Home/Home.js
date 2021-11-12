import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Review></Review>  
        </div>
    );
};

export default Home;