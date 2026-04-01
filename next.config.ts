import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/ko/soripen', destination: '/ko/soundpen', permanent: true },
      { source: '/ko/smartpen', destination: '/ko/neosmartpen', permanent: true },
      { source: '/ko/glossary', destination: '/ko/neosmartpen', permanent: true },
      { source: '/en/glossary', destination: '/en/neosmartpen', permanent: true },
      { source: '/ko/support-smartpen', destination: '/ko/customer', permanent: true },
      { source: '/en/support-smartpen', destination: '/en/customer', permanent: true },
    ];
  },
};

export default nextConfig;
