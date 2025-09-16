import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, ArrowUpRight } from 'lucide-react';

export default function SearchResultItem({ item, getItemIcon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ x: 2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mr-4">{getItemIcon(item)}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <h3 className="font-medium text-gray-900 truncate">{item.title}</h3>
          {item.type === 'person' && item.status?.includes('Active now') && (
            <div className="ml-2 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
          )}
          {item.type === 'person' && item.status && !item.status.includes('Active now') && (
            <div className="ml-2 w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
          )}
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-0.5">
          {item.type === 'person' && <span>{item.status}</span>}
          {item.type === 'folder' && (
            <span>
              {item.file_count} Files
              {item.location && <span> in {item.location}</span>}
              {item.last_action && <span> • {item.last_action}</span>}
            </span>
          )}
          {item.type === 'file' && (
            <span>
              {item.location && <span>in {item.location}</span>}
              {item.last_action && <span> • {item.last_action}</span>}
            </span>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="flex items-center space-x-2 ml-4"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
              <Link className="w-4 h-4 text-gray-600" />
            </button>
            <button className="flex items-center space-x-1.5 p-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
              <span className="text-sm text-gray-600">New Tab</span>
              <ArrowUpRight className="w-4 h-4 text-gray-600" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}