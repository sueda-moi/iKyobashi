'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
//import Image from 'next/image';
import { usePathname } from 'next/navigation'; // 現在のパスを取得するためのフック
//import { useTranslation } from 'react-i18next';


interface FooterProps {
  floating?: boolean;
}

const Footer: React.FC<FooterProps> = ({ floating = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // 現在のページのパスを取得
  const isPg001 = pathname === '/Pg001'; // パスが /Pg001 かどうかを判定

  //const { t } = useTranslation('common');

  // スクロールイベントを監視し、スクロール位置が50pxを超えたら状態を更新
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  return (
    <footer className={clsx('App-footer', {
      floating, // `floating` プロップが true の場合に特定のスタイルを適用
      scrolled, // スクロールに応じてクラス切り替え
    })}>

      {!isMobile ? ( // pc
        <div className="w-full leading-[0.5]">
          {/* Pg001 ページでは非表示  */}
          {!isPg001 && (
            <div className='appFooterContractBG'>
              <div>
                <p>連絡方式&nbsp;Contact method</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>電話（Tel）：03-6228-3286</p>
                  <p>携帯（Mobile)： xxx-xxxx-xxxx</p>
                  <p>Wechat：XXXXX</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p>ファクス（Fax)： 03-6736-0422</p>
                  <p>メール（E-MAIL）： xxxxxx@MARSCAPITALJP.COM</p>
                  <p>WathsAPP：XXXXX</p>
                </div>
              </div>
            </div>
          )}
          <div className='bottom-0 text-center'>
            {/* <p>東京都知事（1）第108005号&nbsp;京喬不動産株式会社 &copy;KEIKYO REAL ESTATE CO.,LTD. ALL RIGHTS RESERVED</p> */}
            <p>ALL RIGHTS RESERVED &copy;KEIKYO REAL ESTATE CO.,LTD. </p>
          </div>

        </div>

      ) : ( // smartphone
        <div className="App-footer-content-smartphone">
          {/* Pg001 ページでは非表示  */}
          {!isPg001 && (
            <div className='appFooterContractBG-smartphone'>
              <div>
                <p>連絡方式&nbsp;Contact method</p>
              </div>
              <div className="flex justify-between">
                <div>
                  {/* <p>電話（Tel）：03-6228-3286</p> */}
                  <p>Tel：03-6228-3286</p>
                  {/* <p>携帯（Mobile)： xxx-xxxx-xxxx</p> */}
                  <p>Mobile： xxx-xxxx-xxxx</p>
                  <p>Wechat：XXXXX</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  {/* <p>ファクス（Fax)： 03-6736-0422</p>
              <p>メール（E-MAIL）： xxxxxx@MARSCAPITALJP.COM</p> */}
                  <p>Fax： 03-6736-0422</p>
                  <p>E-MAIL： xxxxxx@MARSCAPITALJP.COM</p>
                  <p>WathsAPP：XXXXX</p>
                </div>
              </div>
            </div>
          )}
          <div className='bottom-0 text-center'>
            {/* <p>東京都知事（1）第108005号</p> */}
            {/* 京喬不動産株式会社 */}
            <p>ALL RIGHTS RESERVED &copy;KEIKYO REAL ESTATE CO.,LTD. </p>
          </div>

        </div>
      )}
    </footer>
  );
};

export default Footer;
