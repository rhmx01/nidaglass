import React from 'react';
import verretrempe from "../images/products/verre-trempe.jpg"
import paroidouche from "../images/products/paroi-de-douche.jpg"
import verrefeuillete from "../images/products/verre-feuillete-33-2.jpg"
import miroir from "../images/products/miroir.jpg"
import verresimple from "../images/products/verresimple.jpg"
import doublevitre from "../images/products/doublevitre.jpg"
import verrecolore from "../images/products/verrecolore.jpg"
import gardeCorpsVerre from "../images/products/gardeCorpsVerre.jpg"
import accordeonVerre from "../images/products/accordeonVerre.jpg"

const ServicesList = () => {
    const services = [
        {
            name: 'Verre Trempé',
            image: verretrempe,
            duration: '3 days'
        },
        {
            name: 'Paroi Douche',
            image: paroidouche,
            duration: '3 days'
        },
        {
            name: 'Verre Feuilleté',
            image: verrefeuillete,
            duration: '3 days'
        },
        {
            name: 'Miroirs',
            image: miroir,
            duration: '3 days'
        },
        {
            name: 'Verre Simple',
            image: verresimple,
            duration: '3 days'
        },
        {
            name: 'Double Vitrage',
            image: doublevitre,
            duration: '3 days'
        },
        {
            name: 'Crédence En Verre',
            image: verrecolore,
            duration: '3 days'
        },
        {
            name: 'Garde-Corps Verre',
            image: gardeCorpsVerre,
            duration: '3 days'
        },
        {
            name: 'Accordéon Verre',
            image: accordeonVerre,
            duration: '3 days'
        },
    ]
    return (
        <div className="mt-8 p-8">
            <h1 className="font-bold text-4xl text-center  text-purple mb-4">Products</h1>
            <div className="mt-8 grid lg:grid-cols-5 gap-4 w-full lg:container mx-auto">
                {
                    services.map(service => (
                        <div className="card mt-16 shadow-xl mx-auto">
                            <div className="card-img">
                                <img src={service.image} alt={service.name}/>
                            </div>
                            <div className="card-content">
                                <h2 className="big-title font-bold">{service.name}</h2>
                                {/*<h3 className="medium-title">{service.duration}</h3>*/}
                                <div className="px-3 py-2 cursor-pointer rounded-full bg-gray-100 text-purple font-bold hover:bg-blue-700 hover:text-white">Ajouter au devis</div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default ServicesList;