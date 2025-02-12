import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  optimizeFonts: false,
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
