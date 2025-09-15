import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, User, Building2, Star, FileText } from 'lucide-react';

export default function SearchResultCard({ result, index }) {
  const categoryIcons = {
    article: FileText,
    product: Star,
    person: User,
    company: Building2,
    event: Calendar
  };

  const categoryColors = {
    article: 'bg-blue-50 text-blue-600 border-blue-200',
    product: 'bg-green-50 text-green-600 border-green-200',
    person: 'bg-purple-50 text-purple-600 border-purple-200',
    company: 'bg-orange-50 text-orange-600 border-orange-200',
    event: 'bg-pink-50 text-pink-600 border-pink-200'
  };

  const Icon = categoryIcons[result.category] || FileText;

  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300 group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      onClick={() => result.url && window.open(result.url, '_blank')}
    >
      <div className="flex items-start gap-4">
        {result.image_url && (
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={result.image_url}
              alt={result.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
          </motion.div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <motion.div
              className={`px-2 py-1 rounded-md text-xs font-medium border ${
                categoryColors[result.category] || 'bg-gray-50 text-gray-600 border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="w-3 h-3 inline mr-1" />
              {result.category}
            </motion.div>
            
            {result.relevance_score && (
              <div className="text-xs text-gray-400">
                {Math.round(result.relevance_score * 100)}% match
              </div>
            )}
          </div>
          
          <motion.h3 
            className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-200"
            layoutId={`title-${result.id}`}
          >
            {result.title}
          </motion.h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
            {result.description}
          </p>
          
          {result.tags && result.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {result.tags.slice(0, 3).map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index * 0.1) + (tagIndex * 0.05) }}
                  whileHover={{ scale: 1.05, backgroundColor: '#e5e7eb' }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}
          
          {result.url && (
            <motion.div 
              className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700"
              whileHover={{ x: 2 }}
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              View Details
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}