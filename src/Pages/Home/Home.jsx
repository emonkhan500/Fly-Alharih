import React from 'react';
import PaymentMethod from '../../Components/PaymentMethod';
import Airlines from '../../Components/Airlines';

const Home = () => {
    return (
        <div>
            <Airlines></Airlines>
            <PaymentMethod></PaymentMethod>
        </div>
    );
};

export default Home;