import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-accent-600 uppercase mb-2">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Let's Build Something <span className="text-primary-700">Amazing Together</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to start your next construction project? Contact us today for a
            free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Send us a Message
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-6 rounded-lg shadow-lg border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="text-primary-700 w-6 h-6 mt-1" />
                    <div className="ml-3">
                      <p className="font-semibold text-slate-800">Phone</p>
                      <p className="text-slate-600">+254714312234/ +254739044457</p>
                      <p className="text-slate-500 text-sm">
                        Available 8:00 AM - 6:00 PM
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
                  <div className="flex items-start">
                    <MapPin className="text-primary-700 w-6 h-6 mt-1" />
                    <div className="ml-3">
                      <p className="font-semibold text-slate-800">Address</p>
                      <p className="text-slate-600">
                        Eldoret, Kenya<br />
                        East Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-lg border border-slate-100">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-slate-800" />
                  <h3 className="text-lg font-bold text-slate-800 ml-2">
                    Business Hours
                  </h3>
                </div>
                <div className="text-slate-600 space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
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
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Visit Our Location
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10">
            We're conveniently located in Eldoret, Kenya. Stop by our office
            to discuss your project in person.
          </p>
          {/* <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Eldoret</h3>
            <p className="text-slate-600">Eldoret</p>
            <p className="text-slate-600">Kenya</p>
            <button className="bg-accent-500 text-white font-semibold text-sm px-4 py-1 rounded-full mt-4">
              Get Directions
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Contact;
