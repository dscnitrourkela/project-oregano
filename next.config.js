const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ });
const withPWA = require('next-pwa')

module.exports = withMDX({
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true
      }
    ];
  },
  root: '/',
  experimental: {
    sprFlushToDisk: false
  },
  pageExtensions: ['js', 'jsx', 'mdx']
});

module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
})
