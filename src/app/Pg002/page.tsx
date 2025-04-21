'use client';

import './Pg002.css';
import { useRef } from 'react';
import React, { useState } from 'react';
import clsx from 'clsx';
import ExpandableTab from '@/components/ExpandableTab/ExpandableTab';
import dynamic from 'next/dynamic';

const ScrollLottie = dynamic(() => import('../../components/ScrollLottie/ScrollLottie'), { ssr: false });

const Pg002: React.FC = () => {
  const sectionARef = useRef<HTMLDivElement>(null);
  const sectionBRef = useRef<HTMLDivElement>(null);
  const sectionCRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
      <div className="container">
        <div className="summary-container">
          <img src="/image/sakura.jpg" alt="imgSummary" className='summary-img' />
          <div className="summaryText-container">
            <h1>トップメッセージ</h1>
            <p>私たちの企業の根幹には、自由、未来、そして輝くという価値観があります。私たちはクライアントの自由な選択を尊重し、彼らの未来をサポートすることを使命としています。また、私たちは常に快活な気風のもとで働き、率直な提言を行い、新しい発想を生み出すことに取り組んでいます。私たちのチームは創造力に満ち、柔軟な解決策を提供することで、お客様のニーズに応えます。</p>
            <p>私たちは不動産業界での豊富な経験と専門知識を持っており、お客様のニーズに合わせた最適な不動産ソリューションを提供します。私たちの目標は、お客様の期待を超える価値を提供し、彼らの人生やビジネスの成功に貢献することです。</p>
            <p>私たちの情熱と専門知識で、東京の不動産市場でのお手伝いをいたします。私たちと一緒に未来を輝かせましょう。</p>
          </div>
          <div className="card-container">
            <div className="info-card" onClick={() => scrollToSection(sectionARef)}>
              <h3>チーム紹介</h3>
            </div>
            <div className="info-card" onClick={() => scrollToSection(sectionBRef)}>
              <h3>会社概要</h3>
            </div>
            <div className="info-card" onClick={() => scrollToSection(sectionCRef)}>
              <h3>企業写真</h3>
            </div>
          </div>
          <ScrollLottie onClick={() => scrollToSection(sectionARef)} />
        </div>

        <div className="detail-container">
          <div className="section-detail section-card" ref={sectionARef}>
            <p>
              <span className="card-title">チーム紹介{" "}</span> 
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

          <div className="section-detail section-card" ref={sectionBRef}>
            <p><span className="card-title">会社概要{" "}</span>
            <span className="card-subtitle">COMPANY OVERVIEW</span></p>
            <ExpandableTab>
              <p>不動産売買、賃貸仲介、資産運用アドバイスなど多岐に渡るサービスを提供しています。</p>
              <ul>
                <li>住宅・商業用不動産の紹介</li>
                <li>市場調査と分析</li>
                <li>海外投資家向け支援</li>
              </ul>
            </ExpandableTab>
          </div>

          <div className="section-detail section-card" ref={sectionCRef}>
            <p><span className="card-title">企業写真{" "}</span>
            <span className="card-subtitle">CORPORATE PHOTOS</span></p>

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

  )

};

export default Pg002;
