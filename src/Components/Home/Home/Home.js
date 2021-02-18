import React from 'react';
import FindYourCoupons from '../FindYourCoupons/FindYourCoupons';
import FindYourOffers from '../FindYourOffers/FindYourOffers';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <FindYourCoupons/>
            <FindYourOffers/>
            <Footer/>
        </div>
    );
};

export default Home;