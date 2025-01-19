'use client'
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function MainContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isClient, setIsClient] = useState(false);  // To handle client-side only logic

  useEffect(() => {
    setIsClient(true);  // Set client-side flag after component mounts
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the new service and template ID with the correct user ID
    emailjs.sendForm('service_21557aq', 'template_qulsfoj', e.target, 'B8nhJcArEZg3F_8g4')
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

  // Don't render the form until after the component is mounted on the client
  if (!isClient) {
    return null; // Avoid rendering the form on the server side
  }

  return (
    <>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-light mb-10 mt-3">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
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
              name="email"
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
    </>
  );
}
