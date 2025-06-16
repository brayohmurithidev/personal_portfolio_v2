
import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

interface BlogTagFilterProps {
  allTags: string[];
  activeTag: string;
  setActiveTag: (tag: string) => void;
  searchQuery: string;
}

const BlogTagFilter = ({ allTags, activeTag, setActiveTag, searchQuery }: BlogTagFilterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-12"
    >
      <div className="flex items-center justify-center mb-8">
        <Tag size={20} className="text-gray-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">
          {searchQuery ? 'Search Results' : 'All Articles'}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
              activeTag === tag
                ? 'bg-gradient-to-r from-fazilabs-primary to-fazilabs-secondary text-white'
                : 'glass-card text-gray-400 hover:text-white hover:bg-white/20'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogTagFilter;
