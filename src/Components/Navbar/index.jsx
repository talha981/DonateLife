import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token')); // Check if token exists
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from local storage
        setIsLoggedIn(false); // Update login state
        navigate('/login'); // Redirect to login page
    };

    return (
        <nav className="bg-red-600 text-white shadow-md font-mono">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Left side - Logo */}
                {/* <div className="flex-shrink-0">
                    <img src="Navbar/S6.png" alt="Blood Donation Logo" className="h-20 w-auto" />
                </div> */}

                {/* Center - Navigation Links */}
                <div className="hidden md:flex space-x-8 flex-1 justify-center">
                    <Link to='/' className="text-xl font-bold hover:text-gray-200">Home</Link>
                    <Link to='/about' className="text-xl font-bold hover:text-gray-200">About</Link>
                    <a href='#' className="text-xl font-bold hover:text-gray-200">Details</a>
                </div>

                {/* Right side - Logout Button */}
                <div className="md:flex items-center space-x-4">
                    {isLoggedIn && (
                        <button onClick={handleLogout} className="text-xl font-bold hover:text-gray-200">
                            Logout
                        </button>
                    )}
                </div>

                {/* Right side - Toggle Button for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-red-600">
                    <Link to='/' onClick={toggleMenu} className="block py-2 px-4 text-xl font-bold hover:bg-red-700">Home</Link>
                    <a href='#' onClick={toggleMenu} className="block py-2 px-4 text-xl font-bold hover:bg-red-700">About</a>
                    <a href='#' onClick={toggleMenu} className="block py-2 px-4 text-xl font-bold hover:bg-red-700">Details</a>
                    {isLoggedIn && (
                        <button onClick={() => { toggleMenu(); handleLogout(); }} className="block py-2 px-4 text-xl font-bold hover:bg-red-700">
                            Logout
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
