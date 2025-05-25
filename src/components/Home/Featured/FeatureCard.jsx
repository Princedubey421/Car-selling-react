import React from 'react';

const FeatureCard = ({ img, name, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={img}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-primary font-bold mt-2">${price}</p>
        <button className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;