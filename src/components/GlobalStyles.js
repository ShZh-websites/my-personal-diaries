import * as React from "react";
import {useContext} from "react";
import {Global} from "@emotion/react";
import {ThemeManagerContext} from "gatsby-emotion-dark-mode";

export const GlobalStyles = () => {
  let theme = useContext(ThemeManagerContext)

  return (
    <Global styles={{
      body: {
        color: theme.isDark? '#a3a3a3': 'black',
        backgroundColor: theme.isDark? '#3d3d3d' : 'white'
      }
    }} />
  )
}
