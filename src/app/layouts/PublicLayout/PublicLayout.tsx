import React from 'react';
import NavBar from '../../modules/Nav/NavBar';
import { Outlet } from 'react-router';

const PublicLayout = () => {
    return (
        <main className='min-w-screen min-h-screen box-border flex flex-col'>
            <NavBar />
            <Outlet />
        </main>
    );
};

export default PublicLayout;
