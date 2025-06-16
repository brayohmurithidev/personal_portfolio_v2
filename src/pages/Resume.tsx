
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Download } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Resume = () => {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-red-400 text-lg">Error loading resume data</div>
      </div>
    );
  }

  const { experiences, education, certifications, skills } = data;

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
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            A comprehensive overview of my professional journey, skills, and achievements in software development.
          </p>
          <a href="/brian-murithi-resume.pdf" download>
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-fazilabs-primary to-fazilabs-secondary px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 hover-glow">
              <Download size={20} />
              <span>Download PDF</span>
            </button>
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-fazilabs-primary to-fazilabs-secondary rounded mr-4"></span>
                Work Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 rounded-2xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-fazilabs-accent font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400 text-sm mb-1">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-fazilabs-primary/20 text-fazilabs-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-fazilabs-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-fazilabs-primary to-fazilabs-secondary rounded mr-4"></span>
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 rounded-2xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-fazilabs-accent font-semibold">{edu.school}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400 text-sm mb-1">
                          <Calendar size={14} className="mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-white font-semibold mb-3">GPA: {edu.gpa}</p>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-fazilabs-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-4 rounded-xl"
                  >
                    <h3 className="text-white font-semibold mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg hover:bg-fazilabs-primary/20 hover:text-fazilabs-primary transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Certifications */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-4 rounded-xl hover-glow group"
                  >
                    <h3 className="text-white font-semibold mb-1 group-hover:text-fazilabs-accent transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-fazilabs-accent text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">{cert.date}</span>
                      <ExternalLink size={14} className="text-gray-400 group-hover:text-fazilabs-accent transition-colors duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
