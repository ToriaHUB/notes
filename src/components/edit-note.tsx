import React from "react"
import { NoteForm } from "./note-form"
import { useLocation } from "react-router"
import axios from "axios"

type Props = {
  children?: never
}

const editNote = async (title: string, description: string, id: string | undefined) => {
  if (id) {
    const url = process.env.REACT_APP_DB_URL
    await axios.put(`${url}/notes/${id}.json`, {
      title: title,
      description: description,
      date: JSON.stringify(new Date()),
    })
  } else {
    console.log("Note without id")
  }
}

export const EditNote: React.FC<Props> = () => {
  const location: { state: { id: string; title: string; description: string; date: string } } = useLocation()

  return <NoteForm noteDate={location.state} submitCallback={editNote} />
}
