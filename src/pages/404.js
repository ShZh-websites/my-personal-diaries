import * as React from "react"
import { Link } from "gatsby"
import {titleStyles} from "../components/Blog";
import {css} from "@emotion/react";
import {GlobalStyles} from "../components/GlobalStyles";
import {Helmet} from "react-helmet";

const NotFoundPage = () => {
  return (
    <>
      <Helmet
          htmlAttributes={{lang: 'zh-CN'}}
          meta={[
            {name: "description", content: "沈之豪的个人日记小站"},
            {name: "color-scheme", content: "light dark"}
          ]}>
        <title>404 Not Found</title>
      </Helmet>
      <GlobalStyles />
      <div className="heti heti--classic" css={css`margin: 0 auto`}>
        <h1 style={titleStyles}>没有找到页面</h1>
        <p css={css`
          font-size: 18px;
          text-align: center !important;
        `}>
          点击
          <Link to='/' css={css`
            color: black;
            cursor: alias;
            font-weight: 900;
            text-decoration: underline !important;
            &:hover {
              border: none !important;
            }
          `}>这里</Link>
          回到首页
        </p>
      </div>
    </>
  )
}

export default NotFoundPage
