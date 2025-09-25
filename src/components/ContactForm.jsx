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

    let response;
    let apiEndpoint;

    try {
      apiEndpoint = process.env.REACT_APP_API_BASE_URL
        ? `${process.env.REACT_APP_API_BASE_URL}/api/contact`
        : '/api/contact';

      console.log('Using API endpoint:', apiEndpoint); 

      response = await fetch(apiEndpoint, {
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

      console.log('Response status:', response.status); 

      const data = await response.json();
      console.log('API Response:', data); 

      if (data.success) {
        setStatus('sent');
        setForm({ name:'', email:'', phone:'', message:'', subject:'' }); 
      } else {
        setStatus('error');
        console.error('API Error:', data.message);
      }
    } catch (err) {
      console.error('Error sending message:', err);
      console.error('Response status:', response?.status);
      console.error('API endpoint used:', apiEndpoint); 
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
          <option value="renovation">Construction Materials</option>
          <option value="consultation">Consultation</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Budget Range
        </label>
        <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
          <option value="">Select budget range</option>
          <option value="under-500k">Under KSh 100,000</option>
          <option value="500k-1m">KSh 100,000 - 500,000</option>
          <option value="1m-5m">KSh 500,000 - 1,000,000</option>
          <option value="over-5m">Over KSh 1,000,000</option>
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
