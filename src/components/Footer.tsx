// components/Footer.tsx
'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

interface FooterProps {
  floating?: boolean;
}

const Footer: React.FC<FooterProps> = ({ floating = false }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer
      className={clsx(
        'px-5 py-6 text-white text-sm transition-colors duration-300 flex items-end',
        floating ? 'fixed bottom-0 left-0 right-0 z-[9999]' : 'relative z-[150]',
        scrolled && 'bg-black/80'
      )}
    >
      <div className="w-full flex justify-between">
        <div>
          <p>営業日：月・火・木・金・土曜日(GW・夏休・年末年始を除く)</p>
          <p>営業時間：10：00から19：00まで</p>
          <p>東京都新宿区高田馬場1-33-15　後楽園ビル302</p>
        </div>
        <div className="text-right">
          <p>Tel：03-5291-7330</p>
          <p>株式会社東進グループ Toshin Group Co., Ltd.</p>
          <p>&copy; TOSHINGROUP CO.,LTD. (C) ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
