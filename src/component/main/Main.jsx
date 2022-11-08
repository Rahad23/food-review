import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shered/footer/Footer';
import Header from '../shered/header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;