'use client';

// import React, { useEffect, useRef, useState } from 'react';
import BusinessCard from './BusinessCard';
import './BusinessCard.css';
import {
    RealEstateIcon001,
    RealEstateIcon002,
    RealEstateIcon003,
    RealEstateIcon004,
    RealEstateIcon005,
    RealEstateIcon006
  } from '@/components/Icons';

interface CardData {
  title: string;
  description: string;
  iconSrc: React.ReactNode; 
  href: string;
}

const cardData: CardData[] = [
  {
    title: '不動産売買の仲介',
    description: '住宅・商業用不動産の売買をサポートします。',
    iconSrc :<RealEstateIcon001 />,
    href: '/services/sales',
  },
  {
    title: '不動産賃貸の仲介',
    description: '賃貸物件の紹介・契約支援を行います。',
    iconSrc: <RealEstateIcon002 />,
    href: '/services/rent',
  },
  {
    title: '不動産の管理',
    description: '賃貸管理・ビルメンテナンスなども対応可能です。',
    iconSrc: <RealEstateIcon003 />,
    href: '/services/manage',
  },
  {
    title: 'コンサルティング',
    description: '不動産活用・投資に関する助言を提供します。',
    iconSrc: <RealEstateIcon004 />,
    href: '/services/consult',
  },
  {
    title: '不動産開発や企画',
    description: '開発プロジェクトの立案支援を行います。',
    iconSrc: <RealEstateIcon005 />,
    href: '/services/development',
  },
  {
    title: '関連金融サービス',
    description: '住宅ローン、保険など多様なサービスを提供します。',
    iconSrc: <RealEstateIcon006 />,
    href: '/services/finance',
  },
];

// const BusinessCarousel: React.FC = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [paused, setPaused] = useState(false);

//   useEffect(() => {
//     let frameId: number;

//     const scroll = () => {
//       if (scrollRef.current && !paused) {
//         scrollRef.current.scrollLeft += 0.5; // 控制速度
//       }
//       frameId = requestAnimationFrame(scroll);
//     };

//     frameId = requestAnimationFrame(scroll);
//     return () => cancelAnimationFrame(frameId);
//   }, [paused]);

//   return (
//     <div
//       className="overflow-x-auto whitespace-nowrap"
//       ref={scrollRef}
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       <div className="flex gap-6 px-4">
//         {cardData.map((card, index) => (
//           <div key={index} className="min-w-[280px] max-w-[280px] flex-shrink-0">
//             <BusinessCard {...card} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BusinessCarousel;

const BusinessCarousel: React.FC = () => {
  return (
    <div className="px-4 py-8">
      <div className="business-grid">
        {/* {cardData.map((card, index) => (
          <div key={index}>
            <BusinessCard {...card} />
          </div>
        ))} */}
        {cardData.map((card, index) => (
          <div key={index} className="h-full">
            <BusinessCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessCarousel;
