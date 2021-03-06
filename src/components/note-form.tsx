import React, { useState, ChangeEvent } from "react"
import styled from "styled-components"
import { Button } from "./button"
import { NoteContainer } from "./note-container"
import { useHistory } from "react-router"
import { routes } from "../router"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"

export type Note = { id: string; title: string; description: string; date: string }

type Props = {
  children?: never
  noteDate?: Note
  submitCallback: (title: string, description: string, id: string | undefined) => void
}

export const NoteForm: React.FC<Props> = ({ noteDate, submitCallback }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [t] = useTranslation()

  const [title, setTitle] = useState((noteDate && noteDate.title) || "")
  const [description, setDescription] = useState((noteDate && noteDate.description) || "")

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const handleChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }
  const handleSubmitCallback = () => {
    dispatch({ type: "START_LOADING" })
    submitCallback(title, description, noteDate && noteDate.id)
    setTimeout(() => {
      history.push(routes.notes)
    }, 2000)
  }

  return (
    <NoteContainer>
      <Input placeholder={"Title"} onChange={handleChangeTitle} value={title} />
      <Textarea placeholder={"Description"} onChange={handleChangeDescription} value={description} />
      <ButtonWrapper>
        <Button isDisabled={!title.trim() || !description.trim()} type={"save"} onClick={handleSubmitCallback}>
          {t("buttons.save")}
        </Button>
      </ButtonWrapper>
    </NoteContainer>
  )
}

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 7px 14px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  align-self: center;
  margin-top: 40px;
  color: #495057;
`
const Textarea = styled.textarea`
  align-self: center;
  margin-top: 40px;
  width: 100%;
  height: 180px;
  padding: 7px 14px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  color: #495057;
`
const ButtonWrapper = styled.div`
  margin-top: 40px;
`
