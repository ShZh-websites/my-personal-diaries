import * as React from 'react'
import {graphql} from "gatsby";
import Blog from "../../components/Blog";

const BlogPost = ({ data }) => {
  return (
    <>
      <Blog title={data.mdx.frontmatter.title} body={data.mdx.body}></Blog>
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