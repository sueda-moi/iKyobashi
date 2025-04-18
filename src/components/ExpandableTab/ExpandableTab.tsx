'use client';
import React, { useState, ReactNode } from 'react';
import './ExpandableTab.css';

interface ExpandableTabProps {
  children: ReactNode;
}

const ExpandableTab: React.FC<ExpandableTabProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expandable-tab">
      <div className="tab-header" onClick={toggleExpansion}>
        <h3>{isExpanded ? '閉じる' : 'もっと見る'}</h3>
      </div>
      {isExpanded && (
        <div className="tab-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableTab;
