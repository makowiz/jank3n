import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'ja'], // 英語、日本語
    defaultLocale: 'en',   // デフォルトは英語
  },
};

export default nextConfig;
