import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { Notes } from "./components/notes"
import { NoteForm } from "./components/note-form"

const App: React.FC = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path="/note/:noteId" component={NoteForm} />

          <Redirect to="/" />
        </Switch>
    </Router>
  )
}

export default App
