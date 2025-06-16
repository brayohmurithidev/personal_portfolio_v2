
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'murithibrianm@gmail.com',
      href: 'mailto:Move…'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 706 134 387',
      href: 'tel:+254706134387'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/brayohmurithidev',
      username: '@brayohmurithidev'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/brian-murithi',
      username: '/in/brian-murithi'
    },
    {
      icon: MessageSquare,
      label: 'Twitter',
      href: 'https://twitter.com',
      username: '@_faztech'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-fazilabs-primary focus:outline-none transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-fazilabs-primary focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-fazilabs-primary focus:outline-none transition-colors duration-300"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-fazilabs-primary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-fazilabs-primary to-fazilabs-secondary px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 hover-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-fazilabs-primary to-fazilabs-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.label}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-fazilabs-primary/20 transition-colors duration-300">
                      <social.icon size={18} className="text-gray-400 group-hover:text-fazilabs-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{social.label}</h4>
                      <p className="text-gray-400 text-sm">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Availability</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for new projects</span>
              </div>
              <p className="text-gray-400 mb-4">
                I'm currently accepting new freelance projects and full-time opportunities. 
                Let's discuss your requirements and timeline.
              </p>
              <div className="text-sm text-gray-500">
                <p>Response time: Usually within 24 hours</p>
                <p>Timezone: PST (UTC-8)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you have a clear vision or just an idea, I'm here to help bring your project to life. 
              Let's schedule a call to discuss your requirements and explore possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:murithibrianm@gmail.com?subject=Project%20Discussion"
                className="bg-gradient-to-r from-fazilabs-primary to-fazilabs-secondary px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 hover-glow"
              >
                Schedule a Call
              </a>
              <a
                href="mailto:murithibrianm@gamil.com"
                className="glass-card px-8 py-4 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300 border-white/20"
              >
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
