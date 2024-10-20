/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "xsgames.co", port: "" },
      {
        protocol: "https",
        hostname: "scontent-prg1-1.cdninstagram.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
