/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',

  trailingSlash: true, // ✅ IMPORTANT

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'www.heart.org' },
      { protocol: 'https', hostname: 'media.istockphoto.com' }
    ],
  },
}

export default nextConfig