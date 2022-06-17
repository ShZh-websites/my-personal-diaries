module.exports = {
  siteMetadata: {
    title: `my-personal-blogs`,
    siteUrl: `https://diary.shzh.me/`
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
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
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": "./blog/"
      }
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
                  // custom_elements: [{ "content:encoded": node.html }],
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
            output: "/rss.xml",
            title: "ShZh blogs' RSS Feed",
            match: "^/blog/",
          },
        ]
      }
    },
  ]
};