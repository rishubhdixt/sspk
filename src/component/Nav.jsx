import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl font-bold text-blue-700">Saraswati Shiksan Evam Prashiksan Kendra
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/Skill" className="hover:text-blue-600">Skill Development</Link>
            <Link to="/courses" className="hover:text-blue-600">Courses</Link>
            <Link to="/AboutUS" className="hover:text-blue-600">About Us</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-gray-700 focus:outline-none">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-3 text-gray-700 font-medium bg-white shadow-md">
          <Link to="/" onClick={closeMenu} className="block">Home</Link>
          <Link to="/Skill" onClick={closeMenu} className="block">Skill Development</Link>
          <Link to="/courses" onClick={closeMenu} className="block">Courses</Link>
          <Link to="/AboutUS" onClick={closeMenu} className="block">About Us</Link>
          <Link to="/contact" onClick={closeMenu} className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;

