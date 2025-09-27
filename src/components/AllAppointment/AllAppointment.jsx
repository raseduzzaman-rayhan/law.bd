import React, { useContext } from 'react';
import CancelAppointment from '../../components/CancelAppointment/CancelAppointment';
import { ToastContainer } from 'react-toastify';
import { AppointmentContext } from '../../pages/Root/Root';

const AllAppointment = () => {

    const { bookedList, handleRemoveAppointment } = useContext(AppointmentContext)

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
                        handleRemoveAppointment={handleRemoveAppointment}
                    ></CancelAppointment>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default AllAppointment;