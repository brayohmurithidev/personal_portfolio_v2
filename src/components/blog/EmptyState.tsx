
import React from 'react';
import { motion } from 'framer-motion';

interface EmptyStateProps {
  searchQuery: string;
  activeTag: string;
  onClearFilters: () => void;
}

const EmptyState = ({ searchQuery, activeTag, onClearFilters }: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-20"
    >
      <p className="text-gray-400 text-lg">
        {searchQuery 
          ? `No articles found matching "${searchQuery}"${activeTag !== 'all' ? ` in "${activeTag}"` : ''}.`
          : 'No articles found with the selected tag.'
        }
      </p>
      {(searchQuery || activeTag !== 'all') && (
        <button
          onClick={onClearFilters}
          className="mt-4 px-6 py-3 bg-fazilabs-primary text-white rounded-lg hover:bg-fazilabs-primary/80 transition-colors duration-300"
        >
          Clear Filters
        </button>
      )}
    </motion.div>
  );
};

export default EmptyState;
