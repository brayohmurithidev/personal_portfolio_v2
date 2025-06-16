
import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';

interface BlogSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  resultsCount: number;
}

const BlogSearch = ({ searchQuery, setSearchQuery, resultsCount }: BlogSearchProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mb-12 max-w-2xl mx-auto"
    >
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder="Search articles by title, content, tags, or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 glass-card border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:border-fazilabs-primary"
        />
      </div>
      {searchQuery && (
        <p className="text-gray-400 text-sm mt-2">
          Found {resultsCount} article{resultsCount !== 1 ? 's' : ''} matching "{searchQuery}"
        </p>
      )}
    </motion.div>
  );
};

export default BlogSearch;
