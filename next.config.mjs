/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/people/shreya-sharma',
        destination: '/people/shreya',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
