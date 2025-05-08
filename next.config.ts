import createIntlPlugin from 'next-intl/plugin';


const plugin = createIntlPlugin('./src/i18n.ts');
//const plugin = createIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {}
  }
};

export default plugin(nextConfig);
