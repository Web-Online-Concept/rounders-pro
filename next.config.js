/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  experimental: {
    serverComponentsExternalPackages: ['xlsx', '@neondatabase/serverless']
  }
};

module.exports = nextConfig;