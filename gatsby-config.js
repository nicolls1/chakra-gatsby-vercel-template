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
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if `false`, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if `false`, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: false,
        /**
         * @property {number} [portalZIndex=40]
         * The z-index to apply to all portal nodes. This is useful
         * if your app uses a lot z-index to position elements.
         */
        portalZIndex: 40,
      },
    },
  ],
};
