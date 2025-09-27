// import React from 'react';
// import { Link } from 'react-router';
// import calendar from '../../assets/calendar.json';
// import Lottie from 'lottie-react';

// const NoAppointment = () => {
//     return (
//         <div className="py-10 md:min-h-screen flex justify-center items-center px-4">
//             {/* Hero Section */}
//             <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-8 md:gap-12">

//                 {/* Left Text */}
//                 <div className="flex-1 text-center md:text-left">
//                     <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-snug">
//                         No appointments found in your schedule
//                     </h1>
//                     <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg">
//                         Schedule one today and get professional legal advice quickly, safely, and at your convenience.
//                     </p>
//                     <Link to="/">
//                         <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md transition text-sm sm:text-base">
//                             Book an appointment !
//                         </button>
//                     </Link>
//                 </div>

//                 {/* Right Illustration */}
//                 <div className="flex-1 flex justify-center w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
//                     <Lottie
//                         animationData={calendar}
//                         loop={true}
//                         className="w-full h-full"
//                     />
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default NoAppointment;
import React from 'react';
import { Link } from 'react-router';
import calendar from '../../assets/calendar.json';
import Lottie from 'lottie-react';

const NoAppointment = () => {
    return (
        <div className="min-h-screen flex items-center px-4">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-8 md:gap-12 w-full">

                {/* Left Text */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-snug">
                        No appointments found in your schedule
                    </h1>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg">
                        Schedule one today and get professional legal advice quickly, safely, and at your convenience.
                    </p>
                    <Link to="/">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md transition text-sm sm:text-base">
                            Book an appointment !
                        </button>
                    </Link>
                </div>

                {/* Right Illustration */}
                <div className="flex-1 flex justify-center w-full max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <Lottie
                        animationData={calendar}
                        loop={true}
                        className="w-full h-full"
                    />
                </div>

            </div>
        </div>
    );
};

export default NoAppointment;
