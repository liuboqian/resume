/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  generateBuildId: async () => {
    return process.env.GIT_HASH;
  },
  experimental: {
    instrumentationHook: true,
  },
};

export default nextConfig;
