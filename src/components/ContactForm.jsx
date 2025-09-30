import React, { useState, useEffect } from 'react';

const ContactForm = ({ preSelectedService })=> {
  const [form, setForm] = useState({
    name:'',
    email:'',
    phone:'',
    message:'',
    subject:'',
    projectType:'',
    budgetRange:'',
    customBudget:''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [budgetType, setBudgetType] = useState('range');

  const handleChange = (e)=> setForm({...form, [e.target.name]: e.target.value});

  const handleCustomBudgetChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^\d,]/g, '');
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setForm({...form, customBudget: formattedValue});
  };

  useEffect(() => {
    if (preSelectedService) {
      setForm(prev => ({
        ...prev,
        projectType: preSelectedService
      }));
    }
  }, [preSelectedService]);

  const handleSubmit = async (e)=> {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    setErrorMessage('');

    let response;
    let apiEndpoint;

    try {
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

      const getBudgetText = () => {
        if (budgetType === 'custom' && form.customBudget) {
          return `Budget: KSh ${form.customBudget}`;
        } else if (budgetType === 'range' && form.budgetRange) {
          const budgetLabels = {
            'under-100k': 'Under KSh 100,000',
            '100k-500k': 'KSh 100,000 - 500,000',
            '500k-1m': 'KSh 500,000 - 1,000,000',
            '1m-5m': 'KSh 1,000,000 - 5,000,000',
            'over-5m': 'Over KSh 5,000,000'
          };
          return `Budget Range: ${budgetLabels[form.budgetRange] || form.budgetRange}`;
        }
        return '';
      };

      const enhancedMessage = `${form.message}

Additional Details:
${form.phone ? `Phone: ${form.phone}` : ''}
${form.projectType ? `Project Type: ${form.projectType}` : ''}
${getBudgetText()}`.trim();

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
          budgetRange:'',
          customBudget:''
        });
        setBudgetType('range');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
        console.error('API Error:', data.message);
      }
    } catch (err) {
      console.error('Error sending message:', err);
      console.error('Error details:', {
        message: err.message,
        name: err.name,
        stack: err.stack
      });
      console.error('Response status:', response?.status);
      console.error('API endpoint used:', apiEndpoint);

      setStatus('error');

      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setErrorMessage('Network error. Please check your connection and try again.');
      } else if (response?.status === 400) {
        setErrorMessage('Invalid form data. Please check your inputs.');
      } else if (response?.status === 500) {
        setErrorMessage('Server error. Please try again later.');
      } else if (response?.status === 404) {
        setErrorMessage('API endpoint not found. Please contact support.');
      } else {
        setErrorMessage(`Error: ${err.message || 'An unexpected error occurred. Please try again.'}`);
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
          <option value="aluminum-installation">Aluminum Doors & Windows Installation</option>
          <option value="hardware-installation">Door & Window Accessories Installation</option>
          <option value="shower-installation">Shower Cabinet Installation</option>
          <option value="concrete-installation">Concrete Block Installation</option>
          <option value="brick-installation">Brick Wall & Retaining Wall Installation</option>
          <option value="general-installation">General Installation Services</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Budget
        </label>

        <div className="flex gap-4 mb-3">
          <label className="flex items-center">
            <input
              type="radio"
              name="budgetType"
              value="range"
              checked={budgetType === 'range'}
              onChange={(e) => setBudgetType(e.target.value)}
              className="mr-2 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-slate-700">Select from range</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="budgetType"
              value="custom"
              checked={budgetType === 'custom'}
              onChange={(e) => setBudgetType(e.target.value)}
              className="mr-2 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-slate-700">Enter custom amount</span>
          </label>
        </div>

        {budgetType === 'range' && (
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
            <option value="1m-5m">KSh 1,000,000 - 5,000,000</option>
            <option value="over-5m">Over KSh 5,000,000</option>
          </select>
        )}

        {budgetType === 'custom' && (
          <div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 font-medium">
                KSh
              </span>
              <input
                type="text"
                name="customBudget"
                value={form.customBudget}
                onChange={handleCustomBudgetChange}
                placeholder="Enter your budget amount (e.g., 500,000)"
                className="w-full pl-12 pr-3 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Enter numbers only. Commas will be added automatically.
            </p>
          </div>
        )}
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
