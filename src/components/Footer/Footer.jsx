import React from 'react';
import logo from '../../assets/logo-footer.png';
import { FaFacebook, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Footer = ({ links }) => {
    return (
        <footer className="bg-black text-white p-10 poppins">

            {/* Logo and Name */}
            <div className="flex items-center justify-center gap-2 mb-4">
                <img src={logo} className="w-8 h-8" alt="logo" />
                <h1 className="text-2xl font-bold poppins">Law.BD</h1>
            </div>

            {/* Navigation Links */}
            <nav className="flex justify-center gap-6 mb-6">
                {links}
            </nav>

            {/* Divider - Full Width */}
            <div className="border-t-[1.5px] border-dashed border-gray-400 w-full my-6"></div>

            {/* Social Icons */}
            <div className="flex justify-center gap-8">



                {/* Facebook */}
                <a
                    href="https://www.facebook.com/raseduzzaman.rayhan.2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook
                        className="text-blue-600 hover:scale-125 duration-500 cursor-pointer"
                        size={30}
                    />
                </a>


                {/* Twitter */}
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsTwitterX
                        className="text-white hover:scale-125 duration-500 cursor-pointer"
                        size={30}
                    />
                </a>


                {/* Linkedin */}
                <a
                    href="https://www.linkedin.com/in/raseduzzaman-rayhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin
                        className="text-blue-500 hover:scale-125 duration-500 cursor-pointer"
                        size={30}
                    />
                </a>


                {/* Github */}
                <a
                    href="https://github.com/raseduzzaman-rayhan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithubSquare
                        className="text-white hover:scale-125 duration-500 cursor-pointer"
                        size={30}
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;