import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <div className="navbar bg-amber-400 shadow-xl shadow-amber-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact text-blue-800 dropdown-content mt-3 p-2 shadow bg-amber-500 rounded-box w-52">
                            <Link className='btn btn-ghost' to='/'>Home</Link>
                            <Link className='btn btn-ghost' to='/topics'>Topics</Link>
                            <Link className='btn btn-ghost' to='/statistics'>Statistics</Link>
                            <Link className='btn btn-ghost' to='/blog'>Blog</Link>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl text-blue-800">Quiz Buzz</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <div className="menu menu-horizontal text-blue-800 p-0">
                        <Link className='btn btn-ghost' to='/'>Home</Link>
                        <Link className='btn btn-ghost' to='/topics'>Topics</Link>
                        <Link className='btn btn-ghost' to='/statistics'>Statistics</Link>
                        <Link className='btn btn-ghost' to='/blog'>Blog</Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;