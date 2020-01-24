import React from "react"
import { Router } from "./router"
import { AppLayout } from "./components/app-layout"

const App: React.FC = () => {
  return (
    <AppLayout>
      <Router />
    </AppLayout>
  )
}

export default App
