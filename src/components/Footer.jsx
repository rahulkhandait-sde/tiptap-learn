// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <p className="text-center">© {new Date().getFullYear()} TipTapLearn. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
                <a href="https://twitter.com" className="hover:text-blue-400">Twitter</a>
                <a href="https://github.com" className="hover:text-blue-400">GitHub</a>
            </div>
        </footer>
    );
};

export default Footer;
