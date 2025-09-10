import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const Booking = ()=> {
  const [form, setForm] = useState({ name:'', email:'', phone:'', date:'', time:'', service:'' });
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e)=> setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e)=> {
    e.preventDefault();
    // Replace with your EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const USER_ID = 'YOUR_USER_ID';
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, USER_ID);
      setSent(true);
      setTimeout(()=> navigate('/'), 2000);
    } catch (err) {
      alert('Error sending booking. Check console for details.');
      console.error(err);
    }
  };

  return (
    <section className="py-20 max-w-3xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Book an Appointment</h2>
        <p className="text-slate-600">Schedule a consultation with our team to discuss your project needs.</p>
      </div>
      <form className="bg-white p-8 rounded-xl shadow-lg border border-slate-200" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
            <input 
              required 
              name="name" 
              placeholder="Enter your full name" 
              value={form.name} 
              onChange={handleChange} 
              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
            <input 
              required 
              name="email" 
              type="email" 
              placeholder="Enter your email" 
              value={form.email} 
              onChange={handleChange} 
              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
            <input 
              required 
              name="phone" 
              placeholder="Enter your phone number" 
              value={form.phone} 
              onChange={handleChange} 
              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date *</label>
            <input 
              required 
              name="date" 
              type="date" 
              value={form.date} 
              onChange={handleChange} 
              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time *</label>
            <input 
              required 
              name="time" 
              type="time" 
              value={form.time} 
              onChange={handleChange} 
              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Service Type *</label>
            <select 
              required 
              name="service" 
              value={form.service} 
              onChange={handleChange} 
              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select service</option>
              <option value="residential">Residential Construction</option>
              <option value="commercial">Commercial Project</option>
              <option value="renovation">Renovation</option>
              <option value="consultation">Consultation</option>
            </select>
          </div>
        </div>
        <button className="mt-6 w-full bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-md font-semibold transition">
          Submit Booking
        </button>
        {sent && <p className="mt-4 text-green-600 text-center">Booking submitted  redirecting home...</p>}
      </form>
    </section>
  );
};

export default Booking;
