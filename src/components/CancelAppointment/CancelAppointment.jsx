import React from 'react';
import { GrUserExpert } from 'react-icons/gr';
import { RiDeleteBin2Line } from 'react-icons/ri';


const CancelAppointment = ({ singleLawyer, handleRemoveAppoinment }) => {

    const { id, name, specialty, fee } = singleLawyer;

    return (
        <div className="bg-white p-6 rounded-lg shadow space-y-4 border-2 border-blue-50 poppins">
            <div className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-dashed border-blue-100 pt-4 gap-3">
                <div className="py-3 pl-1">
                    <h1 className="text-gray-600 text-2xl font-semibold">{name}</h1>
                    <span className='flex items-center gap-1  mt-1.5'>
                        <GrUserExpert className='text-green-500' />
                        <p className="text-gray-600 text-sm">{specialty}</p>
                    </span>
                </div>
                <p className='pr-1 text-gray-600'>Appointment Fee : <span className='text-green-500'> {fee}</span> Taka</p>
            </div>
            <button
                onClick={() => handleRemoveAppoinment(id)}
                className="w-full text-red-600 border-[1.5px] border-red-500 py-3 rounded-full font-semibold px-8 shadow-lg transform transition duration-300 hover:text-white hover:bg-red-600 focus:ring-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2">
                <span className='flex justify-center items-center gap-2'>
                    <span>Cancel Appointment </span>
                    <RiDeleteBin2Line size={25} />
                </span>
            </button>


        </div>
    );
};

export default CancelAppointment;
