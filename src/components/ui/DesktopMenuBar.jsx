import { div } from "framer-motion/m";
import React from "react";
import { Link, NavLink } from 'react-router-dom';

export default function DesktopMenuBar({navLinks}){
    return(
        <div>
            {/* Desktop Menu  bar*/}
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
            
        </div>
    )
}