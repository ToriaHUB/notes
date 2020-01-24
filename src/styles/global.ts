import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0 auto;
  width: 100vw;
  padding: 0;
  position: relative;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}
`
