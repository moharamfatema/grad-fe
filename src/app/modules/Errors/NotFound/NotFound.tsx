import React from 'react';
import './notFound.css';

const NotFound = () => {
    return (
        <div className='container error m-auto max-h-[600px]'>
            <div className='boo-wrapper'>
                <div className='boo'>
                    <div className='face' />
                </div>
                <div className='shadow' />
                <h1>Whoops!</h1>
                <p>
                    {/* eslint-disable-next-line quotes */}
                    {"We couldn't find the page you"}
                    <br />
                    were looking for.
                </p>
            </div>
        </div>
    );
};

export default NotFound;
