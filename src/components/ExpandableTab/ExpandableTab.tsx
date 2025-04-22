'use client';
import React, { useState, ReactNode } from 'react';
import './ExpandableTab.css';

interface ExpandableTabProps {
  children: ReactNode;
}

const ExpandableTab: React.FC<ExpandableTabProps> = ({ children }) => {
  // コンテンツの表示状態（true = 展開中、false = 閉じた状態）
  const [isExpanded, setIsExpanded] = useState(true); // 初期状態は展開済み

  // クリック時に表示・非表示を切り替える
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expandable-tab">
      <div className="tab-header" onClick={toggleExpansion}>
        <p
          style={{
            textAlign: 'right',
            fontSize: '10pt',
            fontFamily: '"Meiryo UI", sans-serif',
          }}
        >
          {/* ラベル表示：展開中なら「閉じる」、閉じているなら「もっと見る」 */}
          {isExpanded ? '閉じる' : 'もっと見る'}
        </p>
      </div>
      {/* isExpanded が true の場合のみコンテンツを表示 */}
      {isExpanded && (
        <div className="tab-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableTab;
