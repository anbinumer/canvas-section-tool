/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://aculeo.beta.instructure.com https://*.instructure.com",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 