
import React from 'react';
import { motion } from 'framer-motion';

const BlogHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl font-bold text-white mb-6">
        Developer <span className="gradient-text">Blog</span>
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Insights, tutorials, and thoughts on modern web development, emerging technologies, 
        and software engineering best practices.
      </p>
    </motion.div>
  );
};

export default BlogHeader;
