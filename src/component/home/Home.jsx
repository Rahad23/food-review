import React from 'react';
import FoodDemo from '../foodDemo/FoodDemo';
import HowItWorks from '../howWorks/HowItWorks';
import Slider from '../slider/Slider';
import Owner from './../owner/Owner';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div>
                <HowItWorks></HowItWorks>
            </div>
            <FoodDemo></FoodDemo>
            <div>
                <Owner></Owner>
            </div>
        </div>
    );
};

export default Home;