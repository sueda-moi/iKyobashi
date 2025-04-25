'use client';

import './Pg003.css';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BusinessCarousel from '@/components/BusinessCard/BusinessCarousel';

import dynamic from 'next/dynamic';

// ⚙️ LottieアニメーションをSSR無効で読み込み（クライアント専用）
const ScrollLottie = dynamic(() => import('@/components/ScrollLottie/ScrollLottie'), { ssr: false });

const Pg003: React.FC = () => {
      const [isAtBottom, setIsAtBottom] = useState(false);
      const sectionTeamRef = useRef<HTMLDivElement>(null);
    
      // 📜 スクロール位置によってページ下部かどうかを判定
      useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const windowHeight = window.innerHeight;
          const fullHeight = document.documentElement.scrollHeight;
    
          // 「ページ最下部」に到達していれば true
          setIsAtBottom(scrollTop + windowHeight >= fullHeight - 20);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      // 🔍 指定したセクションにスムーズスクロール
      const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <div className="container">
      {/* サマリー画像セクション */}
      <div className="flex w-full pb-[60px] relative h-[800px] mb-8">
        <Image
          src="/image/office.jpg"
          alt="サマリー画像"
          fill
          className="w-full block object-cover z-[100]"
        />
      </div>

      {/* 👇 まだ最下部でなければ、スクロール誘導アニメーションを表示 */}
      {!isAtBottom && (
        <div className="scroll-lottie-wrapper">
          <ScrollLottie onClick={() => scrollToSection(sectionTeamRef)} />
        </div>
      )}

      <div className='childContent'>
        {/* 事業概要セクション */}
        <section className="mb-12 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">事業内容</h1>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            私たちは不動産を中心に多様なサービスを提供しています。
            お客様のニーズに合わせ、柔軟かつ専門的な対応を行います。
          </p>
        </section>

        {/* サービス一覧セクション */}
        {/* <section className="my-12 px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">サービス一覧</h2> 

          カルーセルの最大幅を制限し、中央揃えにするラッパー
          <div className="max-w-screen-lg mx-auto">
            <BusinessCarousel />
          </div>
        </section>
        */}

        <section className="services-section">
          <h2 className="text-2xl font-bold text-center mb-8">サービス一覧</h2>
          <BusinessCarousel />
        </section>
      </div>


    </div>
  );
};

export default Pg003;
