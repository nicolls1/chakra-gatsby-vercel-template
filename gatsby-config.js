module.exports = {
  siteMetadata: {
    title: 'Webeez',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Webeez | Modern Websites Creators',
        short_name: 'Webeez',
        start_url: '/',
        icon: 'src/images/bee.png',
      },
    },
  ],
};
