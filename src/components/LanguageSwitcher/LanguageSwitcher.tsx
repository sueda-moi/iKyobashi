'use client';
type SupportedLocale = 'ja' | 'en' | 'zh';
import { useLocaleStore } from '@/store/useLocaleStore';

const locales = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocaleStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as SupportedLocale);
  };

  return (
    <div className="text-white mt-4 flex justify-end pr-4">
      <select
        value={locale}
        onChange={handleChange}
        className="bg-transparent border border-white text-white px-3 py-1 rounded-md text-sm focus:outline-none hover:bg-white hover:text-black transition-all"
      >
        {locales.map((l) => (
          <option key={l.code} value={l.code} className="text-black">
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}
