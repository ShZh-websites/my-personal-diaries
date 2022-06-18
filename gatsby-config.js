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
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": "./blog/"
      }
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
            serialize: ({query: {site, allMdx}}) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.desc,
                  date: node.frontmatter.date,
                  url: encodeURI(site.siteMetadata.siteUrl + '/' + node.slug),
                  guid: site.siteMetadata.siteUrl + node.slug,
                })
              })
            },
            query: `
              {
                allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
                  nodes {
                    frontmatter {
                      date
                      title
                      keyword
                    }
                    id
                    slug
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