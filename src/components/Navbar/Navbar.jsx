import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { IoMenuSharp } from 'react-icons/io5';
import { CgCloseR } from 'react-icons/cg';
import { Link } from 'react-router';


const Navbar = ({ links }) => {

    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar bg-gray-50 hover:shadow-md px-5">
            <div className="navbar-start">
                <span className="md:hidden lg:hidden" onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <CgCloseR className='text-red-600' size={20} /> :
                            <IoMenuSharp className='text-green-600' size={20} />
                    }
                    <ul
                        className={`md:hidden lg:hidden absolute duration-1000 
                        ${open ? 'top-12 opacity-100' : '-top-36 opacity-0'}
                        flex flex-col bg-green-200 p-3 rounded-md`}>
                        {links}
                    </ul>
                </span>
                <div className="">
                    <Link to="/">
                        <span className='hidden md:flex lg:flex items-center gap-1 p-1 rounded-md cursor-pointer'>
                            <img src={logo} className='w-6 h-6' />
                            <p className="text-xl font-bold poppins text-gray-700">Law.BD</p>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden md:flex lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <nav className="flex justify-center">
                        {links}
                    </nav>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="hidden md:block btn btn-outline hover:bg-green-700 text-green-700 text-lg px-12 py-1 border border-green-700 rounded-full font-medium hover:text-white transform transition duration-300 hover:scale-105">
                    Log in
                </button>
                <div className="block md:hidden rounded-md mr-2 cursor-pointer">
                    <img src={logo} className="w-6 h-6" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

