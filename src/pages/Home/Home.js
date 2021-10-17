import React from 'react';
import TransparentHeader from '../shared/Header/TransparentHeader';
import Slider from './components/Slider/Slider';

const Home = () => {
    return (
        <>
            <header>
                <TransparentHeader></TransparentHeader>
                <Slider />
            </header>
        </>
    );
};

export default Home;