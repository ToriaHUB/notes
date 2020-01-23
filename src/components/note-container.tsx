import React from "react"
import styled from "styled-components"
import { Close } from "./close"

type Props = {
  children: React.ReactNode
}

export const NoteContainer: React.FC<Props> = ({ children }) => {
  return (
    <NoteWrapper>
      <CloseWrapper>
        <Close
          onClick={() => {
            console.log("closed")
          }}
        />
      </CloseWrapper>
      {children}
    </NoteWrapper>
  )
}

const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  position: relative;
  align-items: center;
  padding: 20px 50px;
  border-radius: 20px;
  background-color: #f5f5f5;
`
const CloseWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`
