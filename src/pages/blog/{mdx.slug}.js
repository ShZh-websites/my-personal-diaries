import * as React from 'react'
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {
  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`
export default BlogPost