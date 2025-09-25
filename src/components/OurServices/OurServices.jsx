import React, { useEffect, useRef, useState } from "react";
import { FaUserTie, FaStar, FaGavel, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";

const OurServices = () => {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.7 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className="py-16 md:py-24 poppins" ref={sectionRef}>
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        We Provide Best Law Services
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto">
                        Our platform connects you with verified, experienced Lawyers across
                        various specialities — all at your convenience.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {/* Card 1: Total Lawyers */}
                    <div className="bg-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105">
                        <div className="p-4 rounded-full mb-4">
                            <FaUserTie size={50} className="text-purple-600" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                            {inView ? <CountUp end={199} duration={2} /> : 199}+
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base">Total Lawyers</p>
                    </div>

                    {/* Card 2: Total Reviews */}
                    <div className="bg-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105">
                        <div className="p-4 rounded-full mb-4">
                            <FaStar size={50} className="text-yellow-500" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                            {inView ? <CountUp end={450} duration={2.5} /> : 400}+
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base">Total Reviews</p>
                    </div>

                    {/* Card 3: Cases Initiated */}
                    <div className="bg-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105">
                        <div className="p-4 rounded-full mb-4">
                            <FaGavel size={50} className="text-yellow-500" />
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                            {inView ? <CountUp key="cases" end={1900} duration={3} /> : 1900}+
                        </h3>

                        <p className="text-gray-500 text-sm md:text-base">Cases Initiated</p>
                    </div>

                    {/* Card 4: Total Staffs */}
                    <div className="bg-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105">
                        <div className="p-4 rounded-full mb-4">
                            <FaUsers size={50} className="text-pink-500" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                            {inView ? <CountUp end={300} duration={2.2} /> : 300}+
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base">Total Staffs</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;