import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Matches requests to /api/*
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/:path*`, // Forwards them to Spring Boot API
      },
    ];
  },
};

export default nextConfig;
