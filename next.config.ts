import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exclure les packages Sanity du bundle SSR pour éviter les conflits
  // de contexte React lors du build (erreur createContext)
  serverExternalPackages: ['sanity', 'next-sanity', '@sanity/ui', '@sanity/icons'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
