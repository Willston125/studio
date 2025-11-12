import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    // This is the base URL of your site. It will be used for Open Graph images.
    // Replace this with your actual production URL when you deploy.
    NEXT_PUBLIC_SITE_URL: process.env.NODE_ENV === 'production'
        ? 'https://your-production-domain.com' // TODO: Replace with your domain
        : 'http://localhost:9002',
  },
};

export default nextConfig;
