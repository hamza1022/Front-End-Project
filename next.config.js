/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    stripe_public_key : process.env.STRIPE_PUBLIC_KEY
  },
  images: {
    domains: ["plus.unsplash.com", "source.unsplash.com", "media.istockphoto.com","cdn.discordapp.com","media.discordapp.net"],
  },
}

module.exports =  nextConfig
