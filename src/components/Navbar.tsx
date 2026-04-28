import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/shopiq-lettermark-1200.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="ShopIQ logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-gray-900">ShopIQ</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-gray-600 hover:text-primary-600 transition">Features</Link>
            <Link to="/#pricing" className="text-gray-600 hover:text-primary-600 transition">Pricing</Link>
            <Link to="/docs" className="text-gray-600 hover:text-primary-600 transition">Docs</Link>
            <Link to="/support" className="text-gray-600 hover:text-primary-600 transition">Support</Link>
            <a
              href="https://shopiq-iota.vercel.app"
              className="btn-primary"
            >
              Install App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/#features" className="block py-2 text-gray-600 hover:text-primary-600">Features</Link>
            <Link to="/#pricing" className="block py-2 text-gray-600 hover:text-primary-600">Pricing</Link>
            <Link to="/docs" className="block py-2 text-gray-600 hover:text-primary-600">Docs</Link>
            <Link to="/support" className="block py-2 text-gray-600 hover:text-primary-600">Support</Link>
            <a href="https://shopiq-iota.vercel.app" className="block btn-primary text-center mt-4">
              Install App
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
