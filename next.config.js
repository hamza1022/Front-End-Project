/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    stripe_public_key : process.env.STRIPE_PUBLIC_KEY
  }
}

module.exports =  nextConfig
