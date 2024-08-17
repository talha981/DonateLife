import React from 'react';

const About = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-red-600 text-white font-mono">
                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[300px] 2xl:h-[320px]">
                    <img
                        src="/Navbar/Home.jpg" // Adjust the image path as needed
                        alt="About Blood Donation"
                        className="object-cover w-full h-full min-h-[200px] object-center"
                    />
                    <div className="absolute inset-0 bg-black opacity-35 z-0"></div> {/* Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 mb-8 text-center z-10">
                        <a href="#learn-more" className="inline-flex items-center bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-red-500">
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8 z-10"> {/* Adjust z-index */}
                    <div className="text-center animate-fade-in-out">
                        <h1 className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">Why Blood Donation Matters</h1>
                        <p className="mt-4 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">Discover the profound impact of blood donation and how it transforms lives. Your contribution is invaluable in saving lives and supporting healthcare.</p>
                    </div>
                </div>
            </section>

            {/* About Content Section */}
            <section id="learn-more" className="py-16 bg-red-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-red-600">The Importance of Blood Donation</h2>
                        <p className="mt-6 text-lg leading-relaxed">
                            Blood donation is a critical component of medical care that supports various treatments and procedures. Each donation has the potential to save multiple lives, making it an essential act of kindness and generosity. Blood is used in surgeries, trauma care, cancer treatments, and more, addressing urgent medical needs and improving patient outcomes.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            Beyond the immediate medical benefits, blood donation fosters a sense of community and solidarity. It brings people together for a common cause and strengthens the bonds of empathy and mutual support. By donating blood, you not only help those in need but also inspire others to join in this life-saving mission.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-red-600">Benefits of Donating Blood</h2>
                        <p className="mt-4 text-lg">Explore the wide range of benefits that come with donating blood, from personal health advantages to the positive impact on the community.</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Health Benefits',
                                description: 'Donating blood can help improve your cardiovascular health, reduce the risk of certain diseases, and enhance overall well-being.',
                                imgSrc: 'https://content.presspage.com/uploads/1873/1920_donatingblood.jpg?10000'
                            },
                            {
                                title: 'Community Impact',
                                description: 'Every donation contributes to a stable and sufficient blood supply, ensuring that hospitals can meet patient needs effectively.',
                                imgSrc: 'https://e1.pxfuel.com/desktop-wallpaper/16/739/desktop-wallpaper-blood-bank-blood-donation.jpg'
                            },
                            {
                                title: 'Personal Fulfillment',
                                description: 'The act of giving blood brings a sense of personal satisfaction and accomplishment, knowing you have made a difference in someone’s life.',
                                imgSrc: 'https://blog.amopportunities.org/wp-content/uploads/2020/01/Blood-Donor-Awareness-Month-scaled-1.jpg'
                            }
                        ].map((benefit, index) => (
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
            <section className="bg-red-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold">Take the Next Step</h2>
                    <p className="mt-4 text-lg">Ready to make a difference? Find out how you can get involved, schedule your blood donation, and become a part of our community of life-savers.</p>
                    <div className="mt-8">
                        <a href='#' className="inline-block bg-white text-red-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200">
                            Schedule Your Donation
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
