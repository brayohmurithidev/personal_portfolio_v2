import React from "react";
import {motion} from "framer-motion";
import {ArrowRight, Calendar, Clock, User} from "lucide-react";
import {sanitizeTitle} from "@/lib/utils.ts";

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

interface BlogCardProps {
  post: BlogPost;
  index: number;
  onTagClick: (tag: string) => void;
}

const BlogCard = ({ post, index, onTagClick }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.article
      onClick={() =>
        (window.location.href = `/blog/${sanitizeTitle(post.title)}`)
      }
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-card rounded-2xl overflow-hidden hover-glow group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {post.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-fazilabs-accent text-white text-xs rounded-full font-semibold">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {formatDate(post.date)}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-fazilabs-accent transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <button
              key={tag}
              onClick={(e) => {
                e.stopPropagation();
                onTagClick(tag);
              }}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full hover:bg-fazilabs-primary/20 hover:text-fazilabs-primary transition-colors duration-300"
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <User size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm">{post.author}</span>
          </div>
          <ArrowRight
            size={16}
            className="text-fazilabs-accent group-hover:translate-x-1 transition-transform duration-300"
          />
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
