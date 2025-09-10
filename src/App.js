import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/projects" element={<Gallery />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
