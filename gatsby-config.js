require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `ShZh的日记`,
    description: "沈之豪的个人日记小站",
    image: "static/favicon.png",
    siteUrl: `https://diary.shzh.me/`
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-emotion-dark-mode",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicon.png',
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({query: {site, allContentfulBlogPost}}) => {
              return allContentfulBlogPost.nodes.map(node => {
                return {
                  title: node.title,
                  description: node.desc,
                  date: node.date,
                  url: encodeURI(site.siteMetadata.siteUrl + '/blog/' + node.slug),
                  guid: site.siteMetadata.siteUrl + node.slug,
                }
              })
            },
            query: `
              {
                allContentfulBlogPost(sort: {fields: date, order: DESC}) {
                  nodes {
                    title
                    desc
                    slug
                    date
                  }
                }
              }
            `,
            output: "/feed.xml",
            title: "ShZh blogs' RSS Feed",
            match: "^/blog/",
          },
        ]
      }
    },
  ]
};