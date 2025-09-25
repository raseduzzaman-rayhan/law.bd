import React, { use, useState } from 'react';
import LawyerCard from '../LawyerCard/LawyerCard';

const LawyerList = ({ lawyersListPromise }) => {
    const lawyers = use(lawyersListPromise);
    const [showAll, setShowAll] = useState(false);

    // first 6 lawyers showing :
    const visibleLawyers = showAll ? lawyers : lawyers.slice(0, 6);

    return (
        <div className="font-sans antialiased bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 poppins">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Our Best Lawyers
                </h2>
                <p className="mt-4 text-lg text-gray-500 max-w-4xl mx-auto">
                    Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {visibleLawyers.map((lawyer, index) => (
                    <LawyerCard key={index} lawyer={lawyer} />
                ))}
            </div>

            {!showAll && (
                <div className="mt-10 text-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Show All Lawyer
                    </button>
                </div>
            )}
        </div>
    );
};

export default LawyerList;