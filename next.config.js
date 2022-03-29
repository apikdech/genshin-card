/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.discordapp.com',
      'media.discordapp.net',
      'pbs.twimg.com'
    ]
  },
  assetPrefix: '/genshin-card',
  env: {
    BACKEND_URL: process.env.BACKEND_URL
  },
  // images: {
  //   loader: 'imgix',
  //   path: '/',
  // },
  // reactStrictMode: true,
}

module.exports = nextConfig
