import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "resources.hellorubric.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "portal.getqpay.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
