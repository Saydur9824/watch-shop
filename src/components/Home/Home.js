import React from 'react';
import Always from '../Always/Always';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Spcial from '../Spcial/Spcial';
import UserReviews from '../UserReviews/UserReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <UserReviews></UserReviews>
            <Always></Always>
            <Spcial></Spcial>
        </div>
    );
};

export default Home;