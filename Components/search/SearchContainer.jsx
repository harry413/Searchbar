'use client';
import React, { useState, useEffect, useRef, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Settings, Folder, Image, Play, User, MessageSquare, List as ListIcon, Link as LinkIcon, ArrowUpRight } from 'lucide-react';
import SearchResultItem from './SearchResultItem';

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <div
      onClick={onChange}
      className={`w-9 h-5 flex items-center rounded-full p-0.5 cursor-pointer transition-colors ${
        checked ? 'bg-black' : 'bg-gray-200'
      }`}
    >
      <motion.div
        className="w-4 h-4 bg-white rounded-full"
        layout
      
      />
    </div>
  );
};

export default function SearchContainer({
  searchItems = [],
  searchTerm,
  onSearchTermChange,
  isInitialState = false
}) {
  const [activeTab, setActiveTab] = useState('all');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settings, setSettings] = useState({
    files: true,
    people: true,
    chats: false,
    lists: false,
  });
  const settingsRef = useRef(null);

  const filteredItems = searchItems?.filter(item => {
    if (!searchTerm) return false;
    const matchesSearch = item?.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;

    if (!settings.files && (item.type === 'file' || item.type === 'folder')) return false;
    if (!settings.people && item.type === 'person') return false;

    if (activeTab === 'all') return true;
    if (activeTab === 'files') return item.type === 'file' || item.type === 'folder';
    if (activeTab === 'people') return item.type === 'person';
    return true;
  });

  const getFilteredCount = (type) => {
    return searchItems.filter(item => {
      const matchesSearch = searchTerm ? item.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
      if (!matchesSearch) return false;
      if (type === 'all') return true;
      if (type === 'files') return item.type === 'file' || item.type === 'folder';
      if (type === 'people') return item.type === 'person';
      return false;
    }).length;
  };
  
  const allCount = getFilteredCount('all');
  const filesCount = getFilteredCount('files');
  const peopleCount = getFilteredCount('people');

  const clearSearch = () => {
    onSearchTermChange('');
  };

  const getItemIcon = (item) => {
    if (item.type === 'person') {
      return (
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
          {item.avatar_url ? (
            <img src={item.avatar_url} alt={item.title} className="w-full h-full object-cover" />
          ) : (
            <User className="w-5 h-5 text-gray-400" />
          )}
        </div>
      );
    }
    if (item.type === 'folder') {
      return (
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
          <Folder className="w-5 h-5 text-gray-600" />
        </div>
      );
    }
    const extension = item.title.split('.').pop();
    if (['jpg', 'png', 'gif'].includes(extension)) {
      return (
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
          <Image className="w-5 h-5 text-gray-600" />
        </div>
      );
    }
    if (['avi', 'mp4', 'mov'].includes(extension)) {
      return (
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
          <Play className="w-5 h-5 text-gray-600" />
        </div>
      );
    }
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
        <Folder className="w-5 h-5 text-gray-600" />
      </div>
    );
  };

  const tabs = [
    { id: 'all', label: 'All', count: allCount },
    { id: 'files', label: 'Files', icon: LinkIcon, count: filesCount },
    { id: 'people', label: 'People', icon: User, count: peopleCount }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [settingsRef]);

  return (
    <motion.div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Search Header */}
      <div className="p-6 pb-4">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-gray-400 absolute left-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            className="flex-1 ml-8 bg-transparent text-lg text-gray-900 placeholder-gray-400 outline-none"
            placeholder="Search"
            autoFocus={isInitialState}
          />
          {searchTerm && !isInitialState && (
            <button
              onClick={clearSearch}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <span className="text-sm font-medium underline">Clear</span>
            </button>
          )}
          {isInitialState && (
           <div className='flex gap-4 items-center text-gray-600 cursor-pointer'>
            <p className='border rounded-lg shadow-md px-2'>s</p>
            <p>Easy Access</p>
           </div>
          )}
        </div>
      </div>
      
      {!isInitialState && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
        >
          {/* Tabs */}
          <div className="px-6 pb-2">
            <div className="flex items-center justify-between">
              <div className="flex space-x-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center space-x-2 pb-3 transition-colors ${
                      activeTab === tab.id ? 'text-black' : 'text-gray-500'
                    }`}
                  >
                    {tab.icon && <tab.icon className="w-4 h-4" />}
                    <span className="font-medium capitalize">{tab.label}</span>
                    <span className={`text-sm ${
                      activeTab === tab.id ? 'text-black' : 'text-gray-400'
                    }`}>{tab.count}</span>
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                        layoutId="tabIndicator"
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="relative" ref={settingsRef}>
                <button
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Settings className="w-5 h-5 text-gray-400" />
                </button>
                <AnimatePresence>
                  {isSettingsOpen && (
                    <motion.div
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 p-2 z-10"
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="space-y-1">
                        {[
                          { key: 'files', label: 'Files', icon: Folder },
                          { key: 'people', label: 'People', icon: User },
                          { key: 'chats', label: 'Chats', icon: MessageSquare },
                          { key: 'lists', label: 'Lists', icon: ListIcon },
                        ].map(({ key, label, icon: Icon }) => (
                          <div key={key} className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                            <div className="flex items-center space-x-2">
                              <Icon className="w-4 h-4 text-gray-500" />
                              <span className="text-sm font-medium text-gray-700">{label}</span>
                            </div>
                            <ToggleSwitch
                              checked={settings[key]}
                              onChange={() => setSettings(s => ({ ...s, [key]: !s[key] }))}
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="px-6 pb-6" style={{ minHeight: '300px' }}>
            <div className="space-y-1">
              {filteredItems.map((item, index) => (
                <SearchResultItem key={item.id || index} item={item} getItemIcon={getItemIcon} />
              ))}
              {filteredItems.length === 0 && searchTerm && (
                <div className="text-center py-8 text-gray-500">
                  No results found for "{searchTerm}"
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}