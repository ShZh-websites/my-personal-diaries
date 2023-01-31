const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          title
          slug
          post {
            childMdx {
              body
            }
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const postTemplate = path.resolve(`src/components/BlogPost.js`)
  result.data.allContentfulBlogPost.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.slug}`,
      component: postTemplate,
      context: {
        title: post.title,
        body: post.post.childMdx.body
      },
    })
  })
}