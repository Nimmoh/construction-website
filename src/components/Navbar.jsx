import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
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

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary-700 font-semibold'
                  : 'text-slate-700 hover:text-primary-700 transition'
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="ml-2 bg-primary-700 hover:bg-primary-800 text-white px-4 py-2 rounded-md font-medium shadow-md transition"
          >
            Get a Quote
          </Link>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-slate-700 hover:text-primary-700"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg">
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-slate-700 hover:text-primary-700 py-2"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary-700 text-white px-4 py-2 rounded-md font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
