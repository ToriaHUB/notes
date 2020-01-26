import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Button } from "./button"
import { NoteContainer } from "./note-container"
import { useHistory, useParams } from "react-router"
import { routes } from "../router"
import axios from "axios"
import { parseDate } from "../utils"
import { useDispatch } from "react-redux"

type Props = {
  children?: never
}

const fetchNote = async (id: string) => {
  const url = process.env.REACT_APP_DB_URL
  return await axios.get(`${url}/notes/${id}.json`)
}

export const NoteDetail: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const params: { id?: string | undefined } = useParams()
  useEffect(() => {
    dispatch({ type: "START_LOADING" })
    fetchNote((params.id && params.id) || "").then(res => setNote(res.data))
  }, [])
  dispatch({ type: "STOP_LOADING" })
  const [note, setNote] = useState<{ title: string; description: string; date: string }>({
    title: "",
    description: "",
    date: "",
  })

  const handleClick = () => {
    history.push(routes.editNote.replace(":id", (params.id && params.id) || ""), {
      ...note,
      id: (params.id && params.id) || "",
    })
  }

  return (
    <NoteContainer>
      <Title>{note.title}</Title>
      <Description>{note.description}</Description>
      <Date>{parseDate(note.date)}</Date>
      <ButtonWrapper>
        <Button type={"edit"} onClick={handleClick}>
          Edit
        </Button>
      </ButtonWrapper>
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
  margin-top: 80px;
`
const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 40px;
`
