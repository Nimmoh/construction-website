import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur border-b border-gray-200 z-50 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.jpeg" alt="kambove Enterprises Logo" className="h-15 w-20" />
          <div className="font-semibold text-green-700 text-lg">
            Kambove <span className="text-rose-600">Enterprises</span>
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
                  ? 'text-green-700 font-semibold'
                  : 'text-gray-700 hover:text-green-700 transition'
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="ml-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md font-medium shadow-md transition"
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
  // { to: '/gallery', label: 'Projects' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact Us' },
];

const MobileMenu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 bg-green-100 text-green-700 rounded-md border border-green-300"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-4 mt-2 w-48 bg-white rounded-md shadow-lg p-4 border border-gray-200">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-700 hover:text-green-700 transition"
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center bg-green-700 text-white py-2 rounded hover:bg-green-800"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;