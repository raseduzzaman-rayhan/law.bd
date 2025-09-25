import React from 'react';
import banner from '../../assets/banner.png'


const Banner = () => {
    return (
        <div
            className="relative w-full h-[480px] md:h-[600px] bg-cover bg-center flex items-center poppins"
            style={{
                backgroundImage: `url("${banner}")`,
            }}
        >
            <div className="relative z-10 max-w-5xl mx-1.5 md:mx-auto lg:mx-auto text-center">

                <h1 className="text-4xl font-extrabold text-white mt-4 max-w-3xl mx-auto leading-snug">We provide experienced legal representation and guide clients through every stage of their case.</h1>

                <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto">
                    Our platform makes it easy to find and book appointments with licensed doctors from different specialties. Schedule routine visits or urgent consultations quickly and securely, all in one place.
                </p>

            </div>
        </div>
    );
};

export default Banner;