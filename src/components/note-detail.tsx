import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { NoteContainer } from "./note-container"
import { useHistory } from "react-router"
import { routes } from "../router"

type Props = {
  noteData: {
    title: string
    description: string
    date: string
    id: string
  }
}

export const NoteDetail: React.FC<Props> = ({ noteData }) => {
  const { date, description, title, id } = noteData
  const history = useHistory()

  const handleClick = () => {
    history.push(routes.editNote.replace(":id", id), noteData)
  }

  return (
    <NoteContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Date>{date}</Date>
      <Button type={"edit"} onClick={handleClick}>
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
