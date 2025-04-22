'use client';

import './globals.css';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import { usePageTransition } from '@/hooks/usePageTransition';
import { useEffect, useState } from 'react';

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  const pathname = usePathname();
  const LOADING_DURATION = 800; // 🔧 ローディング時間（ミリ秒）
  const { loading } = usePageTransition(LOADING_DURATION);
  const isHomeScreenPage = pathname === '/Pg001';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => {
        setIsLoaded(true); // ページ読み込み後、遅延してローディング解除
      }, LOADING_DURATION); // ⏱️ 時間統一
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
      return () => window.removeEventListener('load', handlePageLoad);
    }
  }, []);

  return (
    <html lang="ja"> 
      <body className="min-h-screen flex flex-col w-full relative">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen key="loader" />}
          {!loading && (
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1"
            >
              <main className="flex-1 w-full">{children}</main>
            </motion.div>
          )}
        </AnimatePresence>
        <Footer floating={isHomeScreenPage} />
      </body>
    </html>
  );
}
