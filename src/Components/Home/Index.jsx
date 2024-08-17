import React, { useMemo } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const benefits = [
    {
        title: 'Help Save Lives',
        description: 'Your blood donation can save up to three lives. It is a small act that can have a huge impact.',
        imgSrc: 'https://vistapointe.net/images/blood-donation-6.jpg',
    },
    {
        title: 'Support Medical Needs',
        description: 'Blood is used in various medical treatments, including surgeries and trauma care. Your donation helps meet these critical needs.',
        imgSrc: 'https://uniquedestination.mitsishotels.com/wp-content/uploads/2020/04/shutterstock_569165656.jpg',
    },
    {
        title: 'Build Community',
        description: 'Donating blood is not just about giving; it\'s about creating a sense of community and sharing the spirit of giving.',
        imgSrc: 'https://www.goodnet.org/photos/620x0/26772_hd.jpg',
    },
];

const Home = () => {
    // Memoize the benefits list to avoid unnecessary recalculations
    const memoizedBenefits = useMemo(() => benefits, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-red-600 text-white font-mono">
                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[300px] 2xl:h-[320px]">
                    <img
                        src="/Navbar/Home.jpg"
                        alt="Blood Donation Hero"
                        className="object-cover w-full h-full min-h-[200px]  object-center"
                    />
                    <div className="absolute inset-0 bg-black opacity-35 z-0"></div> {/* Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 mb-8 text-center z-10">
                        <Link to='/login' className="inline-flex items-center bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-red-500">
                            <FaSignInAlt className="mr-2" /> Login
                        </Link>
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8 z-10"> {/* Adjust z-index */}
                    <div className="text-center animate-fade-in-out">
                        <h1 className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">Save Lives, Donate Blood</h1>
                        <p className="mt-4 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">Join us in our mission to make the world a healthier place. Your donation can save lives.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-red-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-red-600">Why Donate Blood?</h2>
                        <p className="mt-4 text-lg">
                            Blood donation is a simple yet powerful way to make a difference. Each donation can help multiple patients in need. By donating blood, you are contributing to the well-being of individuals who are suffering from various medical conditions.
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {memoizedBenefits.map((benefit, index) => (
                            <div key={index} className="relative bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
                                <div className="relative">
                                    <img src={benefit.imgSrc} alt={`Benefit ${index + 1}`} className="w-full h-48 object-cover rounded-md transition-opacity hover:opacity-80" />
                                    <div className="absolute inset-0 bg-black opacity-30 rounded-md"></div> {/* Overlay */}
                                </div>
                                <div className="relative z-10 mt-4">
                                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                                    <p className="mt-2 text-gray-600">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section id="donate" className="bg-red-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold">Ready to Make a Difference?</h2>
                    <p className="mt-4 text-lg">Join our community of blood donors today and help us save lives. Click below to find a donation center near you and schedule your appointment.</p>
                    <div className="mt-8">
                        <a href='#' className="inline-block bg-white text-red-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200">
                            Find Donation Center
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
