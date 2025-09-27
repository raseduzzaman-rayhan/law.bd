import React, { createContext, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { addToBookedDB, removeBookedDB } from '../../utility/addRemoveToDB';
import { toast, ToastContainer } from 'react-toastify';

export const AppointmentContext = createContext(null);

const Root = () => {

    const links = <>
        <NavLink to="/" className="mr-1 px-3 md:py-2 py-1 
             hover:bg-green-700 hover:text-white text-sm md:text-lg font-normal rounded-lg lg:hover:bg-transparent lg:hover:text-inherit">Home</NavLink>

        <NavLink to="/mybookings" className="mr-1 px-3 md:py-2 py-1 
             hover:bg-green-700 hover:text-white text-sm md:text-lg font-normal rounded-lg lg:hover:bg-transparent lg:hover:text-inherit">My Bookings</NavLink>

        <NavLink to="/blogs" className="mr-1 px-3 md:py-2 py-1 
             hover:bg-green-700 hover:text-white text-sm md:text-lg font-normal rounded-lg lg:hover:bg-transparent lg:hover:text-inherit">Blogs</NavLink>

        <NavLink to="/*" className="mr-1 px-3 md:py-2 py-1 
             hover:bg-green-700 hover:text-white text-sm md:text-lg font-normal rounded-lg lg:hover:bg-transparent lg:hover:text-inherit">Contact Us</NavLink>

    </>

    const navigate = useNavigate();

    const [bookedList, setBookedList] = useState([]);

    const handleAppointment = (id, name) => {
        const isBooked = addToBookedDB(id, name);
        if (isBooked) {
            toast.success(`Successfully booked ${name}!`);
            navigate("/myBookings");
        }
        else {
            toast.warning(`You have already booked ${name}!`);
        }
    };

    const handleRemoveAppointment = (id, name) => {
        removeBookedDB(id, name);
        setBookedList(prev => prev.filter(lawyer => lawyer.id !== id));
    }

    return (
        <div className=''>
            <div className="sticky top-0 z-1">
                <Navbar links={links}></Navbar>
            </div>
            <AppointmentContext.Provider value={{ handleAppointment, bookedList, setBookedList, handleRemoveAppointment }}>
                <ToastContainer />
                <Outlet></Outlet>
            </AppointmentContext.Provider>
            <Footer links={links}></Footer>

        </div>
    );
};

export default Root; 