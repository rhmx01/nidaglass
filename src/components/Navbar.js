import React from 'react';
import {Menu, Settings} from "@mui/icons-material";

const Navbar = () => {


    function toggle() {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    }

    return (
        <div>
            <nav className="flex fixed w-full shadow-lg">
                <div className="flex w-full lg:container mx-auto">
                    <div className="logo flex items-center">
                        <img className="h-16" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png" alt="Logo Image"/>
                    </div>
                    <div className="hamburger">
                        <Menu onClick={toggle}/>
                    </div>
                    <div className="flex justify-between w-full text-gray-500">
                        <ul className="nav-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li className="show-login-btn"><button className="login-button">Login</button><button className="join-button">Join</button></li>
                        </ul>
                        <ul className="nav-links border-l">
                            <li className="ml-2"><button className="login-button">Login</button></li>
                            <li className="ml-2"><button className="join-button">Join</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;