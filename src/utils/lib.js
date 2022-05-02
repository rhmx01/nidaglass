import React from 'react';

export const isMobileMode = () => {
        const { innerWidth: width } = window;
        return width < 700;
};