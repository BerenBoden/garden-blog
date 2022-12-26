module.exports = {
  images: {
    baseUrl: 'http://localhost:1337/uploads/',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
    experimental: {
      newNextLinkBehavior: false,
    },
  }