import React, { useEffect, useState } from "react"
import { NotePreview } from "./note-preview"
import styled from "styled-components"
import axios from "axios"

const fetchNotes = async () => {
  const url = process.env.REACT_APP_DB_URL
  return await axios.get(`${url}/notes.json`)
}

const parseNotesObjectToArray = (notesObject: {
  id: { title: string; description: string; date: string }
}): { id: string; title: string; description: string; date: string }[] => {
  return Object.entries(notesObject).map(([id, note]) => {
    return { id: id, ...note }
  })
}

type Props = {
  children?: never
}

export const Notes: React.FC<Props> = () => {
  useEffect(() => {
    fetchNotes().then(res => setNotes(parseNotesObjectToArray(res.data)))
  }, [])

  const [notes, setNotes] = useState<{ id: string; title: string; description: string; date: string }[]>([])
  const removeNoteFromLocalState = (id: string) => {
    setNotes(
      notes.filter(note => {
        return note.id !== id
      })
    )
  }
  return (
    <NotesWrapper>
      {notes.map((note, index) => (
        <NotePreview
          key={`${note.id}-${index}`}
          id={note.id}
          title={note.title}
          date={note.date}
          removeNoteCallback={removeNoteFromLocalState}
        />
      ))}
    </NotesWrapper>
  )
}

const NotesWrapper = styled.div`
  grid-area: content;
`
