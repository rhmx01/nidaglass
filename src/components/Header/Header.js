import React from 'react';
import Slider from "./Slider";

const Header = () => {
    return (
        <header className="w-screen h-screen">
            <div className="mt-16 pt-4">
                <Slider/>
                <div id="header-content" className="absolute p-8">
                    <button className="book-btn w-1/4 border-solid border-stone-50 py-2 lg:py-4 px-4 lg:px-8  bg-blue-600 text-center text-white font-bold text-xl rounded-full shadow-xl uppercase" >Book Now</button>
                </div>
            </div>
        </header>
    );
};

export default Header;