'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
        initial={{ opacity: 0,  x: -1000, y: -1000 }}
        animate={{ opacity: 1, x: 1500, y: 1500 }}
        transition={{ duration: 5.5, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        repeat: Infinity, repeatType: "reverse"
      }}
      className="absolute bg-white/30 backdrop-blur-2xl h-80 w-80 pointer-events-none rounded-full shadow-lg "/>
        {!isSearchActive ? (
          <div
            key="initial-search"
            className="w-full max-w-2xl z-20"
          >
            <SearchContainer
              searchItems={[]}
              searchTerm={searchTerm}
              onSearchTermChange={handleSearchTermChange}
              isInitialState={true}
            />
          </div>
        ) : (
          <div
            key="initial-search"
            className="w-full max-w-2xl z-20"
          >
            <SearchContainer
              searchItems={searchItems}
              searchTerm={searchTerm}
              onSearchTermChange={handleSearchTermChange}
              isInitialState={false}
            />
          </div>
        )}
    </div>
  );
}