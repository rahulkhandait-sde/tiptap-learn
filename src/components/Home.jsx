// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white text-center py-20 w-screen">
        <h1 className="text-5xl font-bold mb-4">Welcome to TipTapLearn</h1>
        <p className="text-xl mb-6">A Decentralized Peer-to-Peer Learning Platform</p>
        <Link to="/signup" className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200">
          Get Started
        </Link>
      </header>

      {/* Features Section */}
      <section className="py-12 px-6 bg-white text-gray-800 w-screen">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-screen-xl mx-auto">
          <FeatureCard title="Decentralized Learning" description="Engage in secure, peer-to-peer learning without central control." icon="🎓" />
          <FeatureCard title="Skill-based Courses" description="Access tailored courses designed to boost real-world skills." icon="📘" />
          <FeatureCard title="Secure Wallet Integration" description="Connect with multiple wallets and authenticate securely." icon="🔒" />
          <FeatureCard title="In-app Chat" description="Seamless, real-time chat to engage with other learners." icon="💬" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white text-center py-12 w-screen">
        <h2 className="text-3xl font-bold mb-4">Ready to Learn?</h2>
        <p className="text-lg mb-6">Join TipTapLearn today and start your journey!</p>
        <Link to="/signup" className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200">
          Join Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 w-screen">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-lg font-semibold text-white">
            TipTapLearn &copy; 2024
          </div>
          <nav className="flex space-x-6">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

// FeatureCard Component
const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-64 text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
