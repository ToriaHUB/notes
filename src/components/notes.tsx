import React, { useEffect, useState } from "react"
import { NotePreview } from "./note-preview"
import styled from "styled-components"
import { AddButton } from "./add-button"
import { useHistory } from "react-router"
import { routes } from "../router"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { fetchNotes } from "../api"
import { Note } from "./note-form"

type Props = {
  children?: never
}

export const Notes: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [t] = useTranslation()
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

  const [notes, setNotes] = useState<Note[]>([])
  const removeNoteFromLocalState = (id: string) => {
    setNotes(
      notes.filter(note => {
        return note.id !== id
      })
    )
  }

  return (
    <NotesWrapper>
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <NotePreview
            key={`${note.id}-${index}`}
            id={note.id}
            title={note.title}
            date={note.date}
            removeNoteCallback={removeNoteFromLocalState}
          />
        ))
      ) : (
        <div>{t("info.noNotes")}</div>
      )}
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

const parseNotesObjectToArray = (notesObject: { id: { title: string; description: string; date: string } }): Note[] => {
  if (notesObject === null) {
    return []
  }
  return Object.entries(notesObject).map(([id, note]) => {
    return { id: id, ...note }
  })
}
