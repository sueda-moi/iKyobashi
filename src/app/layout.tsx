import ClientLayout from '@/components/ClientLayout';
import './globals.css';
import type { Metadata } from 'next';

// サイトのメタ情報（必要に応じて編集してください）
export const metadata: Metadata = {
  title: '京喬不動産株式会社',
  description: '自由に、未来に、輝く',
};

// App Router における共通レイアウト（クライアントレイアウトに処理を委譲）
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
