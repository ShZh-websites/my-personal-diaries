import * as React from 'react'
import {Blog} from "./Blog";
import {Copyright} from "./Copyright";
import {Helmet} from "react-helmet";

const containerStyles = {
  margin: "0 auto",
  maxWidth: "42rem",
}

const BlogPost = ({ pageContext: post }) => {
  return (
      <>
        <Helmet
            htmlAttributes={{lang: 'zh-CN'}}
            meta={[
              {name: "description", content: "沈之豪的个人日记小站"},
              {name: "color-scheme", content: "light dark"}
            ]}>
          <title>ShZh日记｜{post.title}</title>
        </Helmet>
        <div style={containerStyles}>
          <Blog title={post.title} body={post.body} />
          <Copyright />
        </div>
      </>
  )
}

export default BlogPost