import * as React from "react"

const lineStyles = {
  margin: "0",
  borderColor: "rgb(229, 231, 235)",
  borderWidth: "1px 0 0",
}

const copyrightStyles = {
  textAlign: "center",
  paddingTop: "0.75rem",
  color: "rgb(107, 114, 128)"
}

export const Copyright = () => {
  return (
    <>
      <hr style={lineStyles}></hr>
      <div style={copyrightStyles}>
        Copyright ©️ {new Date().getFullYear()} ShZh7
      </div>
    </>
  )
}