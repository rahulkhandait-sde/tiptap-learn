// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white p-4 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className="navbar-logo flex items-center">
        <img src={logo} alt="TipTapLearn Logo" className="h-12 w-12 mr-2" /> {/* Adjusted size */}
        <h2 className="text-xl font-bold">TipTapLearn</h2>
      </Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/lessons" className="hover:text-gray-300">Lessons</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          <li><Link to="/signup" className="hover:text-gray-300">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
