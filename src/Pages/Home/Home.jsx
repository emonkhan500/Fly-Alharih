import React from 'react';
import PaymentMethod from '../../Components/PaymentMethod';
import Airlines from '../../Components/Airlines';
import Destination from '../../Components/Destination';
import ExploreBD from '../../Components/ExploreBD';
import TopTravel from '../../Components/TopTravel';
import Service from '../../Components/Service';

const Home = () => {
    return (
        <div>
            <Service></Service>
            <TopTravel></TopTravel>
            <ExploreBD></ExploreBD>
            <Destination></Destination>
            <Airlines></Airlines>
            <PaymentMethod></PaymentMethod>
        </div>
    );
};

export default Home;