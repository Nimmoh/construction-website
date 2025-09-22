import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-slate-200 ">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-lg font-bold text-white">Kambove Enterprises</h2>
          <p className="text-sm mt-2">Eldoret, Kenya</p>
          <p className="text-sm mt-1">Building your vision with quality and trust.</p>
        </div>

        <div>
          <h3 className="text-md font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent-400">Home</Link></li>
            <li><Link to="/products" className="hover:text-accent-400">Products</Link></li>
            <li><Link to="/services" className="hover:text-accent-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold text-white mb-3">Connect With Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-400 transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-400 transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-400 transition"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-600 text-center py-4 text-sm text-slate-400">
          &copy; {new Date().getFullYear()} kambove Enterprises, Inc. All rights reserved. 
      </div>
    </footer>
  );
};

export default Footer;
