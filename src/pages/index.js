import * as React from "react"
import {Card} from "../components/Card";
import {Copyright} from "../components/Copyright";
import "normalize.css";
import {graphql} from "gatsby";

const titleStyles = {
  textAlign: "center",
  fontFamily: "TEXT_CONTENT,TEXT_CONTENT_SYNTH,'Source Han Serif SC',serif",
}

const mainStyles = {
  margin: "0 auto",
  padding: "8px 16px",
  minHeight: "100vh",
  maxWidth: "800px",
}

const containerStyles = {
  display: "flex",
  flexWrap: "wrap"
}

const footerStyles = {
  paddingTop: "0.75rem"
}

const IndexPage = ({ data }) => {
  return (
    <div style={mainStyles}>
      <h1 style={titleStyles}>ShZh7的博客</h1>
      <main>
        <div style={containerStyles}>
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
        </div>
      </main>
      <footer style={footerStyles}>
        <Copyright></Copyright>
      </footer>
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
