// /components/ImageCarousel/ImageCarousel.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 表示する画像のパスを配列として定義
const images = [
  '/image/pg001-1.jpg',
  '/image/pg001-2.jpg',
  '/image/pg001-3.jpg',
  '/image/pg001-4.jpg',
];

const ImageCarousel: React.FC = () => {
  // 現在表示中の画像インデックスを状態として保持
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // 一定間隔（ここでは5秒）で画像を切り替えるタイマーを設定
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5秒ごとに切り替え

    // コンポーネントのアンマウント時にタイマーをクリア
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      {/* 画像の切り替えアニメーション */}
      <AnimatePresence>
        <motion.img
          key={images[current]} // 切り替え時にアニメーションを適用するためのキー
          src={images[current]} // 現在表示する画像のURL
          initial={{ opacity: 0 }} // 初期状態（透明）
          animate={{ opacity: 1 }} // 表示アニメーション（フェードイン）
          exit={{ opacity: 0 }}    // 非表示アニメーション（フェードアウト）
          transition={{ duration: 1 }} // アニメーションの所要時間
          className="absolute inset-0 w-full h-full object-cover"
          alt="background"
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;
