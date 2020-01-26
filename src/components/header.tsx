import React from "react"
import styled from "styled-components"
import { theme } from "../styles"
import { LanguageSwitch } from "./language-switch"

type Props = {
  children?: never
}

export const Header: React.FC<Props> = () => {
  return (
    <HeaderStyle>
      <LanguageSwitch />
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 25px;
  background-color: ${theme.color.blue};
  color: ${theme.color.white};
`
