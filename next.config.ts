import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "api.microlink.io",
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "assets.aceternity.com",
    ],
  },
  /* other config options here */
};

export default nextConfig;
