import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-8'>
            <h2 className='text-7xl font-bold text-[#616d8a]'>404</h2>

            <Link className='px-16 py-2 rounded-lg bg-[#FFD43B]' to='/'>
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;