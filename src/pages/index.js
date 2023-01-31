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
  console.log(props)
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
            props.data.allContentfulBlogPost.nodes.map(post => (
                <Card
                    key={post.id}
                    link={post.slug}
                    keyword={post.keyword}
                    title={post.title}
                    date={post.date}>
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
  allContentfulBlogPost(sort: {fields: date, order: ASC}) {
    nodes {
      id
      keyword
      title
      slug
      date
    }
  }
}
`

export default IndexPage
