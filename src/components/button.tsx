import React from "react"
import styled from "styled-components"
import { theme } from "../styles"

type Button = "edit" | "delete" | "save" | "detail"

type Props = {
  children: string
  type: Button
  onClick: () => void
  isDisabled?: boolean
}

export const Button: React.FC<Props> = ({ children, onClick, type, isDisabled = false }) => {
  return (
    <StyledButton onClick={isDisabled ? undefined : onClick} buttonType={type} isDisabled={isDisabled}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.div<{ buttonType: Button; isDisabled: boolean }>`
  font-weight: 400;
  width: min-content;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 20px 5px 20px;

  color: ${theme.color.white};
  border: none;
  background-color: ${props => (props.isDisabled ? theme.color.grey : getButtonColor(props.buttonType))};

  &:hover {
    cursor: ${props => (props.isDisabled ? "not-allowed" : "pointer")};
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
