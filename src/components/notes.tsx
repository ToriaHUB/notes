import React from "react"
import { NotePreview } from "./note-preview"

const mockNotes = [
  { id: "1", title: "Dance with dog", date: "12.01.2020" },
  { id: "2", title: "Sleep with dog", date: "13.01.2020" },
  { id: "3", title: "Eat with dog", date: "15.01.2020" },
]

export const Notes = () => {
  return (
    <>
      {mockNotes.map((note, index) => (
        <NotePreview key={`${note.id}-${index}`} id={note.id} title={note.title} date={note.date} />
      ))}
    </>
  )
}
