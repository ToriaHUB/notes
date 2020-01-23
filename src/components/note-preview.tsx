import React from "react"
import styled from "styled-components"
import { Button } from "./button"

type Props = {
  id: string
  title: string
  date: string
}

export const NotePreview: React.FC<Props> = ({ title, date }) => {
  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Actions>
        <Button type={"detail"} onClick={() => {}}>
          Detail
        </Button>
        <Button type={"delete"} onClick={() => {}}>
          Delete
        </Button>
      </Actions>
    </NoteWrapper>
  )
}
const NoteWrapper = styled.div`
  display: flex;
  width: 60%;
  height: 40px;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
  align-items: center;
`

const Title = styled.h2`
  display: flex;
  width: 200px;
`
const Date = styled.p`
  display: flex;
  width: 80px;
`
const Actions = styled.div`
  display: flex;
  width: 175px;
  justify-content: space-between;
`
