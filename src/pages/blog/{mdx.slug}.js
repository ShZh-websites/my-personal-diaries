import * as React from 'react'
import {graphql} from "gatsby";
import Blog from "../../components/Blog";
import {Copyright} from "../../components/Copyright";

const containerStyles = {
  margin: "0 auto",
  maxWidth: "48rem",
}

const BlogPost = ({ data }) => {
  return (
    <div style={containerStyles}>
      <Blog title={data.mdx.frontmatter.title} body={data.mdx.body} />
      <Copyright />
    </div>
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