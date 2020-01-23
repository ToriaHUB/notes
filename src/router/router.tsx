import React from "react"
import { Notes } from "../components/notes"
import { NoteForm } from "../components/note-form"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { routes } from "./routes"
import { NoteDetail } from "../components/note-detail"

type Props = {
  children?: never
}
export const Router: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.notes} component={Notes} />
        <Route exact path={routes.noteDetail} component={NoteDetail} />
        <Route exact path={routes.editNote} component={NoteForm} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
