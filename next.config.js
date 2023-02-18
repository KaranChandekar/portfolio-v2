/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["skillicons.dev"],
  },
};

module.exports = nextConfig;
