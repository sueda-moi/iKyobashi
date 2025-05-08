// src/i18n.ts
export const locales = ['ja', 'en', 'zh'] as const;

export const defaultLocale = 'ja';

// 修改 requestMessages 以加载多个文件
export const requestMessages = async (locale: string) => {
    const messages: Record<string, any> = {}; // 明确声明 messages 为字典类型

  // 假设文件夹结构里有多个 JSON 文件（如 about.json, contact.json, home.json）
  const messageFiles = ['about', 'contact', 'home', 'common', 'help'];

  for (const file of messageFiles) {
    // 动态加载每个文件夹下的对应语言文件
    const module = await import(`../messages/${locale}/${file}.json`);
    messages[file] = module;
  }

  return messages;
};
