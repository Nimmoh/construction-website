import React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div 
        className="relative py-28 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url('/images/contact2.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-orange-400 uppercase mb-2">
            Quick Reach
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Contact Our Team
          </h1>
          <p className="text-lg leading-relaxed">
            Ready to start your next project? Get in touch with our experts for
            personalized advice, quotes, and support.
          </p>
        </div>
      </div>
      
      {/* Main Content Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Main Contact Section (Form and Info Cards) */}
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* Send a Message Form Card */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Send us a Message
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Fill out the form below and we’ll get back to you within 24 hours.
              </p>
              <form className="grid grid-cols-2 gap-x-4 gap-y-5">
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    placeholder="info@kamboveenteprises.com"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+254 700 000 000"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject*
                  </label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                    required
                  >
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Project Consultation</option>
                    <option>Request a Quote</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    placeholder="Tell us about your project and how we can help..."
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                    required
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column (Info Cards) */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="text-green-700 w-6 h-6 mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">+254714312234/ +254739044457</p>
                      <p className="text-gray-500 text-sm">
                        Mon - Sat: 09:00 - 18:00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-green-700 w-6 h-6 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@kamboveenteprises.com</p>
                      <p className="text-gray-500 text-sm">Online support 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-green-700 w-6 h-6 mt-1" />
                    <div>
                      <p className="font-semibold">Head Office</p>
                      <p className="text-gray-600">
                        Eldoret, Kenya
                        <br />

                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-gray-800" />
                  <h3 className="text-lg font-bold text-gray-800">
                    Business Hours
                  </h3>
                </div>
                <div className="text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* Visit Our Locations Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Visit Our Locations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Kambove Enterprises currently operates a branch in Eldoret, with plans to expand to more locations in the future. Visit us today and experience our high-quality service and wide range of modern design products
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {/* <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Eldoret</h3>
                <p className="text-gray-600">Eldoret</p>
                <p className="text-gray-600">Kenya</p>
                <button className="bg-orange-500 text-white font-semibold text-sm px-4 py-1 rounded-full mt-4">
                  Head Office
                </button>
              </div> */}

             

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;