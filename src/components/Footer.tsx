'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // 現在のパスを取得するためのフック

interface FooterProps {
  floating?: boolean;
}

const Footer: React.FC<FooterProps> = ({ floating = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // 現在のページのパスを取得
  const isPg001 = pathname === '/Pg001'; // パスが /Pg001 かどうかを判定

  // スクロールイベントを監視し、スクロール位置が50pxを超えたら状態を更新
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className={clsx('App-footer', {
      floating, // `floating` プロップが true の場合に特定のスタイルを適用
      scrolled, // スクロールに応じてクラス切り替え
    })}>
      {/* ロゴ画像：Pg001 ページでは非表示 */}
      {!isPg001 && (
        <div className="flex-shrink-0">
          <Image src="/image/footerImg.jpg" alt="Logo" width={75} height={75} />
        </div>
      )}
      <div className="App-footer-content">
        <div>
          <p>東京都知事（1）第108005号</p>
          <p>京喬不動産株式会社 KEIKYO REAL ESTATE CO.,LTD.</p>
          <p>〒100-0005 東京都千代田区丸の内3丁目4-2 新日石ビルヂング7階713</p>
          <p>〒103-0002 東京都中央区日本橋馬喰町1丁目12-7 シティハイツ日本橋202</p>
          <p>&copy; KEIKYO REAL ESTATE CO.,LTD. ALL RIGHTS RESERVED</p>

        </div>
        <div style={{ textAlign: 'right' }}>
          <p>
            電話（Tel）：03-6228-3286
          </p>
          <p>
            ファクス（Fax)： 03-6736-0422
          </p>
          <p>
            携帯（Mobile)： 080-5659-1464
          </p>
          <p>E-MAIL WUJUNRONG@MARSCAPITALJP.COM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
