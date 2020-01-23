import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { NoteContainer } from "./note-container"

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
    <NoteContainer>
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
    </NoteContainer>
  )
}

const Title = styled.h2`
  align-self: center;
`
const Description = styled.p`
  align-self: center;
`
const Date = styled.p`
  align-self: flex-start;
`
