/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateBuildId: async () => {
    // Forces Vercel to do a full rebuild and invalidate cache
    return `build-${Date.now()}`;
  },
};

export default nextConfig;
