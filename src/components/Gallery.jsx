import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar } from "lucide-react";

const Projects = () => {
  const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12", label: "New Clients This Year" },
  { value: "98%", label: "Client Satisfaction" },
];

 const projects = [
  {
    title: "Modern Residential Complex",
    desc: "Supply and installation of high-performance aluminum window and door systems to meet the modern design and energy efficiency requirements of the project.",
    img: "/images/modern.jpg",
  },
  {
    title: "Office Building Exterior Cladding",
    desc: "Comprehensive material supply for the exterior of a commercial building, including glass facades and durable aluminum framing.",
    img: "/images/offices.jpg",
  },
  {
    title: "Residential Landscaping & Paving",
    desc: "Provided premium paving blocks for the full landscape design of a residential property, focusing on long-term durability and aesthetic appeal.",
    img: "/images/paving.jpg",
  },
    {
    title: "Eco-Friendly Office Park",
    desc: "Supplied over 15,000 brick tiles for a large-scale office park, contributing to its sustainable and modern design with a classic aesthetic.",
    img: "/images/office_park.jpg",
  },
  {
    title: "Urban Housing Development",
    desc: "Provided all concrete blocks for a multi-building urban housing project, ensuring structural integrity and a streamlined construction timeline.",
    img: "/images/urban_housing.jpg",
  },
  {
    title: "Retail Center Renovation",
    desc: "Custom-built and installed aluminum doors and windows for the full renovation of a retail center, enhancing natural light and security.",
    img: "/images/renovation.jpg",
  },
];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Our <span className="text-primary-700">Project Gallery</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore our portfolio of successful construction projects and see the
            quality and craftsmanship that defines Kambove Enterprises.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center bg-primary-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary-700 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-primary-700/20 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm">View Details</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-slate-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Eldoret, Kenya</span>
                  </div>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-600 mb-6">
            Let us help you bring your construction vision to life.
          </p>
          <Link
            to="/contact"
            className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-md font-semibold transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
