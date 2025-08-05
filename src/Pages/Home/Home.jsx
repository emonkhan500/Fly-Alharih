import React from 'react';
import PaymentMethod from '../../Components/PaymentMethod';
import Airlines from '../../Components/Airlines';
import Destination from '../../Components/Destination';
import ExploreBD from '../../Components/ExploreBD';

const Home = () => {
    return (
        <div>
            <ExploreBD></ExploreBD>
            <Destination></Destination>
            <Airlines></Airlines>
            <PaymentMethod></PaymentMethod>
        </div>
    );
};

export default Home;