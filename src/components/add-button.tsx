import * as React from "react"
import styled from "styled-components"
import { AddIcon } from "./addIcon"
import { theme } from "../styles"

type Props = {
  onClick: () => void
  children?: never
}

export const AddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <AddButtonStyle onClick={onClick}>
      <AddIcon />
    </AddButtonStyle>
  )
}

const AddButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  align-self: flex-end;
  background-color: ${theme.color.green};
  border-radius: 50%;
  padding: 15px;
  position: fixed;
  top: 63px;
  right: 150px;

  &:hover {
    cursor: pointer;
  }
`
