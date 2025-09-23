import React from 'react';
import { FaRegRegistered, FaUserCircle } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router';

const LawyerCard = ({ lawyer }) => {
    const { name, specialty, licenseNo, experience, available, image } = lawyer;

    return (
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-2xl p-6 lg:w-[560px] mx-auto border-2 border-blue-100 hover:border-blue-300 gap-8 overflow-hidden hover:shadow-lg transition duration-300">

            {/* Image */}
            <div className="flex-shrink-0">
                {image ? (
                    <img src={image} alt={name} className="h-44 w-44 rounded-lg object-cover" />
                ) : (
                    <FaUserCircle className="h-44 w-44 text-gray-300" />
                )}
            </div>

            {/* Details */}
            <div className="flex-1 w-full ml-5">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${available ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                        <GoDotFill className={`mr-1 ${available ? "text-green-500" : "text-red-500"}`} />
                        {available ? "Available" : "Not Available"}
                    </span>

                    <span className="bg-blue-100 text-blue-500 text-xs font-medium px-3 py-1 rounded-full">
                        {experience} Experience
                    </span>
                </div>

                {/* Name */}
                <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                <p className="text-gray-600">{specialty}</p>

                {/* License */}
                <p className="flex items-center text-sm text-gray-500 mt-1">
                    <FaRegRegistered className="mr-1 mt-0.5 text-green-500" />
                    License No: {licenseNo}
                </p>


                {/* Button */}
                <div className="mt-4">
 
                    <button className="px-6 py-2 text-green-600 border border-blue-200 rounded-full font-medium hover:bg-green-600 hover:text-white transition duration-300 btn-wide">
                        View Details
                    </button>
        
                </div>
            </div>
        </div>
    );
};

export default LawyerCard;