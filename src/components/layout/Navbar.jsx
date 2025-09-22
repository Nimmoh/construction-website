import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MobileMenuBar from '../ui/MobileMenuBar';
import DesktopMenuBar from '../ui/DesktopMenuBar';

//Nav links
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];



export default function Navbar  ()  {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur border-b border-slate-200 z-50 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.jpeg" alt="kambove Enterprises Logo" className="h-15 w-20" />
          <div className="font-semibold text-primary-700 text-lg">
            Kambove <span className="text-accent-600">Enterprises</span>
          </div>
        </Link>
          <DesktopMenuBar navLinks={navLinks} />
        
        <div className="md:hidden">
          <MobileMenuBar navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};

