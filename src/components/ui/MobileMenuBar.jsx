import React from "react";
import { Link, NavLink } from 'react-router-dom';

// Mobile menu hamburger bar
export default function MobileMenuBar({navLinks}){
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
                className="text-slate-800 hover:text-primary-700 py-2 font-semibold text-base"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary-700 text-white px-4 py-2 rounded-md font-bold mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}