import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      // Invalid src prop (https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-one-thumb.b80d3675.png&w=1080&q=75) on `next/image`, hostname "xpovio-ltr-nine.vercel.app" is not configured under images in your `next.config.js`
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
        port: '',
      },
    ],
  },
};

export default nextConfig;
