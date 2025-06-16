
import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

interface FeaturedSectionProps {
  featuredPosts: BlogPost[];
  onTagClick: (tag: string) => void;
}

const FeaturedSection = ({ featuredPosts, onTagClick }: FeaturedSectionProps) => {
  if (featuredPosts.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-20"
    >
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
        <span className="w-2 h-8 bg-gradient-to-b from-fazilabs-primary to-fazilabs-secondary rounded mr-4"></span>
        Featured Articles
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPosts.slice(0, 3).map((post, index) => (
          <BlogCard
            key={post.id}
            post={post}
            index={index}
            onTagClick={onTagClick}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedSection;
