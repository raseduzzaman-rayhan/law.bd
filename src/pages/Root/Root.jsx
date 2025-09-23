import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Root = () => {


    const links = <>
        <NavLink to="/" className="mr-1 px-3 py-2 
             hover:bg-green-700 hover:text-white text-lg font-normal rounded-2xl lg:hover:bg-transparent lg:hover:text-inherit">Home</NavLink>

        <NavLink to="/mybookings" className="mr-1 px-3 py-2 
             hover:bg-green-700 hover:text-white text-lg font-normal rounded-2xl lg:hover:bg-transparent lg:hover:text-inherit">My Bookings</NavLink>

        <NavLink to="/blogs" className="mr-1 px-3 py-2 
             hover:bg-green-700 hover:text-white text-lg font-normal rounded-2xl lg:hover:bg-transparent lg:hover:text-inherit">Blogs</NavLink>

        <NavLink to="/*" className="mr-1 px-3 py-2 
             hover:bg-green-700 hover:text-white text-lg font-normal rounded-2xl lg:hover:bg-transparent lg:hover:text-inherit">Contact Us</NavLink>

    </>
    return (
        <div>
            <Navbar links={links}></Navbar>
            <Outlet></Outlet>
            <Footer links={links}></Footer>
        </div>
    );
};

export default Root;