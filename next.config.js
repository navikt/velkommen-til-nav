/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? 'https://cdn.nav.no/frontendplattform/velkommen-til-nav/labs' : undefined,
}

module.exports = nextConfig
