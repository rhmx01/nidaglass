import React from 'react';
import about from "../images/about.jpg"

const About = () => {
    const data_fr = {
        name: "Nidaglass",
        description: "Nidaglass is part of the Nicholls & Clarke Group. We specialise in meeting all glass requirements for the fenestration industry. Being independent is a key to our success, with the flexibility of offering a full range of glass products from all major glass manufacturers. Our fleet of over 30 commercial including Hiab lorries, HGV and small vans enable Nidaglass to offer a flexible delivery service to all customers throughout the Midlands and Southern England.\n" +
            "\n" +
            "As one of the largest independent Company in the South East and part of a £70 million Group, we have the capability to commit to our market through ongoing investments in order to offer the best in quality, capacity, performance, availability, distribution and customer service. To us, quality is paramount."
    }
    return (
        <div className="w-full lg:container mx-auto">
            <div className="pt-16 flex items-center">
                <div className="lg:flex py-8">
                    <div className="px-4 flex items-center">
                        <img id="about-pic" src={about} alt="Rachid hamma ali" className="flex shadow-xl max-h-96 rounded-xl shadow-lg"/>
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