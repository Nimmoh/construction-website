import React from "react";
import { Link } from "react-router-dom";
import { Clock, CheckCircle, Shield } from "lucide-react"; 

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/barriers.jpg')`, 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Building Your <span className="text-orange-500">Vision Into Reality</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl">
            <br></br>
            <b></b>
Our innovation meets your vision. Let's create something remarkable, together.

          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-md font-semibold text-white transition"
            >
              Book Appointment
            </Link>
            <Link
              to="/projects"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md font-semibold text-white transition"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-green-700">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential",
                desc: "Custom homes, apartments, and luxury villas built with precision.",
                img: "/images/urban_housing.jpg", 
              },
              {
                title: "Commercial",
                desc: "Office spaces, retail outlets, and industrial buildings that stand out.",
                img: "/images/project3.jpg", 
              },
              {
                title: "Renovations",
                desc: "Transformations that give your property a fresh, modern look.",
                img: "/images/construction_2.jpg", 
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-green-700">{s.title}</h3>
                  <p className="mt-2 text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-green-700">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "/images/tiles.jpg", 
              "/images/tiles3.jpg", 
              "/images/tiles4.jpg", 
              
            ].map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-lg shadow group"
              >
                <img
                  src={src}
                  alt={`Project ${i + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                  <span className="font-semibold">View Project</span>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/projects"
            className="inline-block mt-6 text-orange-600 font-semibold hover:underline"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-green-700">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <CheckCircle className="mx-auto text-green-700 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-green-700">
                Unmatched Attention to Detail
              </h3>
              <p className="text-gray-600 mt-2">
                As a growing company, your project is our top priority. We provide a level of care and precision that bigger firms can't match.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Clock className="mx-auto text-green-700 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-green-700">
                On-Time & On-Budget
              </h3>
              <p className="text-gray-600 mt-2">
                We're committed to transparent timelines and clear communication, ensuring your project is completed efficiently without hidden costs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Shield className="mx-auto text-green-700 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-green-700">
                Quality & Innovation
              </h3>
              <p className="text-gray-600 mt-2">
                We use the latest techniques and materials to ensure your build is not only beautiful and durable but also sustainable and future-proof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/build_1.jpg')`, 
        }}
      >
        <div className="absolute inset-0 bg-green-800/80"></div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Dream Project?
          </h2>
          <p className="mb-6 text-lg">
            Let’s discuss your vision and turn it into reality.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold transition"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;