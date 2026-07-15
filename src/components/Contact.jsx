import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message code is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.75 },
      colors: ['#6FB3B8', '#8dcadd', '#ffffff']
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');

    // EmailJS integration
    // We try sending using template triggers. If SERVICE_ID etc are unset, we fall back to a mock loader.
    // The user can configure these values in their own .env files.
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_mock';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_mock';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_mock';

    if (serviceId === 'service_mock') {
      // Mock Success Transition
      setTimeout(() => {
        setStatus('success');
        triggerConfetti();
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    } else {
      emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(() => {
        setStatus('success');
        triggerConfetti();
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
      });
    }
  };

  const contactData = [
    {
      icon: <FaEnvelope className="text-lg" />,
      label: 'Email Me',
      value: 'onelividusini31@gmail.com',
      url: 'mailto:onelividusini31@gmail.com'
    },
    {
      icon: <FaLinkedin className="text-lg" />,
      label: 'LinkedIn Connect',
      value: 'linkedin.com/in/oneli-vidusini',
      url: 'https://linkedin.com/in/oneli-vidusini'
    },
    {
      icon: <FaGithub className="text-lg" />,
      label: 'GitHub Repositories',
      value: 'github.com/Oneli-Vidusini',
      url: 'https://github.com/Oneli-Vidusini'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-bg-dark/50 relative border-t border-border-dark/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold font-title text-gray-100"
          >
            Contact <span className="text-brand">Me</span>
          </motion.h2>
          <div className="h-1 w-12 bg-brand mx-auto mt-4 rounded-full shadow-[0_0_8px_#6FB3B8]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span- così lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-lg font-bold font-title text-brand mb-3">Let's Connect</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                I am open to internship opportunities, freelance client projects, or collaborative developer work. 
                Feel free to drop a message or reach out through alternative channels!
              </p>

              {/* Items */}
              <div className="space-y-5">
                {contactData.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl border border-border-dark/45 hover:border-brand/40 bg-bg-card-dark/40 hover:bg-bg-card-dark/75 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-105 duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{item.label}</span>
                      <span className="text-sm font-semibold text-gray-200 group-hover:text-brand transition-colors truncate">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Column - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 md:p-10 rounded-2xl"
          >
            <h3 className="text-lg font-bold font-title text-gray-100 mb-6">Send A Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-bg-dark/75 border rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-brand/60 font-sans tracking-wide transition-all ${
                      errors.name ? 'border-red-500/50' : 'border-border-dark'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <span className="text-[11px] text-red-400 font-medium">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-bg-dark/75 border rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-brand/60 font-sans tracking-wide transition-all ${
                      errors.email ? 'border-red-500/50' : 'border-border-dark'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <span className="text-[11px] text-red-400 font-medium">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-gray-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-bg-dark/75 border border-border-dark rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-brand/60 font-sans tracking-wide transition-all"
                  placeholder="Enter message subject"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-bg-dark/75 border rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-brand/60 font-sans tracking-wide transition-all resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-border-dark'
                  }`}
                  placeholder="Enter your message details..."
                />
                {errors.message && <span className="text-[11px] text-red-400 font-medium">{errors.message}</span>}
              </div>

              {/* Status Banner */}
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="p-3 bg-brand/10 border border-brand/35 text-brand rounded-lg text-xs font-semibold"
                >
                  Thank you! Your message was submitted successfully.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="p-3 bg-red-500/10 border border-red-500/35 text-red-400 rounded-lg text-xs font-semibold"
                >
                  Oops! Something went wrong while submitting. Please try again.
                </motion.div>
              )}

              {/* Send Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-brand hover:bg-brand-hover disabled:bg-brand/50 text-bg-dark font-bold text-sm tracking-widest uppercase rounded-lg shadow-lg hover:shadow-brand/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-bg-dark border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
