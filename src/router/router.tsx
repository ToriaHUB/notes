import React from "react"
import { Notes } from "../components/notes"
import { NoteForm } from "../components/note-form"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { routes } from "./routes"
import { NoteDetail } from "../components/note-detail"
import { AddNote } from "../components/add-note"
import { EditNote } from "../components/edit-note"

type Props = {
  children?: never
}
export const Router: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.notes} component={Notes} />
        <Route exact path={routes.noteDetail} render={() => <NoteDetail />} />
        <Route exact path={routes.addNote} component={AddNote} />
        <Route exact path={routes.editNote} component={EditNote} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
