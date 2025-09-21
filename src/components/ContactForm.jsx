import React, { useState } from 'react';

const ContactForm = ()=> {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'', subject:'' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e)=> setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e)=> {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || 'Contact Form Submission',
          message: form.message
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('sent');
        setForm({ name:'', email:'', phone:'', message:'', subject:'' }); // Reset form
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setStatus('error');
    } finally {
      setLoading(false);
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
          Subject
        </label>
        <input 
          name="subject" 
          placeholder="Enter subject" 
          value={form.subject} 
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
      <button 
        type="submit"
        disabled={loading}
        className="w-full bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {status==='sent' && <p className="mt-3 text-green-600 text-center">Message sent successfully! Thank you!</p>}
      {status==='error' && <p className="mt-3 text-red-600 text-center">Error sending message. Please try again.</p>}
    </form>
  );
};

export default ContactForm;
