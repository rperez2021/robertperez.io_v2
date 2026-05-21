module.exports = {
  siteMetadata: {
    title: `Roberto Perez Portfolio`,
    description: `Portfolio Website for Roberto Perez, Web Developer, Tech Enthusiast, Closet Nerd, Husband and Dad`,
    author: `Roberto Perez`,
    siteUrl: `https://robertperez.io`,
    keywords: `Web Design, Portfolio, Web Developer, San Diego, Brevity Is, Software Developer, Front-End Web Developer`
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/src/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roberto Perez Portfolio`,
        short_name: `Rob Perez`,
        start_url: `/`,
        background_color: `#1a1a1a`,
        theme_color: `#1a1a1a`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
