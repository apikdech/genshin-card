/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // assetPrefix: '/genshin-card/',
  env: {
    BACKEND_URL: process.env.BACKEND_URL
  },
  // images: {
  //   loader: 'imgix',
  //   path: '/',
  // },
}

module.exports = nextConfig
