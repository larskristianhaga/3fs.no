import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Use the TypeScript CLI so Next.js works with the native TypeScript 7 compiler
    useTypeScriptCli: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year in seconds
  },
};

export default nextConfig;
