import * as React from 'react'
import {MDXRenderer} from "gatsby-plugin-mdx";
import {css, Global} from "@emotion/react";

const titleStyles = {
  textAlign: "center",
  marginTop: "100px",
  marginBottom: "81px",
  fontSize: "3em",
  fontWeight: "500",
  fontFamily: "TEXT_CONTENT_DISPLAY,TEXT_CONTENT_SYNTH,Source Han Serif SC,serif",
}

const containerStyles = {
  margin: "0 auto",
  padding: "0 18px"
}

const Blog = (props) => {
  return (
      <>
        <Global styles={css`
        p {
          line-height: 1.5;
          font-size: 18px;
          text-align: justify;
          font-family: TEXT_CONTENT,TEXT_CONTENT_SYNTH,'Source Han Serif SC',serif;
        }
      `}
        />
        <h1 style={titleStyles}>{props.title}</h1>
        <div style={containerStyles}>
          <MDXRenderer>
            {props.body}
          </MDXRenderer>
        </div>
      </>
  )
}

export default Blog;