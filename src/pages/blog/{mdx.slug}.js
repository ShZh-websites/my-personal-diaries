import * as React from 'react'
import {graphql} from "gatsby";
import Blog from "../../components/Blog";
import {Copyright} from "../../components/Copyright";
import {Helmet} from "react-helmet";

const containerStyles = {
  margin: "0 auto",
  maxWidth: "42rem",
}

const BlogPost = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>ShZh日记｜{data.mdx.frontmatter.title}</title>
      </Helmet>
      <div style={containerStyles}>
        <Blog title={data.mdx.frontmatter.title} body={data.mdx.body} />
        <Copyright />
      </div>
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