/**
 * @type {import('gatsby').GatsbyConfig}
 * 
 */
require("dotenv").config({
  path: `.env.development`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
}
