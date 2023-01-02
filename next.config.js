/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:7001/:path*' // Proxy to Backend
      }
    ]
  }

}

module.exports = nextConfig
