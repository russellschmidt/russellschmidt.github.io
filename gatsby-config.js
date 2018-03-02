module.exports = {
  siteMetadata: {
    siteUrl: `https://www.russellschmidt.net`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-glamor`,
    `gatsby-plugin-sitemap`,
  ],
};
