import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar } from "lucide-react";

const Projects = () => {
  const stats = [
    { value: "150+", label: "Projects" },
    { value: "20+", label: "Years" },
    // { value: "€15M+", label: "Value" },
    { value: "98%", label: "Success" },
  ];

  const projects = [
    {
      title: "Modern Residential Complex - Phase 1",
      // category: "Residential",
      // price: "€450,000",
      // location: "Lyon, France",
      // date: "December 2023",
      desc: "Complete supply of aluminum windows and doors for a luxury residential project.",
      // Replaced with a public folder path
      img: "/images/project4.jpg",
    },
    {
      title: "Corporate Headquarters Building",
      // category: "Commercial",
      // price: "€750,000",
      location: "Paris, France",
      date: "September 2023",
      desc: "Supply of materials for a 12-story office building with modern glass facades.",
      img: "/images/project5.jpg",
    },
    {
      title: "Luxury Villa Driveway & Landscaping",
      // category: "Residential",
      // price: "€85,000",
      location: "Cannes, France",
      date: "July 2023",
      desc: "Premium paving blocks installation for driveway, pathways, and garden landscaping.",
      img: "/images/project6.jpg",
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