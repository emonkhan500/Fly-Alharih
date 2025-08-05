import React from 'react';
import PaymentMethod from '../../Components/PaymentMethod';
import Airlines from '../../Components/Airlines';
import Destination from '../../Components/Destination';

const Home = () => {
    return (
        <div>
            <Destination></Destination>
            <Airlines></Airlines>
            <PaymentMethod></PaymentMethod>
        </div>
    );
};

export default Home;