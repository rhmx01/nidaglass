import React from 'react';
import daytour from "../images/day-tour.jpg"

const About = () => {
    const data_fr = {
        name: "About Morocco",
        description: "Morocco is a peninsula located halfway down the west coast of Arabian gulf and bordered by Saudi Arabia in the south. It is approx. 180 km north to south and a mere 85 km wide. It has an area of some 11,400 sq km. Morocco’s landscape is very much highlighted by sandy desert patterns. Morocco has a subtropical arid climate. It has a year round sunny skies with rain being a very rare occurrence with winter months November to March, the most suitable for tourist and temperature averaging 75 degree fahrenheit."
    }
    return (
        <div className="w-full lg:container mx-auto">
            <div className="pt-16 flex items-center">
                <div className="lg:flex py-8">
                    <div className="px-4">
                        <img id="about-pic" src={daytour} alt="Rachid hamma ali" className="flex shadow-xl max-h-96 rounded-xl shadow-lg"/>
                    </div>
                    <div id="profiledescription" className="text-color">
                        <h1 className="p-4 font-bold text-2xl text-left">{data_fr.name}</h1>
                        <p className="p-4 text-left max-w-2xl">{data_fr.description}</p>
                        {/*<div className="p-4 flex mx-auto">*/}
                        {/*    <a href="https://www.linkedin.com/in/rhmx/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Rachid hamma ali linkedIn profile" className="social-icons p-1 rounded-md"/></a>*/}
                        {/*    <a href="https://github.com/rhmx01" target="_blank" rel="noreferrer"><img src={github} alt="Rachid hamma ali github profile" className="social-icons p-1 rounded-md"/></a>*/}
                        {/*    <a href="https://rhmx01.medium.com" target="_blank" rel="noreferrer"><img src={medium} alt="Rachid hamma ali medium profile" className="social-icons p-1 rounded-md"/></a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;