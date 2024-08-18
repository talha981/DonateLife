import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-red-600 text-white font-mono">
                <div className="relative h-[300px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px] 2xl:h-[480px]">
                    <img
                        src="/Navbar/Home.jpg"
                        alt="Dashboard Hero"
                        className="object-cover w-full h-full min-h-[300px] object-center"
                    />
                    <div className="absolute inset-0 bg-black opacity-35 z-0"></div> {/* Overlay */}
                    
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-red-600">Dashboard Overview</h2>
                        <p className="mt-4 text-lg">Here you can see key statistics about your donations and upcoming events.</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <h3 className="text-xl font-semibold">Total Donations</h3>
                            <p className="mt-2 text-gray-600">5</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <h3 className="text-xl font-semibold">Community Impact</h3>
                            <p className="mt-2 text-gray-600">2000 Lives Saved</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <h3 className="text-xl font-semibold">Upcoming Events</h3>
                            <p className="mt-2 text-gray-600">Next event: September 20, 2024</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Actions Section */}
            <section className="py-16 bg-red-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-red-600">Take Action</h2>
                        <p className="mt-4 text-lg">Here's how you can get involved and make a difference.</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <h3 className="text-xl font-semibold">Donate Blood</h3>
                            <p className="mt-2 text-gray-600">Find a nearby donation center and book an appointment.</p>
                            <a href="#" className="mt-4 inline-block bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-500">Find Center</a>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <h3 className="text-xl font-semibold">Volunteer</h3>
                            <p className="mt-2 text-gray-600">Join our team of volunteers and help organize blood drives.</p>
                            <a href="#" className="mt-4 inline-block bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-500">Volunteer</a>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <h3 className="text-xl font-semibold">Spread the Word</h3>
                            <p className="mt-2 text-gray-600">Help us reach more people by sharing our message.</p>
                            <a href="#" className="mt-4 inline-block bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-500">Share</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
