'use client';

import BusinessCard from '@/components/BusinessCard/BusinessCard';
import './Pg003.css'; 
import React from 'react';

const Pg003: React.FC = () => {
  return (
    <div className="container">
      <div className="summary-container">
        <img src="/image/office.jpg" alt="imgSummary" className='summary-img' />
      </div>
      
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">事業内容</h1>
        <p>
          私たちは不動産を中心に多様なサービスを提供しています。
          お客様のニーズに合わせ、柔軟かつ専門的な対応を行います。
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BusinessCard
          title="不動産売買の仲介"
          description="住宅・商業用不動産の売買をサポートします。"
          href="/services/sales"
        />
        <BusinessCard
          title="不動産賃貸の仲介"
          description="賃貸物件の紹介・契約支援を行います。"
          href="/services/rent"
        />
        <BusinessCard
          title="不動産の管理"
          description="賃貸管理・ビルメンテナンスなども対応可能です。"
        />
        <BusinessCard
          title="コンサルティング"
          description="不動産活用・投資に関する助言を提供します。"
        />
        <BusinessCard
          title="不動産開発や企画"
          description="将来に向けた開発プロジェクトの立案支援を行います。"
        />
        <BusinessCard
          title="関連金融サービス"
          description="住宅ローン、保険、家賃保証など多様なサービスを提供します。"
        />
      </section>
    </div>
  );
};

export default Pg003;
