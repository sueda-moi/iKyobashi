// components/LanguageSelector.tsx
'use client';

import { useState } from 'react';
import { useLocaleStore } from '@/store/useLocaleStore';

const languages = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
];

export default function LanguageSelector() {
  const { locale, setLocale } = useLocaleStore();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ml-auto pr-6">
      <button
        onClick={() => setOpen(!open)}
        className="text-white hover:text-gray-300 transition"
        aria-label="Language selector"
      >
        🌐
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 bg-black/70 backdrop-blur-md text-white text-sm rounded shadow-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => {
                  setLocale(lang.code as any);
                  setOpen(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-white/10"
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
