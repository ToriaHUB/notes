import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../styles/global"

type Props = {
  children: React.ReactNode
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <GlobalStyle />
      {children}
    </Layout>
  )
}

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    ". content ."
    ". . .";
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 20% 1fr 20%;
  height: 100vh;
  width: 100vw;
`
