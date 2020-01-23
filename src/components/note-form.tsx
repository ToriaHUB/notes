import React, { useState, ChangeEvent } from "react"
import styled from "styled-components"
import { Button } from "./button"
import { NoteContainer } from "./note-container"

type Props = {
  children?: never
}

export const NoteForm: React.FC<Props> = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const handleChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  return (
    <NoteContainer>
      <Input placeholder={"Title"} onChange={handleChangeTitle} />
      <Textarea placeholder={"Description"} onChange={handleChangeDescription} />
      <ButtonWrapper>
        <Button
          isDisabled={true}
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
  height: 20px;
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
  height: 100px;
  padding: 7px 14px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  color: #495057;
`
const ButtonWrapper = styled.div`
  margin-top: 20px;
`
