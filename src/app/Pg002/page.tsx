'use client';

import './Pg002.css';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ExpandableTab from '@/components/ExpandableTab/ExpandableTab';
import dynamic from 'next/dynamic';
import InfoCardButton from '@/components/InfoCardButton/InfoCardButton';
import styles from '@/components/InfoCardButton/InfoCardButton.module.css';

// ⚙️ LottieアニメーションをSSR無効で読み込み（クライアント専用）
const ScrollLottie = dynamic(() => import('@/components/ScrollLottie/ScrollLottie'), { ssr: false });

const Pg002: React.FC = () => {
  // 🔗 各セクションへの参照を設定
  const sectionTeamRef = useRef<HTMLDivElement>(null);
  const sectionCompanyRef = useRef<HTMLDivElement>(null);
  const sectionPhotosRef = useRef<HTMLDivElement>(null);

  // screen width detection 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // 初回チェック
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const [isAtBottom, setIsAtBottom] = useState(false);

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
      {/* 🔖 事業概要（サマリー） */}
      <div className="flex w-full pb-[60px] relative h-[800px] mb-8">
        <Image src="/image/sakura.jpg"
          alt="サマリー画像"
          fill
          className="w-full block object-cover z-[100]" />
        <div className="summaryText-container">
          <h1>トップメッセージ</h1>
          <p>私たちの企業の根幹には、自由、未来、そして輝くという価値観があります。私たちはクライアントの自由な選択を尊重し、彼らの未来をサポートすることを使命としています。また、私たちは常に快活な気風のもとで働き、率直な提言を行い、新しい発想を生み出すことに取り組んでいます。私たちのチームは創造力に満ち、柔軟な解決策を提供することで、お客様のニーズに応えます。</p>
          <p>私たちは不動産業界での豊富な経験と専門知識を持っており、お客様のニーズに合わせた最適な不動産ソリューションを提供します。私たちの目標は、お客様の期待を超える価値を提供し、彼らの人生やビジネスの成功に貢献することです。</p>
          <p>私たちの情熱と専門知識で、東京の不動産市場でのお手伝いをいたします。私たちと一緒に未来を輝かせましょう。</p>
        </div>


        {!isMobile ? (
          // {/* 🧭 セクションナビカード - PC版 */}  
          <div className="absolute top-[14%] right-[5%] z-[102] flex flex-row gap-[20px] ">
            <div className="info-card" onClick={() => scrollToSection(sectionTeamRef)}>
              <h3>チーム紹介</h3>
            </div>
            <div className="info-card" onClick={() => scrollToSection(sectionCompanyRef)}>
              <h3>会社概要</h3>
            </div>
            <div className="info-card" onClick={() => scrollToSection(sectionPhotosRef)}>
              <h3>企業写真</h3>
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
      <div className="detail-container">
        {/* 🧑‍🤝‍🧑 チーム紹介 */}
        <div className="section-detail section-card" ref={sectionTeamRef}>
          <p>
            <span className="card-title">チーム紹介</span>
            <span className="card-subtitle">TEAM INTRODUCTION</span>
          </p>
          <ExpandableTab>
            <p>不動産売買、賃貸仲介、資産運用アドバイスなど多岐に渡るサービスを提供しています。</p>
            <ul>
              <li>住宅・商業用不動産の紹介</li>
              <li>市場調査と分析</li>
              <li>海外投資家向け支援</li>
            </ul>
          </ExpandableTab>
        </div>

        {/* 🏢 会社概要 */}
        <div className="section-detail section-card" ref={sectionCompanyRef}>
          <p>
            <span className="card-title">会社概要</span>
            <span className="card-subtitle">COMPANY OVERVIEW</span>
          </p>
          <ExpandableTab>
            <p>不動産売買、賃貸仲介、資産運用アドバイスなど多岐に渡るサービスを提供しています。</p>
            <ul>
              <li>住宅・商業用不動産の紹介</li>
              <li>市場調査と分析</li>
              <li>海外投資家向け支援</li>
            </ul>
          </ExpandableTab>
        </div>

        {/* 🖼️ 企業写真 */}
        <div className="section-detail section-card" ref={sectionPhotosRef}>
          <p>
            <span className="card-title">企業写真</span>
            <span className="card-subtitle">CORPORATE PHOTOS</span>
          </p>
          <ExpandableTab>
            <p>不動産売買、賃貸仲介、資産運用アドバイスなど多岐に渡るサービスを提供しています。</p>
            <ul>
              <li>住宅・商業用不動産の紹介</li>
              <li>市場調査と分析</li>
              <li>海外投資家向け支援</li>
            </ul>
          </ExpandableTab>
        </div>
      </div>
    </div>
  );
};

export default Pg002;
