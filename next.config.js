/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    API_ROUTE: "http://127.0.0.1:3000",
//     API_ROUTE: "https://next-image-blur-loader.vercel.app/",
  },
}

module.exports = nextConfig
