import React from "react"
import styled from "styled-components"
import { CloseIcon } from "./closeIcon"

type Props = {
  onClick: () => void
  children?: never
}

export const Close: React.FC<Props> = ({ onClick }) => {
  return (
    <CloseButton onClick={onClick}>
      <CloseIcon />
    </CloseButton>
  )
}

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  align-self: flex-end;

  &:hover {
    cursor: pointer;
  }
`
