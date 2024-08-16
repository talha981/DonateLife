import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-red-600 text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Left side - Image */}
                {/* <div className="flex-shrink-0 ">
                    <img src="Navbar/S6.png" alt="Blood Donation Logo" className="h-20 w-auto" />
                </div> */}


                {/* Center - Navigation Links */}
                <div className="hidden md:flex space-x-8 flex-1 justify-center">
                    <Link to='/' className="text-xl font-bold hover:text-gray-200">Home</Link>
                    <a href='#' className="text-xl font-bold hover:text-gray-200">About</a>
                    <a href='#' className="text-xl font-bold hover:text-gray-200">Details</a>
                </div>

                {/* Right side - Login & Sign-Up */}
                
            </div>
        </nav>
    );
};

export default Navbar;
