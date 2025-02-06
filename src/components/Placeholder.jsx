import React from 'react';

export const Placeholder = ({image= ''}) => (
    <img 
        className="w-100 rounded-3 game-video-placeholder"
        src={image}
        alt="Video Placeholder"
    />
);
