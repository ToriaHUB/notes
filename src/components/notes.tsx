import React, { useEffect, useState } from "react"
import { NotePreview } from "./note-preview"
import styled from "styled-components"
import axios from "axios"
import { AddButton } from "./add-button"
import { useHistory } from "react-router"
import { routes } from "../router"
import { useDispatch } from "react-redux"

const fetchNotes = async () => {
  const url = process.env.REACT_APP_DB_URL

  return await axios.get(`${url}/notes.json`)
}

const parseNotesObjectToArray = (notesObject: {
  id: { title: string; description: string; date: string }
}): { id: string; title: string; description: string; date: string }[] => {
  if (notesObject === null) {
    return []
  }
  return Object.entries(notesObject).map(([id, note]) => {
    return { id: id, ...note }
  })
}

type Props = {
  children?: never
}

export const Notes: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleAddNote = () => {
    history.push(routes.addNote)
  }

  useEffect(() => {
    dispatch({ type: "START_LOADING" })
    fetchNotes().then(res => {
      setNotes(parseNotesObjectToArray(res.data))
      dispatch({ type: "STOP_LOADING" })
    })
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
      <AddButton onClick={handleAddNote} />
    </NotesWrapper>
  )
}

const NotesWrapper = styled.div`
  position: relative;
  grid-area: content;
  min-height: 400px;
  display: flex;
  flex-direction: column;
`
