import React from 'react';
import Slider from "./Slider";
import {ArrowRightAlt} from "@mui/icons-material";

const Header = () => {
    return (
        <header className="w-screen h-screen">
            <div className="h-full">
                <Slider/>
                <div id="header-content" className="absolute p-8">
                    <p className="text-2xl lg:text-4xl font-bold mb-5 ml-2 text-white ">
                        For best experiences,<br/>
                        go with experienced guides
                    </p>
                    <button className="book-btn w-full lg:w-1/5 py-2 lg:py-4 px-4 lg:px-8  bg-blue-600 text-center text-white font-500 text-xl rounded-full shadow-xl shadow-inner uppercase" >Book Now <ArrowRightAlt/> </button>
                </div>
            </div>
        </header>
    );
};

export default Header;