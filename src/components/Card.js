import * as React from "react"
import {Link} from "gatsby";
import {css} from "@emotion/react";

const cardStyles = {
  display: "flex",
  flex: "auto",
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

export const Card = (props) => {
  return (
    <div style={cardStyles}>
      <span>{props.keyword}</span>
      <span css={css`font-weight: 700`}>
        <Link
            to={`/blog/${props.link}`}
            css={css`
              position: relative;
              color: black;
              cursor: alias;
              text-decoration: none;
              &:after {
                content: '';
                position: absolute;
                bottom: 0.1em;
                left: 0;
                right: 0;
                border-bottom: 2px solid currentColor;
                transform-origin: right center;
                transform: scaleX(0);
                transition: transform ease-in-out 0.2s;
              }
              &:hover:after {
                transform-origin: left center;
                transform: scaleX(1);
              }
            `}>
          {props.title}
        </Link>
      </span>
      <time>{props.date}</time>
    </div>
  )
}
