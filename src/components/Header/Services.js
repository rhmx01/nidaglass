import React from 'react';
import camel from "../../images/camel.png"
import buggy from "../../images/buggy.png"
import night from "../../images/night.png"
import jeep from "../../images/jeep.png"

const Services = () => {
    return (
        <div className="hidden lg:block absolute right-0 top-0 h-full  z-100 text-white" id="missions">
            <div className="h-full grid items-center">
                {/*<div className="small-title mb-4 flex-1">*/}
                {/*    Découvrez nos missions*/}
                {/*</div>*/}
                <div className="w-fit grid gap-2">
                    <div id="header-servcies" className="p-2 lg:p-6 flex shadow-lg flex-col items-center rounded-l-xl">
                        {/*<img src={jeep} alt="One Day Tour"/>*/}
                        <div className="font-medium text-lg text-white uppercase">
                            VERRE TREMPÉ
                        </div>
                    </div>
                    <div id="header-servcies" className="p-2 lg:p-6 flex shadow-lg flex-col items-center rounded-l-xl">
                        {/*<img src={jeep} alt="One Day Tour"/>*/}
                        <div className="font-medium text-lg text-white uppercase">
                            PAROI DOUCHE
                        </div>
                    </div>
                    <div id="header-servcies" className="p-2 lg:p-6 flex shadow-lg flex-col items-center rounded-l-xl">
                        {/*<img src={jeep} alt="One Day Tour"/>*/}
                        <div className="font-medium text-lg text-white uppercase">
                            VERRE FEUILLETÉ
                        </div>
                    </div>
                    <div id="header-servcies" className="p-2 lg:p-6 flex shadow-lg flex-col items-center rounded-l-xl">
                        {/*<img src={jeep} alt="One Day Tour"/>*/}
                        <div className="font-medium text-lg text-white uppercase">
                            MIROIRS
                        </div>
                    </div>
                    <div id="header-servcies" className="p-2 lg:p-6 flex shadow-lg flex-col items-center rounded-l-xl">
                        {/*<img src={jeep} alt="One Day Tour"/>*/}
                        <div className="font-medium text-lg text-white uppercase">
                            VERRE SIMPLE
                        </div>
                    </div>
                    <div id="header-servcies" className="p-2 lg:p-6 flex shadow-lg flex-col items-center rounded-l-xl">
                        {/*<img src={jeep} alt="One Day Tour"/>*/}
                        <div className="font-medium text-lg text-white uppercase">
                            DOUBLE VITRAGE
                        </div>
                    </div>
                    <div id="header-servcies" className="p-2 lg:p-6 flex shadow-lg flex-col items-center rounded-l-xl">
                        {/*<img src={jeep} alt="One Day Tour"/>*/}
                        <div className="font-medium text-lg text-white uppercase">
                            CRÉDENCE EN VERRE
                        </div>
                    </div>
                    <div id="header-servcies" className="p-2 lg:p-6 flex shadow-lg flex-col items-center rounded-l-xl">
                        {/*<img src={jeep} alt="One Day Tour"/>*/}
                        <div className="font-medium text-lg text-white uppercase">
                            GARDE-CORPS VERRE
                        </div>
                    </div>
                    <div id="header-servcies" className="p-2 lg:p-6 flex shadow-lg flex-col items-center rounded-l-xl">
                        {/*<img src={jeep} alt="One Day Tour"/>*/}
                        <div className="font-medium text-lg text-white uppercase">
                            accordéon verre
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;