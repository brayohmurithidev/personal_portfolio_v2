
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Google Cloud', 'Docker'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-fazilabs-dark via-fazilabs-darker to-fazilabs-dark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-fazilabs-accent text-lg mb-4 font-medium"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="gradient-text">Brian</span>
              <span className="text-white"> Murithi</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl text-gray-300 mb-8 font-light"
            >
              Full-Stack Developer & Creative Technologist
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              I craft exceptional digital experiences through innovative web applications, 
              scalable backend systems, and modern user interfaces. Let's build something amazing together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link
                to="/projects"
                className="group bg-gradient-to-r from-fazilabs-primary to-fazilabs-secondary px-8 py-4 rounded-xl text-white font-semibold flex items-center space-x-2 hover:scale-105 transition-all duration-300 hover-glow"
              >
                <span>View My Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="glass-card px-8 py-4 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300 border-white/20"
              >
                Let's Collaborate
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center space-x-6"
            >
              {[
                { icon: Github, href: 'https://github.com/brayohmurithidev', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/brian-murithi/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:murithibrianm@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon size={24} className="text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Code Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-fazilabs-accent opacity-50"
        >
          <Code size={40} />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-fazilabs-darker/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Technologies I Work With</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A curated selection of tools and technologies that power modern web applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card px-6 py-3 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">About Fazilabs</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                With over 3 years of experience in full-stack development, I specialize in creating
                scalable web applications that solve real-world problems. My passion lies in the 
                intersection of design and technology.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                I believe in clean code, user-centered design, and continuous learning. When I'm not 
                coding, you'll find me exploring new technologies, contributing to open source, or 
                sharing knowledge with the developer community.
              </p>
              <Link
                to="/resume"
                className="inline-flex items-center space-x-2 text-fazilabs-accent hover:text-fazilabs-primary transition-colors duration-300 font-semibold"
              >
                <span>View Full Resume</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-gray-400">Technologies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
