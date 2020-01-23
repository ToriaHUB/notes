import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { Close } from "./close"

type Props = {
  noteData: {
    title: string
    description: string
    date: string
    id: string
  }
}

export const NoteDetail: React.FC<Props> = ({ noteData }) => {
  const { date, description, title } = noteData
  return (
    <NoteWrapper>
      <Close
        onClick={() => {
          console.log("closed")
        }}
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Date>{date}</Date>
      <Button
        type={"edit"}
        onClick={() => {
          console.log("clicked")
        }}
      >
        Edit
      </Button>
    </NoteWrapper>
  )
}

const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  position: relative;
  align-self: center;
  padding: 25px;
  border-radius: 20px;
  background-color: #f5f5f5;
`
const Title = styled.h2`
  align-self: center;
`
const Description = styled.p`
  align-self: center;
`
const Date = styled.p``
