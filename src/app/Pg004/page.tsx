'use client';

import React from 'react';
import './Pg004.css'; // 必要なら Tailwind に移行可

const Pg004: React.FC = () => {
  return (
    <main className="px-4 py-8 space-y-16">
      <div className="container">
        <div className="summary-container">
          <img src="/image/conversation.jpg" alt="imgSummary" className='summary-img' />
        </div>
      </div>




      {/* 会社住所 + 地図 */}
      <section id="access" className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">会社アクセス</h2>
        <div className="space-y-2">
          <p>〒123-4567 東京都渋谷区〇〇1-2-3</p>
          <p>TEL: 03-1234-5678</p>
        </div>
        <div className="mt-4">
          <iframe
            src="https://maps.google.com/maps?q=渋谷駅&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 border"
            allowFullScreen
            loading="lazy"
            title="会社地図"
          />
        </div>
      </section>

      {/* お問い合わせ方法 */}
      <section id="contact-method" className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">お問い合わせ方法</h2>
        <p className="mb-4">下記の方法でお気軽にお問い合わせください。</p>
      </section>

      {/* 問い合わせフォーム */}
      <section id="contact-form" className="max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">メールでのお問い合わせ</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">お名前</label>
            <input id="name" type="text" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">電話番号</label>
            <input id="phone" type="tel" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">メッセージ</label>
            <textarea id="message" rows={4} className="w-full border px-3 py-2 rounded" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            送信
          </button>
        </form>
      </section>
    </main>
  );
};

export default Pg004;
