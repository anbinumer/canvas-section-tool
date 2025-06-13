/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/lti/launch',
        destination: '/app/lti/launch',
      },
    ]
  },
}

module.exports = nextConfig 