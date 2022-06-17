import * as React from "react"
import {Card} from "../components/Card";
import {Copyright} from "../components/Copyright";
import "normalize.css";
import "heti/umd/heti.min.css";
import {graphql} from "gatsby";
import {Helmet} from "react-helmet";

const titleStyles = {
  textAlign: "center",
  fontFamily: "TEXT_CONTENT,TEXT_CONTENT_SYNTH,'Source Han Serif SC',serif",
}

const containerStyles = {
  margin: "0 auto",
  padding: "8px 16px",
  minHeight: "100vh",
  maxWidth: "800px",
}

const mainStyles = {
  display: "flex",
  flexWrap: "wrap"
}

const IndexPage = ({ data }) => {
  return (
    <>
      <Helmet
          htmlAttributes={{lang: 'zh-CN'}}
          meta={[{name: "description", content: "沈之豪的个人日记小站"}]}>
        <title>ShZh日记｜首页</title>
      </Helmet>
      <div style={containerStyles}>
        <h1 className="heti--kai"  style={titleStyles}>沈之豪的日记</h1>
        <main style={mainStyles}>
          {
            data.allMdx.nodes.map(node => (
                <Card
                    key={node.id}
                    link={node.slug}
                    keyword={node.frontmatter.keyword}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}>
                </Card>
            ))
          }
        </main>
        <Copyright></Copyright>
      </div>
    </>
  )
}

export const query = graphql`
  {
    allMdx {
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
`

export default IndexPage
