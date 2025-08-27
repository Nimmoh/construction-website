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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow max-w-lg mx-auto">
      <input required name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full p-3 border mb-3 rounded" />
      <input required name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-3 border mb-3 rounded" />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="w-full p-3 border mb-3 rounded" />
      <textarea required name="message" rows={5} placeholder="Message" value={form.message} onChange={handleChange} className="w-full p-3 border mb-3 rounded"></textarea>
      <button className="bg-amber-500 text-white px-6 py-3 rounded-md w-full">Send Message</button>
      {status==='sent' && <p className="mt-3 text-green-600">Message sent — thank you!</p>}
      {status==='error' && <p className="mt-3 text-red-600">Error sending message.</p>}
    </form>
  );
};

export default ContactForm;
