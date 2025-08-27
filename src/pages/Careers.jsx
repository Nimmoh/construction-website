import React from 'react';

const Careers = () => {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Main Heading and Description (from previous image) */}
          <div 
  className="relative mb-12 py-20 bg-cover bg-center text-center" // Added bg-cover, bg-center, relative, text-center, py-20
  style={{
    backgroundImage: `url('/images/career1.jpg')`, 
  }}
>
  {/* Overlay for better text readability */}
  <div className="absolute inset-0 bg-black/60"></div> 

  {/* Content, ensure it's relative to overlay */}
  <div className="relative z-10"> 
    <p className="text-sm font-semibold text-red-500 uppercase mb-2">Join Our Team</p>
    <h1 className="text-5xl font-extrabold text-white mb-4"> {/* Changed text-gray-800 to text-white */}
      Build Your Career with{' '}
      <span className="text-green-400">Kambove Enterprises</span> {/* Adjusted green shade for contrast */}
    </h1>
    <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed"> {/* Changed text-gray-600 to text-white */}
      Join a growing company that's building the future of construction materials.
      We offer competitive benefits, career growth, and the chance to make a real
      impact.
    </p>
  </div>
</div>

          {/* Call-to-action buttons (from previous image) */}
          <div className="flex justify-center space-x-4 mb-20">
            <a
              href="/open-positions"
              className="bg-green-700 text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-green-800 transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="/our-culture"
              className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Learn About Our Culture
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Join Kambove Enterprises?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We believe in investing in our people and creating an environment where everyone can thrive and grow.
          </p>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {/* Career Growth Card */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
              {/* Placeholder SVG for Career Growth - you'll need to add your own SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Career Growth</h3>
              <p className="text-sm text-gray-600">Clear advancement paths and professional development opportunities.</p>
            </div>
            {/* Health & Wellness Card */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
              {/* Placeholder SVG for Health & Wellness - you'll need to add your own SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Health & Wellness</h3>
              <p className="text-sm text-gray-600">Comprehensive health insurance and wellness programs.</p>
            </div>
            {/* Great Team Card */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
              {/* Placeholder SVG for Great Team - you'll need to add your own SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h-8a4 4 0 01-4-4v-1a4 4 0 014-4h8a4 4 0 014 4v1a4 4 0 01-4 4zM7 10a4 4 0 11-8 0 4 4 0 018 0zm-2 2a4 4 0 11-8 0 4 4 0 018 0zm10-2a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Great Team</h3>
              <p className="text-sm text-gray-600">Work with passionate people in a collaborative environment.</p>
            </div>
            {/* Recognition Card */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
              {/* Placeholder SVG for Recognition - you'll need to add your own SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.085 8.784l-3.36 4.416A1 1 0 007.41 14a1 1 0 00.91-.56l1.24-2.148 2.055 2.877a1 1 0 00.865.531h.001a1 1 0 00.865-.531l2.055-2.877 1.24 2.148a1 1 0 00.91.56 1 1 0 00.91-.56l-3.36-4.416a1 1 0 00-1.636 0z" />
              </svg>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Recognition</h3>
              <p className="text-sm text-gray-600">Performance bonuses and employee recognition programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Current Openings
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            Explore our current job opportunities and find the perfect role for your skills and career goals.
          </p>

          <div className="space-y-6">
            {/* Job Listing Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Sales Representative</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <span className="bg-red-500 text-white px-2 py-0.5 rounded-full">Full-time</span>
                    <span className="bg-green-700 text-white px-2 py-0.5 rounded-full">On-site</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-sm block">Experience</span>
                  <span className="font-semibold text-gray-800">2-4 years</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Join our sales team to help construction professionals find the right materials for their projects.
              </p>
              <p className="font-semibold text-gray-800 mb-2">Key Requirements:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Proven experience in sales</li>
                <li>Strong communication skills</li>
                <li>Customer-focused approach</li>
              </ul>
              <div className="flex space-x-4">
                <a href="/contact" className="bg-green-700 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-800 transition">Apply Now</a>
                <a href="/learn-more" className="text-green-700 font-semibold py-2 px-6 rounded-md hover:underline transition">Learn More</a>
              </div>
            </div>

            {/* Job Listing Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Warehouse Manager</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <span className="bg-red-500 text-white px-2 py-0.5 rounded-full">Full-time</span>
                    <span className="bg-green-700 text-white px-2 py-0.5 rounded-full">On-site</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-sm block">Experience</span>
                  <span className="font-semibold text-gray-800">5+ years</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Oversee warehouse operations, inventory management, and team coordination.
              </p>
              <p className="font-semibold text-gray-800 mb-2">Key Requirements:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Warehouse management experience</li>
                <li>Leadership skills</li>
                <li>Logistics knowledge</li>
              </ul>
              <div className="flex space-x-4">
                <a href="/contact" className="bg-green-700 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-800 transition">Apply Now</a>
                <a href="/learn-more" className="text-green-700 font-semibold py-2 px-6 rounded-md hover:underline transition">Learn More</a>
              </div>
            </div>

            {/* Job Listing Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Technician Product Specialist</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <span className="bg-red-500 text-white px-2 py-0.5 rounded-full">Full-time</span>
                    <span className="bg-green-700 text-white px-2 py-0.5 rounded-full">On-site</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-sm block">Experience</span>
                  <span className="font-semibold text-gray-800">3-5 years</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Provide technical expertise and support to customers on construction materials.
              </p>
              <p className="font-semibold text-gray-800 mb-2">Key Requirements:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Engineering background</li>
                <li>Problem-solving capabilities</li>
                <li>Strong technical knowledge</li>
              </ul>
              <div className="flex space-x-4">
                <a href="/contact" className="bg-green-700 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-800 transition">Apply Now</a>
                <a href="/learn-more" className="text-green-700 font-semibold py-2 px-6 rounded-md hover:underline transition">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;