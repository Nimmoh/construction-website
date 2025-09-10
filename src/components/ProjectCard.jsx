import { div } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar } from "lucide-react";


export default function ProjectCard({project}){
    return(
        <div>
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
    )
}