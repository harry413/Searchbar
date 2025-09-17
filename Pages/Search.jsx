'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Items from '../Entities/SearchItem';
import SearchContainer from '../Components/search/SearchContainer';

export default function Search() {
  const [searchItems, setSearchItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    loadSearchItems();
  }, []);

  const loadSearchItems = async () => {
    try {      
      setSearchItems(Items || []);
    } catch (error) {
      console.error('Error loading search items:', error);
      setSearchItems([]);
    }
  };

  const handleSearchTermChange = (newTerm) => {
    setSearchTerm(newTerm);
    if (newTerm.length > 0 && !isSearchActive) {
      setIsSearchActive(true);
    } else if (newTerm.length === 0 && isSearchActive) {
      setIsSearchActive(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#bbbdc7] via-[#bbbdc7] to-[#d47a2c] relative overflow-hidden" >
      <motion.div 
        initial={{ opacity: 0,  x: 800, y: 200 }}
        animate={{ opacity: 1, x: -800, y: 200 }}
        transition={{ duration: 5.5, scale: { type: "inertia", visualDuration: 0.4, bounce: 0.5 },
        repeat: Infinity, repeatType: "reverse"
      }}
      className="absolute bg-white/30 backdrop-blur-2xl h-80 w-80 pointer-events-none rounded-full shadow-lg "/>
      <motion.div 
        initial={{ opacity: 0,  x: -800, y: -300 }}
        animate={{ opacity: 1, x: 800, y: 100 }}
        transition={{ duration: 5.5, scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
        repeat: Infinity, repeatType: "reverse"
      }}
      className="absolute bg-white/30 backdrop-blur-2xl h-40 w-40 pointer-events-none rounded-full shadow-lg "/>
        {!isSearchActive ? (
          <AnimatePresence>
          <motion.div
            key="initial-search"
            className="w-full max-w-2xl z-20"
            initial={{ opacity: 0, x: -800 , y: 200 , scale: 0.8 , rotate: 10 }}
            animate={{ opacity: 1, x: 0 , y: 0 , scale: 1 , rotate: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 5.5, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        repeat: Infinity, repeatType: "reverse"}}
            exit={{ opacity: 0, x: 800 , y: 200 , scale: 0.8 , rotate: 10, transition: { duration: 1.5 } }} 
          >
            <SearchContainer
              searchItems={[]}
              searchTerm={searchTerm}
              onSearchTermChange={handleSearchTermChange}
              isInitialState={true}
            />
          </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence>
          <motion.div
            key="initial-search"
            className="w-full max-w-2xl z-20"
            initial={{ opacity: 0, x: -800 , y: 200 , scale: 0.8 , rotate: 10 }}
            animate={{ opacity: 1, x: 0 , y: 0 , scale: 1 , rotate: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, x: 800 , y: 200 , scale: 0.8 , rotate: 10, transition: { duration: 0.5 } }}
          >
            <SearchContainer
              searchItems={searchItems}
              searchTerm={searchTerm}
              onSearchTermChange={handleSearchTermChange}
              isInitialState={false}
            />
          </motion.div>
          </AnimatePresence>
        )}
    </div>
  );
}