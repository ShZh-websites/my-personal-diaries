import * as React from "react"
import {Card} from "../components/Card";
import {Copyright} from "../components/Copyright";
import "normalize.css";
import {graphql} from "gatsby";

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
    <div style={containerStyles}>
      <h1 style={titleStyles}>ShZh7的博客</h1>
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
  )
}

export const query = graphql`
  query MyQuery {
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
