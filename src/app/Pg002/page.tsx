'use client';

import './Pg002.css';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ExpandableTab from '@/components/ExpandableTab/ExpandableTab';
import dynamic from 'next/dynamic';
import InfoCardButton from '@/components/InfoCardButton/InfoCardButton';
import styles from '@/components/InfoCardButton/InfoCardButton.module.css';
import { useMessage } from '@/lib/useMessage';
import { useLocaleStore } from '@/store/useLocaleStore';

// ⚙️ Lottie animation (disabled SSR for client-side only)
const ScrollLottie = dynamic(() => import('@/components/ScrollLottie/ScrollLottie'), { ssr: false });

const Pg002: React.FC = () => {
  const sectionTeamRef = useRef<HTMLDivElement>(null);
  const sectionCompanyRef = useRef<HTMLDivElement>(null);
  const sectionPhotosRef = useRef<HTMLDivElement>(null);
  const getMessage = useMessage();
  const { locale } = useLocaleStore();
  const isCJK = locale === 'ja' || locale === 'zh';

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      setIsAtBottom(scrollTop + windowHeight >= fullHeight - 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      {/* 🔖 Summary section */}
      <div className="flex w-full pb-[60px] relative h-[800px] mb-8">
        <Image
          src="/image/sakura.jpg"
          alt="Summary Image"
          fill
          className="w-full block object-cover z-[100]"
        />
        <div className="summaryText-container">
          <h1>{getMessage('about', 'pg002_title')}</h1>
          <p>{getMessage('about', 'pg002_paragraph_1')}</p>
        </div>

        {!isMobile ? (
          <div className="absolute top-[14%] right-[5%] z-[102] flex flex-row gap-[20px] ">
            <div className={`info-card ${isCJK ? 'vertical' : 'horizontal'}`} onClick={() => scrollToSection(sectionTeamRef)}>
              <h3>{getMessage('about', 'pg002_nav_team')}</h3>
            </div>
            <div className={`info-card ${isCJK ? 'vertical' : 'horizontal'}`} onClick={() => scrollToSection(sectionCompanyRef)}>
              <h3>{getMessage('about', 'pg002_nav_company')}</h3>
            </div>
            <div className={`info-card ${isCJK ? 'vertical' : 'horizontal'}`} onClick={() => scrollToSection(sectionPhotosRef)}>
              <h3>{getMessage('about', 'pg002_nav_photos')}</h3>
            </div>
          </div>
        ) : (
          // {/* 🧭 セクションナビカード - モバイル版 */}  
          <div className={styles.outerContainer}>
            <InfoCardButton
              onClickTeam={() => scrollToSection(sectionTeamRef)}
              onClickCompany={() => scrollToSection(sectionCompanyRef)}
              onClickPhotos={() => scrollToSection(sectionPhotosRef)}
            />
          </div>
        )}
      </div>

      {/* 👇 まだ最下部でなければ、スクロール誘導アニメーションを表示 */}
      {!isAtBottom && (
        <div className="scroll-lottie-wrapper">
          <ScrollLottie onClick={() => scrollToSection(sectionTeamRef)} />
        </div>
      )}

      {/* 🧩 詳細セクション */}
      <div className="flex flex-col gap-[30px] childContent">
        {/* 🧑‍🤝‍🧑 チーム紹介 */}
        <div className="section-detail" ref={sectionTeamRef}>
          <ExpandableTab
            title={getMessage('about', 'pg002_section_team_title')}
            subtitle={getMessage('about', 'pg002_section_team_subtitle')}
          >
            <p>{getMessage('about', 'pg002_section_team_content')}</p>
            <ul>
              <li>{getMessage('about', 'pg002_section_team_list_1')}</li>
              <li>{getMessage('about', 'pg002_section_team_list_2')}</li>
              <li>{getMessage('about', 'pg002_section_team_list_3')}</li>
            </ul>
          </ExpandableTab>
        </div>

        {/* 🏢 会社概要 */}
        <div className="section-detail" ref={sectionCompanyRef}>
          <ExpandableTab
            title={getMessage('about', 'pg002_section_company_title')}
            subtitle={getMessage('about', 'pg002_section_company_subtitle')}
          >
            <p>{getMessage('about', 'pg002_section_company_content')}</p>
            <ul>
              <li>{getMessage('about', 'pg002_section_company_list_1')}</li>
              <li>{getMessage('about', 'pg002_section_company_list_2')}</li>
              <li>{getMessage('about', 'pg002_section_company_list_3')}</li>
            </ul>
          </ExpandableTab>
        </div>

        {/* 🖼️ 企業写真 */}
        <div className="section-detail" ref={sectionPhotosRef}>
          <ExpandableTab
            title={getMessage('about', 'pg002_section_photos_title')}
            subtitle={getMessage('about', 'pg002_section_photos_subtitle')}
          >
            <p>{getMessage('about', 'pg002_section_photos_content')}</p>
            <ul>
              <li>{getMessage('about', 'pg002_section_photos_list_1')}</li>
              <li>{getMessage('about', 'pg002_section_photos_list_2')}</li>
              <li>{getMessage('about', 'pg002_section_photos_list_3')}</li>
            </ul>
          </ExpandableTab>
        </div>
      </div>
    </div>
  );
};

export default Pg002;
