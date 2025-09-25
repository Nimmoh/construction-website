import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = ()=> {
  const [form, setForm] = useState({ name:'', email:'', phone:'', date:'', time:'', service:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e)=> setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e)=> {
    e.preventDefault();
    setLoading(true);
    
    try {
      const apiEndpoint = process.env.REACT_APP_API_BASE_URL
        ? `${process.env.REACT_APP_API_BASE_URL}/api/contact`
        : '/api/contact';

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Booking Request - ${form.service}`,
          message: `Booking Details:
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Preferred Date: ${form.date}
Preferred Time: ${form.time}
Service Type: ${form.service}`
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setTimeout(()=> navigate('/'), 2000);
      } else {
        alert('Error sending booking. Please try again.');
      }
    } catch (err) {
      alert('Error sending booking. Check console for details.');
      console.error(err);
    } finally {
      setLoading(false);
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
        <button 
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-md font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : 'Submit Booking'}
        </button>
        {sent && <p className="mt-4 text-green-600 text-center">Booking submitted successfully! Redirecting home...</p>}
      </form>
    </section>
  );
};

export default Booking;
