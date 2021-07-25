/* eslint-disable max-len */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'HackNITR 3.0',
    description:
      'HackNITR 3.0 is one of a kind hackathon brought to you by DSC NIT Rourkela and OpenCode. A unique opportunity to bring out your ideas and technological skills to win awesome prizes and swags.',
    siteUrl: 'https://hacknitr.tech',
    image: '/logo.png',
    twitterUsername: '@hacknitr',
    author: 'HackNITR',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'HackNITR 3.0',
        short_name: 'HackNITR',
        start_url: '/',
        background_color: '#17171d',
        theme_color: '#17171d',
        display: 'minimal-ui',
        icon: './static/logo.png',
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
