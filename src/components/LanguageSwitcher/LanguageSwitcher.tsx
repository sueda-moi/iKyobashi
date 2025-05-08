'use client';

import { useLocaleStore } from '@/store/useLocaleStore';

const locales = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocaleStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as any);
  };

  return (
    <select value={locale} onChange={handleChange} className="fixed top-4 right-4 z-50">
      {locales.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
