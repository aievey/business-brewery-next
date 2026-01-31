/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: false,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.worldvectorlogo.com/",
        pathname: "/logos/**",
      },

      { protocol: "https", hostname: "robohash.org" },
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        pathname: "/stickers/**",
      },
    ],
  },
};

export default nextConfig;
