/** @type {import('next').NextConfig} */
import version from "./version.json" with { type: "json" };

const nextConfig = {
  output: "standalone",
  generateBuildId: async () => {
    return version.AppVersion;
  },
  experimental: {
    instrumentationHook: true,
  },
};

export default nextConfig;
