
import React, { useState, useMemo } from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';

// Import blog components
import BlogHeader from '../components/blog/BlogHeader';
import BlogSearch from '../components/blog/BlogSearch';
import FeaturedSection from '../components/blog/FeaturedSection';
import BlogTagFilter from '../components/blog/BlogTagFilter';
import BlogGrid from '../components/blog/BlogGrid';
import EmptyState from '../components/blog/EmptyState';

const Blog = () => {
  const [activeTag, setActiveTag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { data, loading, error } = usePortfolioData();

  // Move all hooks before any conditional returns
  const filteredPosts = useMemo(() => {
    if (!data?.blogPosts) return [];
    
    let posts = data.blogPosts;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.author.toLowerCase().includes(query)
      );
    }

    // Filter by tag
    if (activeTag !== 'all') {
      posts = posts.filter(post => post.tags.includes(activeTag));
    }

    return posts;
  }, [data?.blogPosts, searchQuery, activeTag]);

  const allTags = useMemo(() => {
    if (!data?.blogPosts) return ['all'];
    return ['all', ...Array.from(new Set(data.blogPosts.flatMap(post => post.tags)))];
  }, [data?.blogPosts]);

  const featuredPosts = useMemo(() => {
    if (!data?.blogPosts) return [];
    return data.blogPosts.filter(post => post.featured);
  }, [data?.blogPosts]);

  if (loading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-white text-lg">Loading blog posts...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-red-400 text-lg">Error loading blog posts</div>
      </div>
    );
  }

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    setSearchQuery('');
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setActiveTag('all');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <BlogHeader />
        
        <BlogSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          resultsCount={filteredPosts.length}
        />

        {/* Featured Posts - only show if no search query */}
        {!searchQuery && (
          <FeaturedSection
            featuredPosts={featuredPosts}
            onTagClick={handleTagClick}
          />
        )}

        <BlogTagFilter
          allTags={allTags}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
          searchQuery={searchQuery}
        />

        {filteredPosts.length === 0 ? (
          <EmptyState
            searchQuery={searchQuery}
            activeTag={activeTag}
            onClearFilters={handleClearFilters}
          />
        ) : (
          <BlogGrid
            posts={filteredPosts}
            onTagClick={handleTagClick}
          />
        )}
      </div>
    </div>
  );
};

export default Blog;
