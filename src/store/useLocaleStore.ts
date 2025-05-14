import { create } from 'zustand';

type Locale = 'ja' | 'en' | 'zh';
type MessageFile = 'about' | 'contact' | 'home' | 'common' | 'help' | 'header' | 'footer' | 'services';

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
    services: {},
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
      services: {},
    };

    const messageFiles: MessageFile[] = ['about', 'contact', 'home', 'common', 'help', 'header', 'footer' , 'services'];

    for (const file of messageFiles) {
      const mod = await import(`../../messages/${newLocale}/${file}.json`);
      loadedMessages[file] = mod.default as Record<string, string>;
    }

    set({ locale: newLocale, messages: loadedMessages });
  },
}));

export type { MessageFile };
