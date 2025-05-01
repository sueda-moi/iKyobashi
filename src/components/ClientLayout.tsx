'use client'; // このコンポーネントはクライアント側で実行されることを明示

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import { usePageTransition } from '@/hooks/usePageTransition';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // ホーム画面（Pg001）かどうかを判定（フッターの浮き表示に使用）
  const isHomeScreenPage = pathname === '/Pg001';

  // ページ遷移時のローディング表示時間（ミリ秒）
  const LOADING_DURATION = 400;

  // カスタムフック：ページ遷移の状態を取得（ローディング制御）
  const { loading } = usePageTransition(LOADING_DURATION);

  // 初回アクセス時のローディング表示制御
  const [isFirstLoadFinished, setIsFirstLoadFinished] = useState(false);

  useEffect(() => {
    const handleInitialLoad = () => {
      // ページ完全読み込み後、一定時間待ってから表示開始
      setTimeout(() => {
        setIsFirstLoadFinished(true);
      }, LOADING_DURATION);
    };

    // ドキュメントがすでに読み込み完了している場合
    if (document.readyState === 'complete') {
      handleInitialLoad();
    } else {
      // 読み込み完了イベントにリスナーを追加
      window.addEventListener('load', handleInitialLoad);
      return () => window.removeEventListener('load', handleInitialLoad);
    }
  }, []);

  // ヘッダーメニューの開閉状態
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  // 初回読み込みが終わっていない場合、ローディング画面を表示
  if (!isFirstLoadFinished) {
    return <LoadingScreen />;
  }

  return (
    <>
      {/* ヘッダーコンポーネント（メニュー開閉付き） */}
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* ページ遷移時のアニメーション用ラッパー */}
      <AnimatePresence mode="wait">
        {/* ローディング中はアニメ付きのローディング画面を表示 */}
        {loading && <LoadingScreen key="loader" />}

        {/* ページ遷移が完了したら、子コンテンツを表示 */}
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

      {/* フッターコンポーネント（ホーム画面では浮かせて表示） */}
      <Footer floating={isHomeScreenPage} />
    </>
  );
}
