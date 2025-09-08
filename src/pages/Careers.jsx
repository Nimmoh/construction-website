import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Users, DollarSign, Award, Clock, Shield } from "lucide-react";

const Careers = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-50 py-16">
        <div
          className="relative mb-12 py-20 bg-cover bg-center text-center"
          style={{
            backgroundImage: `url('/images/career1.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-primary-700/80"></div>
          <div className="relative z-10 text-white max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-accent-400 uppercase mb-2">Join Our Team</p>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Build Your Career with{" "}
              <span className="text-accent-400">Kambove Enterprises</span>
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
              Join a dynamic team of construction professionals and be part of
              building Kenya's future, one project at a time.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary-700 text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-primary-800 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                to="/about"
                className="bg-white text-slate-800 font-semibold py-3 px-8 rounded-md border border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We offer more than just a job. We provide opportunities for growth,
              learning, and making a real impact in the construction industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Career Growth */}
            <div className="group bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl border border-primary-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-700 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Career Growth</h3>
              <p className="text-slate-600 leading-relaxed">
                Clear advancement paths and professional development opportunities with mentorship programs and skill-building workshops.
              </p>
            </div>

            {/* Team Environment */}
            <div className="group bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-2xl border border-accent-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-accent-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Team Environment</h3>
              <p className="text-slate-600 leading-relaxed">
                Collaborative and supportive work culture that values every team member with regular team-building activities.
              </p>
            </div>

            {/* Competitive Benefits */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Competitive Benefits</h3>
              <p className="text-slate-600 leading-relaxed">
                Attractive salary packages, health insurance, retirement plans, and comprehensive benefits for all employees.
              </p>
            </div>

            {/* Work-Life Balance */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Work-Life Balance</h3>
              <p className="text-slate-600 leading-relaxed">
                Flexible working hours, paid time off, and family-friendly policies that support your personal well-being.
              </p>
            </div>

            {/* Recognition & Awards */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Recognition & Awards</h3>
              <p className="text-slate-600 leading-relaxed">
                Employee recognition programs, performance bonuses, and opportunities to be part of award-winning projects.
              </p>
            </div>

            {/* Safety & Security */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Safety & Security</h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive safety training, protective equipment, and a secure work environment with job stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-700 mb-4 text-center">
            Current Openings
          </h2>
          <p className="text-slate-600 text-center mb-10">
            Explore our current job openings and find the perfect role for you.
          </p>
          <div className="space-y-6">
            {[
              {
                title: "Construction Manager",
                location: "Eldoret, Kenya",
                type: "Full-time",
                experience: "5+ years",
                description: "Lead construction projects from planning to completion, ensuring quality and timely delivery."
              },
              {
                title: "Site Engineer",
                location: "Eldoret, Kenya", 
                type: "Full-time",
                experience: "3+ years",
                description: "Oversee technical aspects of construction projects and ensure compliance with standards."
              },
              {
                title: "Project Coordinator",
                location: "Eldoret, Kenya",
                type: "Full-time", 
                experience: "2+ years",
                description: "Coordinate project activities, manage schedules, and liaise with clients and suppliers."
              },
              {
                title: "Safety Officer",
                location: "Eldoret, Kenya",
                type: "Full-time",
                experience: "2+ years", 
                description: "Ensure workplace safety compliance and implement safety protocols on construction sites."
              }
            ].map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-3">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-slate-600">{job.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Link
                      to="/contact"
                      className="bg-primary-700 hover:bg-primary-800 text-white px-6 py-2 rounded-md font-medium transition"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
            How to Apply
          </h2>
          <p className="text-slate-600 text-center mb-10">
            Follow these simple steps to join our team.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Browse Openings", desc: "Review our current job openings and find the right fit." },
              { step: "2", title: "Submit Application", desc: "Send us your CV and cover letter through our contact form." },
              { step: "3", title: "Interview Process", desc: "Participate in our interview process to showcase your skills." },
              { step: "4", title: "Join Our Team", desc: "Welcome aboard! Start your journey with Kambove Enterprises." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
