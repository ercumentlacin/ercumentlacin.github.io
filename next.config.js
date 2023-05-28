const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);
