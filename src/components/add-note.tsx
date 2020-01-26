import React from "react"
import { NoteForm } from "./note-form"
import { addNote } from "../api"

type Props = {
  children?: never
}

export const AddNote: React.FC<Props> = () => {
  return <NoteForm submitCallback={addNote} />
}
