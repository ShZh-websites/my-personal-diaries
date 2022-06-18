import * as React from "react"
import {css} from "@emotion/react";

const lineStyles = {
  margin: "0",
  borderColor: "#e5e7eb",
  borderWidth: "1px 0 0",
}

const copyrightStyles = {
  textAlign: "center",
  paddingTop: "0.75rem",
  color: "#6b7280"
}

export const Copyright = () => {
  return (
    <footer css={css`padding: 1rem 0`}>
      <hr style={lineStyles}></hr>
      <div style={copyrightStyles}>
        Copyright ©️ {new Date().getFullYear()} ShZh7
      </div>
    </footer>
  )
}