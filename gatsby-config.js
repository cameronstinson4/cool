module.exports = {
  siteMetadata: {
    title: 'Cool',
    description: 'cool',
    siteUrl: `https://www.cameronstinson.cool/`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'cool',
        short_name: 'cool',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#40b4c4',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'roboto:300,400,500,700',
        ],
      },
    },
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, 'gatsby-image'

  ],
}
