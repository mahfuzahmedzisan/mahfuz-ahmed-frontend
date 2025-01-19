import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function MainContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your own user ID and template ID from EmailJS
    emailjs.sendForm('service_yxl418q', 'template_907vw1l', e.target, 'your_user_id')
      .then((response) => {
        setStatus('Message sent successfully!');
        // Reset form values after successful submission
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        setStatus('There was an error sending the message. Please try again.');
      });
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-light mb-10 mt-3">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-light rounded-md focus:outline-none bg-transparent"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-light rounded-md focus:outline-none bg-transparent"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-light rounded-md focus:outline-none bg-transparent"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-block px-6 py-3 bg-gradient-primary shadow-shadow-primary rounded-md hover:bg-gradient-secondary hover:shadow-primary hover:shadow-sm transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-white">{status}</p>}
    </div>
  );
}
