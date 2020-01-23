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
        <Route
          exact
          path={routes.noteDetail}
          render={() => (
            <NoteDetail
              noteData={{
                title: "Do thmth",
                id: "1",
                date: "25.01.2020",
                description:
                  " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n" +
                  "\n",
              }}
            />
          )}
        />
        <Route exact path={routes.addNote} component={NoteForm} />
        <Route exact path={routes.editNote} component={NoteForm} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
