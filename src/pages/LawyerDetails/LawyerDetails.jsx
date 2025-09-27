import React, { useContext } from "react";
import { FaRegRegistered, FaUserCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useLoaderData, useParams } from "react-router";
import { AppointmentContext } from "../Root/Root";



const LawyerDetails = () => {
    const { handleAppointment } = useContext(AppointmentContext)

    const { id } = useParams();
    const lawyerId = parseInt(id);

    const data = useLoaderData();
    const singleLawyer = data.find(lawyer => lawyer.id === lawyerId);

    const { name, specialty, licenseNo, experience, available, image, consultationFee, availabilityDay, fee } = singleLawyer;


    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6">
            {/* Header */}
            <div className="bg-gray-100 p-6 rounded-lg text-center border-2 border-blue-50">
                <h2 className="text-2xl font-bold">Lawyer’s Profile Details</h2>
                <p className="text-gray-600 mt-2">
                    <strong>{name}</strong> is an experienced legal professional specializing in <i>{specialty}</i> with over <i>{experience}</i> of successful practice. He is committed to providing reliable legal advice and effective representation to protect his clients’ rights.
                </p>
            </div>

            {/* Lawyer Info */}
            <div className="bg-white p-6 rounded-lg shadow flex flex-col sm:flex-row gap-6 items-center sm:items-start border-2 border-blue-50">
                {/* Image placeholder */}
                <div className="flex-shrink-0">
                    {image ? (
                        <img src={image} alt={name} className="h-44 w-44 rounded-lg object-cover" />
                    ) : (
                        <FaUserCircle className="h-44 w-44 text-gray-300" />
                    )}
                </div>

                {/* Details */}
                <div className="flex flex-col space-y-2 text-center sm:text-left">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mx-auto w-40 sm:mx-0">
                        {experience} Experience
                    </span>
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-gray-600 flex flex-wrap justify-center sm:justify-start items-center gap-2">
                        {specialty} Expert <FaRegRegistered className="text-blue-300" />
                        License No: {licenseNo}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        Availability: {
                            Object.values(availabilityDay).map((day, idx) => (
                                <span key={idx} className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">{day}</span>
                            ))
                        }
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-3">
                        <p className="text-gray-800">
                            Fee : <span className="text-green-600 font-semibold">{fee} Taka</span>
                        </p>
                        <p className="text-gray-800">
                            Consultation Fee : <span className="text-green-600 font-semibold">{consultationFee} Taka</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Appointment Section */}
            <div className="bg-white p-6 rounded-lg shadow space-y-4 border-2 border-blue-50">
                <h3 className="text-lg font-semibold text-center">Book an Appointment</h3>

                <div className="flex flex-col sm:flex-row items-center justify-between border-t-2 border-dashed border-blue-100 pt-4 gap-3">
                    <span className="text-gray-600 font-medium">Availability</span>
                    <span className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${available ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                        <GoDotFill className={`mr-1 ${available ? "text-green-500" : "text-red-500"}`} />
                        Lawyer {available ? "Available" : "Not Available"} Today
                    </span>
                </div>

                <div className="bg-orange-50 text-orange-600 p-3 rounded-md text-sm flex flex-col sm:flex-row items-center gap-2">
                    <span className="text-lg -mt-0.5">⚠️</span>
                    <p className="text-center sm:text-left">
                        Due to high patient volume, we are currently accepting appointments for today only.
                        We appreciate your understanding and cooperation.
                    </p>
                </div>

                {available ? (
                    <button
                        onClick={() => handleAppointment(id, name)}
                        className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 px-8 shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Book Appointment Now
                    </button>
                ) : (
                    <button
                        className="w-full bg-yellow-500 text-white py-3 rounded-full font-semibold px-8 shadow-md hover:bg-yellow-600 transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
                        Book Appointment Later
                    </button>
                )}
            </div>
       
        </div>
    );
};

export default LawyerDetails;