
import { useState, useEffect } from 'react';
import portfolioData from '../data/data.json';

export interface PortfolioData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    backgroundImage: string;
    profileImage: string;
  };
  about: {
    title: string;
    description: string;
    image: string;
    highlights: string[];
    stats: Array<{ label: string; value: string }>;
  };
  skills: Record<string, string[]>;
  experiences: Array<{
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    technologies: string[];
    achievements: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    location: string;
    period: string;
    gpa: string;
    achievements: string[];
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    credentialId: string;
  }>;
  projects: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    githubUrl: string;
    liveUrl: string;
    featured: boolean;
  }>;
  blogPosts: Array<{
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
  }>;
}

export const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Simulate async loading to maintain consistency with potential future API calls
      setTimeout(() => {
        setData(portfolioData as PortfolioData);
        setLoading(false);
      }, 100);
    } catch (err) {
      setError('Failed to load portfolio data');
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
