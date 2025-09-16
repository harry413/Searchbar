'use client';
import React, { useState, useEffect } from 'react';
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
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      
        {!isSearchActive ? (
          <div
            key="initial-search"
            className="w-full max-w-2xl"
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
            className="w-full max-w-2xl"
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