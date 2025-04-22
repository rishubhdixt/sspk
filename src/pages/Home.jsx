import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
            
            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                Empowering Youth Through <span className="text-blue-600">Skill Development</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Saraswati SEP Kendra provides hands-on training and education for a better tomorrow. Join us in building brighter futures.
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
  
        {/* Additional Content */}
        <section className="bg-blue-50 py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Join India's Skill Development Revolution
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              As part of our active collaboration with the Government of Uttar Pradesh, we are dedicated to providing the latest vocational and skill-based courses that empower individuals to thrive in today’s competitive world.
            </p>
            <div className="flex justify-center gap-8">
              <Link 
                to="/skill" 
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Skill Development
              </Link>
              <Link 
                to="/courses" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
              >
                Explore Our Courses
              </Link>
            </div>
          </div>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="py-16 px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Choose Saraswati SEP Kendra?</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
            Our courses are designed to provide you with the skills necessary to succeed in today's ever-changing world. We offer both short-term and long-term training programs to help you reach your career goals. 
          </p>
          <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
            Whether you are looking to improve your technical abilities or enhance your soft skills, we have something for everyone. Our professional trainers provide real-world knowledge and guidance, making sure you’re job-ready.
          </p>
          <div className="flex justify-center gap-8">
            <Link 
              to="/aboutus" 
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Know More About Us
            </Link>
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Get In Touch
            </Link>
          </div>
        </section>
  
       
      </div>
    );
  }
  
  export default Home;