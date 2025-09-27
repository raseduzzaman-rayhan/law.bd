import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="relative">
                {/* Outer Ring */}
                <div className="w-30 h-30 border-10 border-green-100 rounded-full animate-spin border-t-green-600"></div>
            </div>
        </div>
    );
};

export default Loading;
