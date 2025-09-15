import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Calendar, Star, MapPin } from 'lucide-react';

export default function SearchFilters({ 
  selectedCategory, 
  onCategoryChange,
  sortBy,
  onSortChange,
  categories = ['all', 'article', 'product', 'person', 'company', 'event']
}) {
  const categoryIcons = {
    all: Filter,
    article: Calendar,
    product: Star,
    person: MapPin,
    company: Filter,
    event: Calendar
  };

  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-200/50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Filter className="w-4 h-4" />
        Filters
      </h3>
      
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-3 block">Category</label>
          <div className="space-y-2">
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              return (
                <motion.label
                  key={category}
                  className="flex items-center cursor-pointer group"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    className="sr-only"
                  />
                  <motion.div
                    className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center transition-all ${
                      selectedCategory === category
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300 group-hover:border-blue-300'
                    }`}
                    animate={{
                      scale: selectedCategory === category ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {selectedCategory === category && (
                      <motion.div
                        className="w-1.5 h-1.5 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.div>
                  <Icon className="w-4 h-4 text-gray-400 mr-2" />
                  <span className={`capitalize text-sm transition-colors ${
                    selectedCategory === category ? 'text-blue-600' : 'text-gray-700'
                  }`}>
                    {category}
                  </span>
                </motion.label>
              );
            })}
          </div>
        </div>

        {/* Sort By */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-3 block">Sort By</label>
          <div className="space-y-2">
            {[
              { value: 'relevance', label: 'Relevance' },
              { value: 'date', label: 'Date' },
              { value: 'title', label: 'Title' }
            ].map((sort) => (
              <motion.label
                key={sort.value}
                className="flex items-center cursor-pointer group"
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="radio"
                  name="sort"
                  value={sort.value}
                  checked={sortBy === sort.value}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="sr-only"
                />
                <motion.div
                  className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center transition-all ${
                    sortBy === sort.value
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300 group-hover:border-blue-300'
                  }`}
                  animate={{
                    scale: sortBy === sort.value ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {sortBy === sort.value && (
                    <motion.div
                      className="w-1.5 h-1.5 bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
                <span className={`text-sm transition-colors ${
                  sortBy === sort.value ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {sort.label}
                </span>
              </motion.label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}