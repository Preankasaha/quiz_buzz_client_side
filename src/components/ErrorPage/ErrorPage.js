import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center '>

                <div className='mt-14'>
                    <img className='w-72 lg:w-80 rounded-xl' src="https://cdn.vectorstock.com/i/1000x1000/16/09/website-error-404-page-not-found-vector-18761609.webp" alt="" />
                </div>

                <div className='lg:text-3xl text-blue-800 '>
                    <p className=' font-extrabold'>OPPS!</p>
                    <p className='font-bold'>The Page you requested couldn't be found or doesn't exist</p>
                </div>

            </div>

            <button className='btn btn-warning text-blue-800 text-xl border-none mt-8'><Link to='/'>Back to Home</Link></button>

        </div>
    );
};

export default ErrorPage;