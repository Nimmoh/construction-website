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
      <h2 className="text-3xl font-bold mb-6">Book an Appointment</h2>
      <form className="bg-white p-6 rounded-lg shadow" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-4">
          <input required name="name" placeholder="Full name" value={form.name} onChange={handleChange} className="p-3 border rounded" />
          <input required name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-3 border rounded" />
          <input required name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="p-3 border rounded" />
          <input required name="date" type="date" value={form.date} onChange={handleChange} className="p-3 border rounded" />
          <input required name="time" type="time" value={form.time} onChange={handleChange} className="p-3 border rounded" />
          <select required name="service" value={form.service} onChange={handleChange} className="p-3 border rounded">
            <option value="">Select service</option>
            <option>Residential Construction</option>
            <option>Commercial Project</option>
            <option>Renovation</option>
          </select>
        </div>
        <button className="mt-4 bg-amber-500 text-white px-6 py-3 rounded-md">Submit Booking</button>
        {sent && <p className="mt-3 text-green-600">Booking submitted — redirecting home...</p>}
      </form>
    </section>
  );
};

export default Booking;
