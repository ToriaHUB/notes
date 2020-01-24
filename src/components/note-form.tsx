import React, { useState, ChangeEvent } from "react"
import styled from "styled-components"
import { Button } from "./button"
import { NoteContainer } from "./note-container"
import { useLocation } from "react-router"

type Props = {
  children?: never
}

export const NoteForm: React.FC<Props> = () => {
  const location: { state?: { id: string; title: string; description: string; date: string } } = useLocation()

  const [title, setTitle] = useState((location.state && location.state.title) || "")
  const [description, setDescription] = useState((location.state && location.state.description) || "")

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const handleChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  return (
    <NoteContainer>
      <Input placeholder={"Title"} onChange={handleChangeTitle} value={title} />
      <Textarea placeholder={"Description"} onChange={handleChangeDescription} value={description} />
      <ButtonWrapper>
        <Button
          isDisabled={!title.trim() || !description.trim()}
          type={"save"}
          onClick={() => {
            console.log("clicked")
          }}
        >
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
