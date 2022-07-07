import * as React from "react"
import {css} from "@emotion/react";
import {Card} from "../components/Card";
import {Copyright} from "../components/Copyright";
import {graphql} from "gatsby";
import {Helmet} from "react-helmet";
import styled from "@emotion/styled";
import {useContext} from "react";
import {ThemeManagerContext} from "gatsby-emotion-dark-mode";
import {GlobalStyles} from "../components/GlobalStyles";
import "normalize.css";
import "heti/umd/heti.min.css";

const Container = styled.div`
  margin: 0 auto;
  padding: 8px 16px;
  min-height: 100vh;
  max-width: 800px;
`

const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.fontColor};
  font-family: TEXT_CONTENT,TEXT_CONTENT_SYNTH,'Source Han Serif SC',serif;
`

const IndexPage = (props) => {
  let theme = useContext(ThemeManagerContext)

  if (typeof window !== "undefined") {
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', _ => {
          theme.toggleDark()
        });
  }

  return (
    <>
      <Helmet
        htmlAttributes={{lang: 'zh-CN'}}
        meta={[
            {name: "description", content: "沈之豪的个人日记小站"},
            {name: "color-scheme", content: "light dark"}
        ]}>
        <title>ShZh日记｜首页</title>
        <link href="https://diary.shzh.me/feed.xml"
              title="ShZh diary's RSS feed"
              type="application/rss+xml"
              rel="alternate"/>
      </Helmet>
      <GlobalStyles />
      <Container>
        <Title>沈之豪的日记</Title>
        <main css={css`
          display: flex;
          flex-wrap: wrap;
        `}>
          {
            props.data.allMdx.nodes.map(node => (
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
        <Copyright />
      </Container>
    </>
  )
}

export const query = graphql`
  {
    allMdx(sort: { order: ASC, fields: [frontmatter___date] })  {
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
