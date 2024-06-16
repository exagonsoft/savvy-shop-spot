/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'aceternity.com',
              port: '',
              pathname: '/account123/**',
            },
          ],
    },
};

export default nextConfig;
