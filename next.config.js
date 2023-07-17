/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/catalog/search",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
