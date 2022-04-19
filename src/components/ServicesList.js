import React from 'react';
import dsafari from "../images/desert-safari.jpg"
import camel from "../images/camel-trekking.jpg"
import activity from "../images/activity.jpg"
import daytour from "../images/day-tour.jpg"
const ServicesList = () => {
    const services = [
        {
            name: 'Desert safari',
            image: daytour,
            duration: '3 days'
        },
        {
            name: 'One Day Tour',
            image: dsafari,
            duration: '1 day'
        },
        {
            name: 'Camel Trekking',
            image: camel,
            duration: '3 days'
        },
        {
            name: 'Activities',
            image: activity,
            duration: '1 days'
        },
    ]
    return (
        <div className="mt-8 p-8 ">
            <h1 className="font-bold text-4xl text-center  text-purple mb-4">Best Packages For You</h1>
            <div className="mt-8 grid lg:grid-cols-4 gap-4 w-full lg:container mx-auto">
                {
                    services.map(service => (
                        <div className="card mt-16 shadow-xl mx-auto">
                            <div className="card-img">
                                <img src={service.image} alt={service.name}/>
                            </div>
                            <div className="card-content">
                                <h2 className="big-title font-bold">{service.name}</h2>
                                <h3 className="medium-title">{service.duration}</h3>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default ServicesList;