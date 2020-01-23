import React from "react"
import styled from "styled-components"
import { theme } from "../styles"
type Button = "edit" | "delete" | "save" | "detail"
type Props = {
  children: string
  type: Button
  onClick: () => void
}

export const Button: React.FC<Props> = ({ children, onClick, type }) => {
  return (
    <StyledButton onClick={onClick} buttonType={type}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.div<{ buttonType: Button }>`
  font-weight: 400;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  align-self: center;
  color: ${theme.color.white};
  border: none;
  background-color: ${props => getButtonColor(props.buttonType)};

  &:hover {
    cursor: pointer;
  }
`

const getButtonColor = (buttonType: Button) => {
  switch (buttonType) {
    case "edit":
      return theme.color.blue
    case "delete":
      return theme.color.red
    case "save":
      return theme.color.green
    case "detail":
      return theme.color.blue
    default:
      return theme.color.blue
  }
}
