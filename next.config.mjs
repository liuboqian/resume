/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  generateBuildId: async () => {
    return process.env.APP_VERSION;
  },
  experimental: {
    instrumentationHook: true,
  },
};

export default nextConfig;
