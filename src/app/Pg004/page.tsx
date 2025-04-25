'use client';

import React, { useEffect, useRef, useState } from 'react';
import './Pg004.css'; // 必要なら Tailwind に移行可
import Image from 'next/image';
import dynamic from 'next/dynamic';

// ⚙️ LottieアニメーションをSSR無効で読み込み（クライアント専用）
const ScrollLottie = dynamic(() => import('@/components/ScrollLottie/ScrollLottie'), { ssr: false });

const Pg004: React.FC = () => {

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
    <main className="px-4 py-8 space-y-16">
      <div className="container">
      <div className="flex w-full pb-[60px] relative h-[800px] mb-8">
          <Image src="/image/conversation.jpg"
            alt="サマリー画像"
            fill
            className="w-full block object-cover z-[100]" />
        </div>
      </div>

      {/* 👇 まだ最下部でなければ、スクロール誘導アニメーションを表示 */}
      {!isAtBottom && (
        <div className="scroll-lottie-wrapper">
          <ScrollLottie onClick={() => scrollToSection(sectionTeamRef)} />
        </div>
      )}

      <div className='childContent'>
        {/* 会社住所 + 地図 */}
        <section id="access" className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">会社アクセス</h2>

          {/* 丸の内オフィス */}
          <div className="mb-12" ref={sectionTeamRef}>
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
