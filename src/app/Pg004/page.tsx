'use client';

import React from 'react';
import './Pg004.css'; // 必要なら Tailwind に移行可
import Image from 'next/image';

const Pg004: React.FC = () => {
  return (
    <main className="px-4 py-8 space-y-16">
      <div className="container">
        <div className="summary-container">
          <Image src="/image/conversation.jpg"
            alt="サマリー画像"
            fill
            className="summary-img" />
        </div>
      </div>

      <div className='childContent'>
        {/* 会社住所 + 地図 */}
        <section id="access" className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">会社アクセス</h2>

          {/* 丸の内オフィス */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-2">丸の内オフィス</h3>
            <p className="mb-2">〒100-0005 東京都千代田区丸の内3丁目4-2 新日石ビルヂング7階713</p>
            <div className="w-full h-64 border">
              <iframe
                src="https://maps.google.com/maps?q=東京都千代田区丸の内3丁目4-2&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                title="丸の内オフィスの地図"
              />
            </div>
          </div>

          {/* 日本橋オフィス */}
          <div>
            <h3 className="text-xl font-semibold mb-2">日本橋オフィス</h3>
            <p className="mb-2">〒103-0002 東京都中央区日本橋馬喰町1丁目12-7 シティハイツ日本橋202</p>
            <div className="w-full h-64 border">
              <iframe
                src="https://maps.google.com/maps?q=東京都中央区日本橋馬喰町1丁目12-7&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                title="日本橋オフィスの地図"
              />
            </div>
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
      </div>





    </main>
  );
};

export default Pg004;
