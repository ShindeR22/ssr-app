import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'cdn.jsdelivr.net'], // Add both domains
  },
};


export default nextConfig;
