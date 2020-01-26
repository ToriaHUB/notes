import React from "react"
import { NoteForm } from "./note-form"
import { useLocation } from "react-router"
import { editNote } from "../api"

type Props = {
  children?: never
}

export const EditNote: React.FC<Props> = () => {
  const location: { state: { id: string; title: string; description: string; date: string } } = useLocation()

  return <NoteForm noteDate={location.state} submitCallback={editNote} />
}
