import { create } from 'zustand';

type Locale = 'ja' | 'en' | 'zh';
type MessageFile = 'about' | 'contact' | 'home' | 'common' | 'help' | 'header' | 'footer';

type Messages = Record<MessageFile, Record<string, string>>;

interface LocaleState {
  locale: Locale;
  messages: Messages;
  setLocale: (newLocale: Locale) => Promise<void>;
}

export const useLocaleStore = create<LocaleState>((set) => ({
  locale: 'ja',
  messages: {
    about: {},
    contact: {},
    home: {},
    common: {},
    help: {},
    header: {},
    footer: {},
  },
  setLocale: async (newLocale) => {
    const loadedMessages: Messages = {
      about: {},
      contact: {},
      home: {},
      common: {},
      help: {},
      header: {},
      footer: {},
    };

    const messageFiles: MessageFile[] = ['about', 'contact', 'home', 'common', 'help', 'header', 'footer'];

    for (const file of messageFiles) {
      const mod = await import(`../../messages/${newLocale}/${file}.json`);
      loadedMessages[file] = mod.default as Record<string, string>;
    }

    set({ locale: newLocale, messages: loadedMessages });
  },
}));

export type { MessageFile };
