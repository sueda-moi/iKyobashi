import { create } from 'zustand';

type Locale = 'ja' | 'en' | 'zh';

interface LocaleState {
  locale: Locale;
  messages: Record<string, any>;
  setLocale: (newLocale: Locale) => Promise<void>;
}

export const useLocaleStore = create<LocaleState>((set) => ({
  locale: 'ja',
  messages: {},
  setLocale: async (newLocale) => {
    const loadedMessages: Record<string, any> = {};
    const messageFiles = ['about', 'contact', 'home', 'common', 'help'];

    for (const file of messageFiles) {
      const module = await import(`../../messages/${newLocale}/${file}.json`);
      loadedMessages[file] = module.default;
    }

    set({ locale: newLocale, messages: loadedMessages });
  }
}));
