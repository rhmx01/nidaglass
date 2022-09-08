import React from 'react';

const Map = () => {
    return (
        <div id="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.4065043501648!2d-7.685515572375949!3d33.528496901447824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d390fa9a3e13%3A0xf8f02094baa4671b!2sNida%20Glass!5e0!3m2!1sen!2sma!4v1662630401389!5m2!1sen!2sma"
                width="100%" height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
};

export default Map;