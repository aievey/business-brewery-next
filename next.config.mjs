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
        port: "",
        pathname: "/logos/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
