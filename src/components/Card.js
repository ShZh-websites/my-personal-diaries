import * as React from "react"

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "8px",
  padding: "8px",
  width: "260px",
  minHeight: "100px",
  borderWidth:" 1px 2px 2px 1px",
  borderColor: "#24292f",
  borderStyle: "solid",
  boxShadow: "2px 2px 0 0 #ffffff, " +
      "4px 4px 0 0 #24292f, " +
      "6px 6px 0 0 #ffffff, " +
      "8px 8px 0 0 #24292f"
}

const titleStyles = {
  fontWeight: "700"
}

export const Card = (props) => {
  return (
    <div style={cardStyles}>
      <span>{props.keyword}</span>
      <span style={titleStyles}>
        <a>{props.title}</a>
      </span>
      <time>{props.time}</time>
    </div>
  )
}
