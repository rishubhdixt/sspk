import React from 'react';

function Card({ icon, title, description, price, gradient }) {
    return (
      <div className="max-w-sm w-full bg-white shadow-md rounded-2xl overflow-hidden p-6 hover:shadow-lg transition duration-300 space-y-4">
        {/* Icon Container */}
        <div className={`w-14 h-14 rounded-full flex items-center justify-center ${gradient}`}>
          {React.cloneElement(icon, { className: "w-10 h-10 text-white" })}
        </div>
  
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <h4 className="text-blue-600 font-bold text-sm">₹{price}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  }
  

export default Card;

