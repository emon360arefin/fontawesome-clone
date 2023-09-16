import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Shared/Header/Header';
import Footer from '../Component/Shared/Footer/Footer';

const Layout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Layout;