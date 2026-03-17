import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, SUPPORT_LINK } from '../utils/constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-3xl font-bold transform group-hover:scale-110 transition-transform">🛡️</span>
            <div>
              <span className="text-xl font-bold">AVG</span>
              <span className="text-sm font-light ml-1 text-green-200">Antivirus</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-green-200 transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <button className="px-4 py-2 text-white hover:text-green-200 transition-colors font-medium">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <Button variant="primary" className="bg-orange text-green-700 hover:bg-gray-100">
                Support
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-green-600">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 hover:text-green-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 space-y-2">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="w-full px-4 py-2 text-left hover:text-green-200 transition-colors">
                  Login
                </button>
              </Link>
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full bg-white text-green-700 hover:bg-gray-100">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;