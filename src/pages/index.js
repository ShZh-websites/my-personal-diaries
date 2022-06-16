import * as React from "react"
import {Card} from "../components/Card";
import {Copyright} from "../components/Copyright";
import "normalize.css";

const titleStyles = {
  textAlign: "center"
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

const IndexPage = () => {
  return (
    <div style={mainStyles}>
      <h1 style={titleStyles}>ShZh7的博客</h1>
      <main>
        <div style={containerStyles}>
          <Card keyword={"Kotlin"} title={"我的第一个Q群机器人"} time={"2022-06-16"}></Card>
          <Card keyword={"Kotlin"} title={"我的第二个Q群机器人"} time={"2022-06-16"}></Card>
          <Card keyword={"Kotlin"} title={"我的第三个Q群机器人"} time={"2022-06-16"}></Card>
        </div>
      </main>
      <footer style={footerStyles}>
        <Copyright></Copyright>
      </footer>
    </div>
  )
}

export default IndexPage
