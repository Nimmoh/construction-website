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
          <h1 className="text-4xl font-extrabold text-gray-900">
            Our <span className="text-green-700">Projects</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the successful projects we've completed over the years. From
            residential complexes to industrial facilities, our materials have built
            lasting structures across Europe.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-bold text-green-700">
                {s.value}
              </p>
              <p className="text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12 flex flex-col md:flex-row gap-4 md:items-center justify-between shadow-sm">
          <div className="flex-1 flex items-center bg-white rounded-md shadow px-4 py-2">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full outline-none text-gray-700"
            />
          </div>
          <select className="px-4 py-2 rounded-md border border-gray-300 text-gray-600">
            <option>All Projects</option>
            <option>Residential</option>
            <option>Commercial</option>
          </select>
          {/* <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
            View Timeline
          </button> */}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border shadow hover:shadow-md transition overflow-hidden"
            >
              <div className="relative">
                <img src={p.img} alt={p.title} className="h-56 w-full object-cover" />
                <span className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {p.category}
                </span>
                <span className="absolute bottom-3 left-3 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded">
                  {/* {p.price} */}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  {/* <MapPin className="w-4 h-4 mr-1" /> {p.location} */}
                </div>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  {/* <Calendar className="w-4 h-4 mr-1" /> {p.date} */}
                </div>
                <p className="text-gray-600 mt-3 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;