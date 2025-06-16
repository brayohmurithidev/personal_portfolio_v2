
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

interface BlogGridProps {
  posts: BlogPost[];
  onTagClick: (tag: string) => void;
}

const BlogGrid = ({ posts, onTagClick }: BlogGridProps) => {
  return (
    <motion.div
      layout
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {posts.map((post, index) => (
        <BlogCard
          key={post.id}
          post={post}
          index={index}
          onTagClick={onTagClick}
        />
      ))}
    </motion.div>
  );
};

export default BlogGrid;
