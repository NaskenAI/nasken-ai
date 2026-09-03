/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/training",
        destination: "/",
        permanent: true,
      },
      {
        source: "/workshops",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
