/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.geeksforgeeks.org'],
  },
}

module.exports = nextConfig