import React from "react"
import { Notes } from "../components/notes"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { routes } from "./routes"
import { NoteDetail } from "../components/note-detail"
import { AddNote } from "../components/add-note"
import { EditNote } from "../components/edit-note"
import { Header } from "../components/header"
import { ActiveLang, initTranslations } from "../assets/translations"
import { useSelector } from "react-redux"

type Props = {
  children?: never
}
export const Router: React.FC<Props> = () => {
  const activeLang = useSelector((store: { activeLang: ActiveLang }) => store.activeLang)

  initTranslations(activeLang)

  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.notes} component={Notes} />
          <Route exact path={routes.noteDetail} render={() => <NoteDetail />} />
          <Route exact path={routes.addNote} component={AddNote} />
          <Route exact path={routes.editNote} component={EditNote} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  )
}
