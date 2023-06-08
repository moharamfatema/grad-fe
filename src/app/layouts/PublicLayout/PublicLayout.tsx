import React from 'react';
import NavBar from '../../modules/Nav/NavBar';
import { Outlet } from 'react-router';

const PublicLayout = () => {
    return (
        <main>
            <NavBar />
            <Outlet />
        </main>
    );
};

export default PublicLayout;
