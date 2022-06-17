import * as React from 'react'
import {MDXRenderer} from "gatsby-plugin-mdx";
import "heti/umd/heti.min.css";


const titleStyles = {
  textAlign: "center",
  paddingTop: "100px",
  paddingBottom: "81px",
  fontSize: "3em",
  fontWeight: "500",
}

const containerStyles = {
  margin: "0 auto",
  padding: "0 18px",
  fontSize: "18px",
}

const Blog = (props) => {
  return (
      <>
        <article class="heti heti--classic">
          <h1 style={titleStyles}>{props.title}</h1>
          <div style={containerStyles}>
            <MDXRenderer>
              {props.body}
            </MDXRenderer>
          </div>
        </article>
      </>
  )
}

export default Blog;