import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '', // Leave empty for default port
        pathname: '/**', // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '', // Leave empty for default port
        pathname: '/**', // Allow all paths
      },
    ],
  },
};

export default nextConfig;