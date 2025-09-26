import React from "react";
import { Link } from "react-router-dom";
import { Clock, CheckCircle, Shield } from "lucide-react";
import ServicesCarousel from "../components/ServicesCarousel";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/worker_images.jpeg')`, 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700/90 to-primary-600/70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Building Your <span className="text-accent-600">Vision Into Reality</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl">
            <br></br>
            <b></b>
Our innovation meets your vision. Let's create something remarkable, together.

          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-primary-600 hover:bg-primary-700 px-8 py-3 rounded-md font-semibold text-white transition"
            >
              Book Appointment
            </Link>
            <Link
              to="/projects"
              className="bg-accent-600 hover:bg-accent-600 px-8 py-3 rounded-md font-semibold text-white transition"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary-700">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Construction & Building",
                desc: "Complete construction services from foundation to finishing touches.",
                icon: ""
              },
              {
                title: "Renovation & Remodeling", 
                desc: "Transform your existing space with our expert renovation services.",
                icon: ""
              },
              {
                title: "Consultation & Planning",
                desc: "Professional guidance for your construction projects from start to finish.",
                icon: ""
              }
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-xl text-primary-700">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Services Carousel */}
      <ServicesCarousel />

      {/* Projects Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary-700">
            Our Recent Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: 1, title: "Modern Complex", img: "/images/modern.jpg" },
              { id: 2, title: "Office Building", img: "/images/offices.jpg" },
              { id: 3, title: "Residential Project", img: "/images/project1.jpg" },
              { id: 4, title: "Commercial Space", img: "/images/project2.jpg" },
              { id: 5, title: "Urban Development", img: "/images/urban_housing.jpg" },
              { id: 6, title: "Renovation Project", img: "/images/renovation.jpg" }
            ].map(project => (
              <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-primary-700/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">View Details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/projects"
            className="inline-block mt-8 text-accent-900 font-bold hover:underline"
          >
            View All Projects 
          </Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary-700">
            Why Choose Kambove Enterprises?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <CheckCircle className="mx-auto text-primary-700 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-primary-700">
                Quality Assurance
              </h3>
              <p className="text-slate-600 mt-2">
                We use only the finest materials and follow strict quality standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Clock className="mx-auto text-primary-700 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-primary-700">
                On-Time Delivery
              </h3>
              <p className="text-slate-600 mt-2">
                We respect your time and deliver projects within agreed timelines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Shield className="mx-auto text-primary-700 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-primary-700">
                Licensed & Insured
              </h3>
              <p className="text-slate-600 mt-2">
                Fully licensed and insured for your peace of mind and protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-cover bg-center" style={{backgroundImage: `url('/images/construction_1.jpg')`}}>
        <div className="absolute inset-0 bg-primary-800/80"></div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8">
            Get a free consultation and quote for your construction needs.
          </p>
          <Link
            to="/contact"
            className="bg-accent-600 hover:bg-accent-600 text-white px-8 py-4 rounded-md font-semibold transition"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
