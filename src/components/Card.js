import * as React from "react"
import {Link} from "gatsby";
import {css} from "@emotion/react";
import {useContext} from "react";
import {ThemeManagerContext} from "gatsby-emotion-dark-mode";

export const Card = (props) => {
  let theme = useContext(ThemeManagerContext)

  let bgColor = theme.isDark? '#292929' : 'white';
  let innerBoxShadow = theme.isDark? '#3d3d3d' : 'white';
  let outerBoxShadow = theme.isDark? '#292929' : '#24292f';

  return (
    <div css={css`
      display: flex;
      flex: auto;
      flex-direction: column;
      justify-content: space-between;
      margin: 8px;
      padding: 8px;
      width: 260px;
      min-height: 100px;
      border-width: 1px 2px 2px 1px;
      border-color: #24292f;
      border-style: solid;
      background-color: ${bgColor};
      box-shadow: 
        2px 2px 0 0 ${innerBoxShadow}, 
        4px 4px 0 0 ${outerBoxShadow}, 
        6px 6px 0 0 ${innerBoxShadow}, 
        8px 8px 0 0 ${outerBoxShadow};
`   }>
      <span>{props.keyword}</span>
      <span css={css`font-weight: 700`}>
        <Link
            to={`/blog/${props.link}`}
            css={css`
              position: relative;
              color: ${theme.isDark? '#a3a3a3': 'black'};
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
      <time>{props.date.substring(0, 10)}</time>
    </div>
  )
}
