/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/lti/launch',
        destination: '/app/lti/launch',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 