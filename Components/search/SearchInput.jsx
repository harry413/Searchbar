import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2, TrendingUp } from 'lucide-react';

export default function SearchInput({ 
  value, 
  onChange, 
  onSubmit, 
  isLoading = false,
  suggestions = [],
  showSuggestions = false,
  onSuggestionClick,
  placeholder = "Search for anything..."
}) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
    }
  };

  const clearSearch = () => {
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <motion.form
        onSubmit={handleSubmit}
        className="relative"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className={`relative transition-all duration-300 ${
          isFocused ? 'transform scale-105' : ''
        }`}>
          <motion.div
            className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
              isFocused 
                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl scale-110' 
                : 'bg-white/50 blur-none scale-100'
            }`}
            animate={{
              opacity: isFocused ? 0.8 : 0,
            }}
          />
          
          <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
            <div className="flex items-center px-6 py-4">
              <motion.div
                animate={{ 
                  rotate: isLoading ? 360 : 0,
                  scale: isFocused ? 1.1 : 1 
                }}
                transition={{ 
                  rotate: { duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" },
                  scale: { duration: 0.2 }
                }}
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 text-blue-500" />
                ) : (
                  <Search className="w-5 h-5 text-gray-400" />
                )}
              </motion.div>
              
              <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                placeholder={placeholder}
                className="flex-1 ml-4 bg-transparent outline-none text-lg text-gray-800 placeholder-gray-400"
              />
              
              <AnimatePresence>
                {value && (
                  <motion.button
                    type="button"
                    onClick={clearSearch}
                    className="ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.form>

      {/* Search Suggestions */}
      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200/50 overflow-hidden z-50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {suggestions.slice(0, 6).map((suggestion, index) => (
              <motion.div
                key={suggestion}
                className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                onClick={() => onSuggestionClick(suggestion)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
              >
                <TrendingUp className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-700">{suggestion}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}