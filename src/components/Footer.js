import React from 'react';
import {AlternateEmail, Facebook, FmdGood, Instagram, LinkedIn, PhoneIphone} from "@mui/icons-material";

const Footer = () => {
    return (
        <div className="px-4 py-10 bg-purple grid lg:grid-cols-3 gap-4 text-white mx-auto">
            <div className="lg:mx-auto">
                <h1 className="py-4 font-bold text-2xl text-left">Nous contacter</h1>
                <ul>
                    <li> <FmdGood/> Casablanca </li>
                    <li> <AlternateEmail/> contact@nidaglass.ma </li>
                    <li> <PhoneIphone/> +212 661 78 60 66 </li>
                </ul>
            </div>
            <div className="lg:mx-auto">
                <h1 className="py-4 font-bold text-2xl text-left">Lien</h1>
                <ul>
                    <li>Accueil</li>
                    <li>Produits</li>
                    <li>À propos de nous</li>
                </ul>
            </div>
            <div className="lg:mx-auto">
                <h1 className="py-4 font-bold text-2xl text-left">Réseau</h1>
                <ul>
                    <li><Facebook/> Nidaglass</li>
                    <li><Instagram/> Nidaglass</li>
                    <li><LinkedIn/> Nidaglass</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;