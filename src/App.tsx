import React from "react"
import { Router } from "./router"
import { AppLayout } from "./components/app-layout"
import { Provider } from "react-redux"
import { store } from "./redux"
import { Loading } from "./components/loading/loading"

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <AppLayout>
          <Router />
          <Loading />
        </AppLayout>
      </Provider>
    </>
  )
}

export default App
