import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar } from "lucide-react";
import projects from "../projects";
import ProjectCard from "../components/ProjectCard"
 
const Projects = () => {
  const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12", label: "New Clients This Year" },
  { value: "98%", label: "Client Satisfaction" },
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
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <ProjectCard project={project} />
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
