module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi-production-15df.up.railway.app',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
    experimental: {
      newNextLinkBehavior: false,
    },
  }