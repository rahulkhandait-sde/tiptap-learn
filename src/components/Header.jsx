// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl">TipTapLearn</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:text-blue-300">Home</a></li>
                    <li><a href="/lessons" className="hover:text-blue-300">Lessons</a></li>
                    <li><a href="/about" className="hover:text-blue-300">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
