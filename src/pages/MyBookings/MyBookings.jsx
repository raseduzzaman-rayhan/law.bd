import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getBookedAppointment, removeBookedDB } from '../../utility/addRemoveToDB';
import CancelAppointment from '../../components/CancelAppointment/CancelAppointment';
import { ToastContainer } from 'react-toastify';

const MyBookings = () => {
    const [bookedList, setBookedList] = useState([]);

    const data = useLoaderData();

    useEffect(() => {
        const bookedLawyerData = getBookedAppointment();
        const convertedBookedLawyerId = bookedLawyerData.map(id => parseInt(id));
        const myBookedLawyer = data.filter(lawyer => convertedBookedLawyerId.includes(lawyer.id));
        setBookedList(myBookedLawyer);
    }, [data]);



    const handleRemoveAppoinment = (id) => {
        removeBookedDB(id);
        setBookedList(prev => prev.filter(lawyer => lawyer.id !== id));
    }

    return (
        <div className="max-w-6xl min-h-screen mx-auto p-6 space-y-6">
            {/* charts */}
            <div className="">

            </div>
            {/* Header */}
            <div className="bg-gray-100 p-6 rounded-lg text-center border-2 border-blue-50 poppins">
                <h2 className="text-4xl font-extrabold text-gray-700">My Today Appointments : {bookedList.length}</h2>
                <p className="text-gray-500 mt-2">
                    Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
                </p>
            </div>

            {/* Appointment Section */}
            <div className="flex flex-col gap-5">
                {
                    bookedList.map(singleLawyer => <CancelAppointment
                        key={singleLawyer.id}
                        singleLawyer={singleLawyer}
                        handleRemoveAppoinment={handleRemoveAppoinment}
                    ></CancelAppointment>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyBookings;