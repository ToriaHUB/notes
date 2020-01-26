import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { useHistory } from "react-router"
import { routes } from "../router"
import { parseDate, truncateString } from "../utils"
import { useTranslation } from "react-i18next"
import { removeNote } from "../api"

type Props = {
  id: string
  title: string
  date: string
  removeNoteCallback: (id: string) => void
}

export const NotePreview: React.FC<Props> = ({ title, date, id, removeNoteCallback }) => {
  const [t] = useTranslation()
  const history = useHistory()
  const handleDetailClick = () => {
    history.push(routes.noteDetail.replace(":id", id))
  }
  const handleRemoveNote = async () => {
    await removeNote(id)
    removeNoteCallback(id)
  }

  return (
    <NoteWrapper>
      <Title>{truncateString(title)}</Title>
      <Date>{parseDate(date)}</Date>
      <Actions>
        <Button type={"detail"} onClick={handleDetailClick}>
          {t("buttons.detail")}
        </Button>
        <Button type={"delete"} onClick={handleRemoveNote}>
          {t("buttons.delete")}
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
  white-space: nowrap;
`
const Date = styled.p`
  display: flex;

  width: 120px;
`
const Actions = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-evenly;
`
