import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { useHistory } from "react-router"
import { routes } from "../router"
import axios from "axios"
import { parseDate } from "../utils"

type Props = {
  id: string
  title: string
  date: string
  removeNoteCallback: (id: string) => void
}

const removeNote = async (id: string) => {
  const url = process.env.REACT_APP_DB_URL
  await axios.delete(`${url}/notes/${id}.json`)
}

export const NotePreview: React.FC<Props> = ({ title, date, id, removeNoteCallback }) => {
  const history = useHistory()
  const handleDetailClick = () => {
    history.push(routes.noteDetail.replace(":id", id))
  }
  const handleRemoveNote = () => {
    removeNote(id)
    removeNoteCallback(id)
  }

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <Date>{parseDate(date)}</Date>
      <Actions>
        <Button type={"detail"} onClick={handleDetailClick}>
          Detail
        </Button>
        <Button type={"delete"} onClick={handleRemoveNote}>
          Delete
        </Button>
      </Actions>
    </NoteWrapper>
  )
}
const NoteWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
  align-items: center;
`

const Title = styled.h2`
  display: flex;
  padding-right: 10px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const Date = styled.p`
  display: flex;

  width: 120px;
`
const Actions = styled.div`
  display: flex;
  width: 175px;
  justify-content: space-between;
`
