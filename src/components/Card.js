import React from 'react';

const Card = ({ title, count, bgColor = 'bg-white', textColor = 'text-black' }) => {
    return (
        <div className={`shadow-md rounded-md p-4 w-full md:w-1/4 ${bgColor}`}>
            <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>{title}</h3>
            <p className={`text-2xl font-bold ${textColor}`}>{count}</p>
        </div>
    );
};

export default Card;
