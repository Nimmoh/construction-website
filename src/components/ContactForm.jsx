import React, { useState } from 'react';

const ContactForm = ()=> {
  const [form, setForm] = useState({
    name:'',
    email:'',
    phone:'',
    message:'',
    subject:'',
    projectType:'',
    budgetRange:''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e)=> setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e)=> {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    setErrorMessage('');

    let response;
    let apiEndpoint;

    try {
      // Client-side validation
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        setStatus('error');
        setErrorMessage('Please fill in all required fields.');
        return;
      }

      apiEndpoint = process.env.REACT_APP_API_BASE_URL
        ? `${process.env.REACT_APP_API_BASE_URL}/api/contact`
        : '/api/contact';

      console.log('Using API endpoint:', apiEndpoint);
      console.log('Form data being sent:', form);

      // Create enhanced message with additional form data
      const enhancedMessage = `${form.message}

Additional Details:
${form.phone ? `Phone: ${form.phone}` : ''}
${form.projectType ? `Project Type: ${form.projectType}` : ''}
${form.budgetRange ? `Budget Range: ${form.budgetRange}` : ''}`.trim();

      response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim() || 'Contact Form Submission',
          message: enhancedMessage
        }),
      });

      console.log('Response status:', response.status);

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);

      if (data.success) {
        setStatus('sent');
        setForm({
          name:'',
          email:'',
          phone:'',
          message:'',
          subject:'',
          projectType:'',
          budgetRange:''
        });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
        console.error('API Error:', data.message);
      }
    } catch (err) {
      console.error('Error sending message:', err);
      console.error('Response status:', response?.status);
      console.error('API endpoint used:', apiEndpoint);
      setStatus('error');

      // Set user-friendly error message
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setErrorMessage('Network error. Please check your connection and try again.');
      } else if (response?.status === 400) {
        setErrorMessage('Invalid form data. Please check your inputs.');
      } else if (response?.status === 500) {
        setErrorMessage('Server error. Please try again later.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
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
        <select
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="">Select project type</option>
          <option value="residential">Residential Construction</option>
          <option value="commercial">Commercial Construction</option>
          <option value="renovation">Renovation</option>
          <option value="materials">Construction Materials</option>
          <option value="consultation">Consultation</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Budget Range
        </label>
        <select
          name="budgetRange"
          value={form.budgetRange}
          onChange={handleChange}
          className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="">Select budget range</option>
          <option value="under-100k">Under KSh 100,000</option>
          <option value="100k-500k">KSh 100,000 - 500,000</option>
          <option value="500k-1m">KSh 500,000 - 1,000,000</option>
          <option value="over-1m">Over KSh 1,000,000</option>
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
      {status==='sent' && (
        <div className="mt-3 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 text-center font-medium">
            ✅ Message sent successfully! Thank you for contacting us.
          </p>
          <p className="text-green-600 text-center text-sm mt-1">
            We'll get back to you within 24-48 hours.
          </p>
        </div>
      )}
      {status==='error' && (
        <div className="mt-3 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 text-center font-medium">
            ❌ {errorMessage || 'Error sending message. Please try again.'}
          </p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
