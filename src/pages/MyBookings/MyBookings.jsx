import React, { useContext, useEffect } from 'react';
import { getBookedAppointment } from '../../utility/addRemoveToDB';
import NoAppointment from '../../components/NoAppointment/NoAppointment';
import AllAppointment from '../../components/AllAppointment/AllAppointment';
import { useLoaderData } from 'react-router';
import { AppointmentContext } from '../Root/Root';

const MyBookings = () => {

    const notArray = useLoaderData();
    const data = Array.isArray(notArray) ? notArray : [];

    const { bookedList, setBookedList } = useContext(AppointmentContext)

    // Update bookedList when data arrives
    useEffect(() => {
        if (data.length === 0) return;

        const bookedLawyerData = getBookedAppointment();
        const convertedBookedLawyerId = bookedLawyerData.map(id => parseInt(id));
        const myBookedLawyer = data.filter(lawyer => convertedBookedLawyerId.includes(lawyer.id));

        setBookedList(myBookedLawyer);
    }, [data]); // <-- important: data dependency


    return (
        <div>
            {
                bookedList.length > 0 ?
                    <AllAppointment />
                    :
                    <NoAppointment />
            }
        </div>
    );
};

export default MyBookings;
