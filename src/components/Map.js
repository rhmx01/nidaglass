import React from 'react';

const Map = () => {
    return (
        <div id="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848.9363568028915!2d-7.685936739517454!3d33.528513985811216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMzPCsDMxJzQyLjgiTiA3wrA0MScwNy4zIlc!5e0!3m2!1sen!2sma!4v1661858764966!5m2!1sen!2sma"
                width="100%" height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
};

export default Map;