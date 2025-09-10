import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = ()=> {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' });
  const [status, setStatus] = useState('');

  const handleChange = (e)=> setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e)=> {
    e.preventDefault();
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const USER_ID = 'YOUR_USER_ID';
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, USER_ID);
      setStatus('sent');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Full Name *
        </label>
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
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Email Address *
        </label>
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
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Phone Number
        </label>
        <input 
          name="phone" 
          placeholder="Enter your phone number" 
          value={form.phone} 
          onChange={handleChange} 
          className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Project Type
        </label>
        <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
          <option value="">Select project type</option>
          <option value="residential">Residential Construction</option>
          <option value="commercial">Commercial Construction</option>
          <option value="renovation">Renovation</option>
          <option value="consultation">Consultation</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Budget Range
        </label>
        <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
          <option value="">Select budget range</option>
          <option value="under-500k">Under KSh 500,000</option>
          <option value="500k-1m">KSh 500,000 - 1,000,000</option>
          <option value="1m-5m">KSh 1,000,000 - 5,000,000</option>
          <option value="over-5m">Over KSh 5,000,000</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Message *
        </label>
        <textarea 
          required 
          name="message" 
          rows={4} 
          placeholder="Tell us about your project..." 
          value={form.message} 
          onChange={handleChange} 
          className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        ></textarea>
      </div>
      <button className="w-full bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition">
        Send Message
      </button>
      {status==='sent' && <p className="mt-3 text-green-600 text-center">Message sent  thank you!</p>}
      {status==='error' && <p className="mt-3 text-red-600 text-center">Error sending message.</p>}
    </form>
  );
};

export default ContactForm;
