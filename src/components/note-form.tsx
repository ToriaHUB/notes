import React, { useState, ChangeEvent } from "react"
import styled from "styled-components"
import { Button } from "./button"
import { NoteContainer } from "./note-container"

type Props = {
  children?: never
  noteDate?: { id: string; title: string; description: string; date: string }
  submitCallback: (title: string, description: string, id: string | undefined) => void
}

export const NoteForm: React.FC<Props> = ({ noteDate, submitCallback }) => {
  const [title, setTitle] = useState((noteDate && noteDate.title) || "")
  const [description, setDescription] = useState((noteDate && noteDate.description) || "")

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const handleChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }
  const handleSubmitCallback = () => submitCallback(title, description, noteDate && noteDate.id)

  return (
    <NoteContainer>
      <Input placeholder={"Title"} onChange={handleChangeTitle} value={title} />
      <Textarea placeholder={"Description"} onChange={handleChangeDescription} value={description} />
      <ButtonWrapper>
        <Button isDisabled={!title.trim() || !description.trim()} type={"save"} onClick={handleSubmitCallback}>
          Save
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
