import React from "react"
import styled from "styled-components"
import { theme } from "../styles"

type Props = {}

export const Header: React.FC<Props> = () => {
  return <HeaderStyle>Header</HeaderStyle>
}

const HeaderStyle = styled.div`
  grid-area: header;
  background-color: ${theme.color.blue};
  color: ${theme.color.white};
`
