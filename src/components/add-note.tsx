import React from "react"
import { NoteForm } from "./note-form"
import axios from "axios"

type Props = {
  children?: never
}

const addNote = async (title: string, description: string) => {
  const url = process.env.REACT_APP_DB_URL
  await axios.post(`${url}/notes.json`, {
    title: title,
    description: description,
    date: new Date().toString(),
  })
}

export const AddNote: React.FC<Props> = () => {
  return <NoteForm submitCallback={addNote} />
}
