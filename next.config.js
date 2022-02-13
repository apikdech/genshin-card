/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.discordapp.com',
      'media.discordapp.net',
      'pbs.twimg.com'
    ]
  }
  // reactStrictMode: true,
}

module.exports = nextConfig
