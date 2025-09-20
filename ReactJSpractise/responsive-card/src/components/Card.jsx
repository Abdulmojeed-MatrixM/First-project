import React from "react";

const Card = ({ title, description, buttonText, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-4 bg-white hover:shadow-2xl transition-shadow duration-300">
      {/* Card Image */}
      <img className="w-full h-80 object-cover" src={imageUrl} alt={title} />

      {/* Card Content */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-600 text-base">{description}</p>
      </div>

      {/* Action Button */}
      <div className="px-6 pt-4 pb-4">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg w-full">
          {buttonText}
        </button>
      </div>
    </div>

  );
};

export default Card;
