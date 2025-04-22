import React from 'react';
import { Link } from 'react-router-dom';

function Section() {
  return (
    <section className="bg-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Empowering Youth Through <span className="text-blue-600">Skill Development</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Saraswati SEPK provides hands-on training and education for a better tomorrow. Join us in building brighter futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              to="/courses" 
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Explore Courses
            </Link>
            <Link 
              to="/contact" 
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc" 
            alt="Empowerment" 
            className="w-full rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Section;
